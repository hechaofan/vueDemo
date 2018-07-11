<template>
  <div>
    <h1>首页</h1>
    <router-link to="/tabContainer">顶部点击滑动面板</router-link>
    <br><br>
    <router-link to="/tabBar">底部点击滑动面板</router-link>
    <br><br>
    <router-link to="/shopSuccessHomepage">商户注册成功主页</router-link>
    <br><br>
    <router-link to="/cssNav">css下划线跟随效果</router-link>
    <br><br>
    <router-link to="/VantUploader">图片即选即得显示</router-link>
    <br><br>
    <router-link to="/loadImgDemo">Vue.js移动端拍照压缩图片预览，放大，删除，上传</router-link>
    <br><br>
    <router-link to="/markdownEditor">markdown编辑器</router-link>
    <br><br>
    <router-link to="/es6">es6</router-link>
    <br><br>
    <div @click="addressShow">点击显示三级联动</div>
    <mintuiPicker v-if="addShow" :addressShow="addressShow" @myAddress="getAddress"></mintuiPicker>
    {{address}}
  </div>
</template>

<script>
import loadImg from './loadImgDemo.vue'
import mintuiPicker from './mintui/mintui-picker.vue'

const defaultImg = require('../assets/license.png')
export default {
  components: {
    loadImg,
    mintuiPicker
  },
  data () {
    return {
      imgSrc: '',
      addShow: false,
      address: ''
    }
  },
  created () {
    this.imgSrc = defaultImg
  },
  methods:{
    addressShow () {
        this.addShow = !this.addShow
    },
    getAddress (address) {
        this.address = address
    }
  }
}
</script>

<style>
</style>
