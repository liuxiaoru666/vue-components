import Vue from 'vue'
import App from './App.vue'
//element-ui组件
import './plugins/element.js'
import './components/index.js';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
