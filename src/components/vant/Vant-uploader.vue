<template>
  <div>
    <div class="img-container">
      <img  :src=imgSrc alt="license">
      <input type="file"  accept="image/*" @change="loadFile" />
    </div>
    <div id="editor">
      <mavon-editor style="height: 100%"></mavon-editor>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
const defaultImg = require('../../assets/license.png')
export default {
  data () {
    return {
      imgSrc: ''
    }
  },
  methods: {
    loadFile (e) {
      var file = e.target.files[0]
      console.log(file)
      if (!file) {
        return
      }
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        this.imgSrc = reader.result
      }
    }
  },
  created () {
    this.imgSrc = defaultImg
  },
  components: {
    mavonEditor
  }
}
</script>

<style>
  #editor {
    margin: auto;
    width: 80%;
    height: 580px;
  }
  .img-container{
    position: relative;
    width: 202px;
    height: 126px;
  }
  .img-container>img{
    width: 100%;
    height: 100%;
  }
  .img-container > input {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0;
  }
</style>
