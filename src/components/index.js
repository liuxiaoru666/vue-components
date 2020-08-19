import Vue from 'vue';
//通过js调用的组件
import Notify from './notify/index';
Vue.prototype.$notify = Notify;
//通过标签引用的组件
import  mTree from './tree/index';
import  uploadFile from './uploadFile/index';
import  collapse from './collapse/index';
import  collapseItem from './collapseItem/index';
Vue.use(mTree);
Vue.use(uploadFile);
Vue.use(collapse);
Vue.use(collapseItem);