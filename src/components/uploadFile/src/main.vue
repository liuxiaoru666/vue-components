<template>
  <div>
    <input
      type="file"
      ref="in"
      multiple
      @change="handleChange($event)"
      name=""
      id=""
      accept=""
      style="visibility:hidden;"
    />
    <div class="wrapper" @drop.prevent="handlerDrop($event)" @dragover.prevent>
      <p v-if="fileName">{{ fileName }}</p>
      <img
        v-if="imgURL"
        class="preview"
        :src="imgURL"
        alt="点击选择文件或者拖拽文件到此处"
      />
    </div>
    <button @click="handleClick">{{ imgURL ? "重新选择" : "选择文件" }}</button>
    <button v-if="imgURL || fileName" @click="uploadFile">上传文件</button>
  </div>
</template>
<script>
//断点续传原理
//1.通过slice将大文件分片
//2.计算文件hash值,性能问题解决方式：1、web-worker 2、时间切片  3、抽样hash
//3.向服务端询问当前文件已经上传的切片
//4.进行并发请求,并发数量控制
//5.全部上传完毕，通知服务端合并切片
import md5 from 'js-md5';
export default {
  data() {
    return {
      fileName: "", //文件名
      imgURL: "", //img标签的src能接收：本地或者服务器url/blob浏览器对象/dataUrl base64
      targetfile: {}, //上传文件
      hash:''
    };
  },
  mounted(){
  },
  methods: {
    handleClick() {
      this.$refs.in.click();
    },
    //拖拽选择文件
    handlerDrop(e) {
      this.targetfile = e.dataTransfer.files[0];
      var type = this.targetfile.name.split(".")[1].toLowerCase();
      if (type == "jpg" || type == "jpeg" || type == "png") {
        this.getImgUrl(this.targetfile);
      } else {
        this.getFileName(this.targetfile);
      }
    },
    //点击选择文件
    handleChange(e) {
      this.targetfile = e.target.files[0];
      var type = this.targetfile.name.split(".")[1].toLowerCase();
      if (type == "jpg" || type == "jpeg" || type == "png") {
        this.getImgUrl(this.targetfile);
      } else {
        this.getFileName(this.targetfile);
      }
    },
    //通过file获取图片url
    getImgUrl(file) {
      var URL = window.URL || window.webkitURL;
      this.fileName = "";
      this.imgURL = URL.createObjectURL(file);
    },
    //通过file获取文件名
    getFileName(file) {
      this.imgURL = "";
      this.fileName = file.name;
    },
    //通过slcie API创建文件分片
    createFileChunks(file,maxSize) {
      var size = file.size;
      var max = maxSize * 1024;
      var startPoint = 0,
        endPoint = max,
        fileChunks = [];
      while (size > startPoint) {
        fileChunks.push({file:file.slice(startPoint, endPoint)});
        startPoint = endPoint;
        endPoint = startPoint + max;
      }
        
        return fileChunks;
    },
    async blobToData(blob){
      return new Promise(function(resolve,reject){
        var reader = new FileReader();
        reader.onload = function(event){
          resolve(reader.result)
        };
        reader.readAsArrayBuffer(blob);
      })
    },
    //直接md5计算hash,大文件可能卡顿
    async getHash(blob){
      var data = await this.blobToData(blob);
       return md5(data);
    },
    //web-worker获取hash
    async webWorkerHash(){
      return new Promise(()=>{
        const worker = new Worker('hash.js');
        worker.postMessage('Hello World');
        worker.onmessage = ()=>{
          console.log('recieveMessage')
        }
      })
    },
  //上传
    async uploadFile() {
      var chunks = this.createFileChunks(this.targetfile,100);
      //计算hash
      this.hash = await this.getHash(new Blob([this.targetfile]));
      // this.webworkerHash();

      //向后台询问文件是否上传，或者上传的切片
      // const {isUpload,unploadList} = await this.$axios.post('/',{
      //   hash:'hash',
      //   name:this.targetfile.name
      // })
      //isUpload 是否上传
      if(false){//文件已经上传
        return console.log('上传完成了')
      }
      //get所有切片上传列表   unploadList:已上传切片列表
      var unploadList = [];
        chunks = chunks.map((chunk,index,chunks)=>{
          const chunkName = this.hash+index;
          return{
            hash:this.hash,
            chunk:chunk.file,
            name:chunkName,
            isUpload:unploadList.indexOf(chunkName)>-1?1:0
          }
        })
        console.log(chunks)
        //过滤掉已经上传的chunk,得到上传request列表
        const list = chunks.filter((chunk,index,chunks)=> chunk.isUpload =='0')
              .map(({hash,chunk,name})=>{
                 var fd = new FormData();
                 fd.append('hash',hash);
                 fd.append('chunk',chunk);
                 fd.append('name',name);
                 return fd;
              })
              .map((formData)=>{
                // this.$axios.post('/upload',formData)
              })
              Promise.all(list).then(res=>{
                console.log(res)
              })
              // console.log(list)
        // var requestList = [];

        // this.fileChunks.forEach((ele,index,arr)=>{
        //     requestList.push(this.sendRequest(ele))
        // })
        // //基于promise.all实现并发限制
        // Promise.all(requestList).then(res=>{})
        // .catch(err=>{
            
        // })
     
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 500px;
  height: 200px;
  border: 1px solid #333;
  text-align: center;
  line-height: 100px;
}
.preview {
  width: 100%;
  height: 200px;
}
</style>
