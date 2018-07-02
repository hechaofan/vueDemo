<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" :swipeable="true">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" title="'内容 ' + n"  :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" title="'测试 ' + n" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" title="'选项 ' + n" :key="n.id"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '1'
    }
  }
}
</script>

<style>
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #2a6853 !important;
    margin-bottom: 0 !important;
    color: #2a6853 !important;
  }
</style>
