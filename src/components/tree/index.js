import Vue from 'vue';
import tree from './src/main.vue';
export default {
    install:()=>{
        Vue.component('mTree',tree)
    }
}