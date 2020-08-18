<template>
  <div id="app">
    <div>
    </div>
    <!-- <el-component/> -->
    <div class="item">
      <el-button @click='open' type='primary'>notice</el-button>
    </div>
    <div class="item">
        <m-tree  v-for='(item,index) in sourceData' :treeData='item' :key='index'></m-tree>
    </div>
    <div class="item">
      <upload-file></upload-file>
    </div>
  </div>
</template>

<script>
import elComponent from './components/elComponent.vue'

export default {
  name: 'app',
  data(){
    return{
      sourceData:[
        {
          label:'一级A',
          isOpen:false,
          children:[{
            label:'二级A',
            isOpen:false,
            children:[{
              label:'三级A',
              isOpen:false,
            }]
          }]
        },
        {
          label:'一级B',
          isOpen:false,
          children:[{
            label:'二级B',
            isOpen:false,
            children:[{
              label:'三级B',
              isOpen:false
          }]
          }]
        }
      ]
       
    }
  },
  components: {
    elComponent
  },
  methods:{
    open(){
      this.$notify({
        message:'通知：鬼画符鬼画符看到过和梵蒂'
      })
    }
  }
}
</script>

<style scoped>
.item{
  margin-top:20px;
}
</style>
