import Vue from 'vue';
import Main from './main.vue';
//通过Vue.exnted得到构造器
const mainConstructor = Vue.extend(Main);

export default function Notify(options){
    //1.实例化，外部参数options传入构造器与实例data合并
   const instance  = new mainConstructor({data:options});
   //2.手动挂载,完成dom渲染
   instance.$mount();
   //3.把根节点插入body
   document.body.appendChild(instance.$el);
    return instance;
}