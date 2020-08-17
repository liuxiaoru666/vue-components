import Vue from 'vue'
import App from './App.vue'
//element-ui组件
import './plugins/element.js'
//通过js调用的组件
import Notify from './components/notify/index';
Vue.prototype.$notify = Notify;
//通过标签引用的组件
import  mTree from './components/tree/index';
Vue.use(mTree);
import  uploadFile from './components/uploadFile/index';
Vue.use(uploadFile);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
