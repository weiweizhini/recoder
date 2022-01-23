/* 
    整个项目的入口文件
*/
// 引入Vue
import { createApp } from 'vue'
//引入App组件 所有组件的父组件
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//Vue.config.productionTip = false
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
// 创建Vue实例对象 
createApp(App).use(VueAxios,axios)
.use(router)
.use(ElementPlus)
.mount('#app')


