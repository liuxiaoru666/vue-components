import Vue from 'vue';
import collapseItem from './src/main.vue';

export default{
    install:()=>{
        Vue.component('mCollapseItem',collapseItem);
    }
}