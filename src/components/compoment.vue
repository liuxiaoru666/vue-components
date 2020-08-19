<template>
  <div class="hello">
   <div class="notice">
      <el-button type='primary' @click='notify'>Notice</el-button>
      <el-button type='primary' @click='msg'>MessageBox</el-button>
      <el-button type='primary' @click='alert'>Alert</el-button>
      <el-button type='primary' @click='confirm'>Confirm</el-button>
      <el-button type='primary' @click='prompt'>Prompt</el-button>
   </div>
   <div class="tree">
     <el-tree :data='treeData' @node-click="handleNodeClick"></el-tree>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData:[
        {label:'一级1',
        children:[
          {
            label:'二级A',
            children:[
          {
            label:'三级a'
          }
        ]
          }
        ]
        },
        {label:'一级2',
        children:[
          {
            label:'二级B'
          }
        ]
        },
        {label:'一级3',
        children:[
          {
            label:'二级C'
          }
        ]
        }
      ]
    };
  },
  created(){
    this.$loading(true)
  },
  mounted(){
    
   setTimeout(()=>{
     this.$loading(false);
   },2000)
  },
  methods:{
    notify(){
       this.$notify({
      title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration:0,
          type: 'success',
          position:'bottom-right',
          showClose:'true',
          onClose:()=>{
            console.log('关闭通知')
          }
    })
    },
    msg(){
      this.$msgBox({
        title:'标题',
        message:'消息内容'
      })
    },
    alert(){
       this.$alert('消息内容','标题')
    },
    confirm(){
      this.$confirm('消息内容','标题')
    },
    prompt(){
      this.$prompt('消息内容','标题')
    },
    handleNodeClick(data){
      console.log(data)
    }
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
