import Vue from 'vue';
import collapse from './src/main.vue';
export default {
    install:()=>{
        Vue.component('mCollapse',collapse);
    }
}