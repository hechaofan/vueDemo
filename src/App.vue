<template>
  <div id="app" class="bg-c">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body, #app{
    height: 100%;
    overflow: hidden;
  }
  *{
    margin: 0;
    padding: 0;
  }
  .bg-c{
    background-color: #F0F4F6;
  }
</style>
