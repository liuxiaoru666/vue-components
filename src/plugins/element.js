import Vue from 'vue'
import { Button,Table,TableColumn,Notification,MessageBox,Loading,Tree } from 'element-ui'

Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tree)
Vue.prototype.$notify = Notification;
Vue.prototype.$msgBox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$loading = (close)=>{
 let instance = Loading.service({fullscreen: true}); 
 if(!close){
     if(instance){
        instance.close();
     }
 }        
}
