<template>
  <div>
    <Header />
    <div style="display: flex">
      <!-- 侧边框 -->
        <Aside />
      <!-- 内容区域 -->
        <router-view style="flex: 1" />
    </div>
    <!-- <Text /> -->
    
    
  </div>



</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from'../view/Header.vue'
// import Text from'./components/Text.vue'
import Control from'../view/Controler.vue'
import Aside from '../view/aside.vue'

//import Photo from'./components/Photoer.vue'
import 'element-plus/dist/index.css'
import { ElConfigProvider } from 'element-plus'


export default {
  name: 'App',
  components: {
    Header,
    // Text,
    //Photo,
    Control,
    Aside,
    [ElConfigProvider.name]: ElConfigProvider,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ccd5e6;
  height:630px;
  width:100%
}


</style>
