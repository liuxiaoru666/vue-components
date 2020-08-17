<template>
  <div id="app">
    <div>
    </div>
    <!-- <el-component/> -->
    <!-- <el-button @click='open' type='primary'>notice</el-button> -->
    <!-- <m-tree  v-for='(item,index) in sourceData' :treeData='item' :key='index'></m-tree> -->
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
            isOpen:false
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
        title:'自定义标题',
        message:'自定义内容'
      })
    }
  }
}
</script>

<style>

</style>
