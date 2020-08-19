import Vue from 'vue';
import upLoad from './src/main.vue';
export default{
    install:()=>{
        Vue.component('mUploadFile',upLoad);
    }
}