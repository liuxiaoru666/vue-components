<template>
    <div>
        <div>
            {{treeData.label}}
            <span v-if='isOpenFolder' @click='toggle(treeData)'>{{treeData.isOpen?'-':"+"}}</span>
            <!-- 递归组件 -->
            <ul v-if='isOpenFolder' v-show='treeData.isOpen'>
                <mtree v-for='(i,p) in treeData.children' :treeData = 'i' :key = 'p'>
                    <li>{{i.label}}</li>
                </mtree>
            </ul>
            </div>
    </div>
</template>
<script>
//关键点，组件递归，
//name对递归组件是必须的
export default {
    name:'mtree',
    props:{
        treeData:{
            type:Object,
            required:true
        }
    },
    computed:{
        isOpenFolder(){
            return this.treeData.children&&this.treeData.children.length;
        }
    },
    methods:{
       toggle(i){
           i.isOpen=!i.isOpen
       }
    }

}
</script>
<style scoped>
    
</style>