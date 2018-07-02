<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待支付</mt-tab-item>
      <mt-tab-item id="2">待收货</mt-tab-item>
      <mt-tab-item id="3">已完成</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" :swipeable="true" :style="{height : tabContHeight + 'px' }">
      <mt-tab-container-item id="1">
        <h1>待支付</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <h1>待收货</h1>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <h1>已完成</h1>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '1',
      tabContHeight: 0
    }
  },
  mounted () {
    this.tabContHeight = document.documentElement.clientHeight - 122
  }
}
</script>

<style>
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #2a6853 !important;
    margin-bottom: 0 !important;
    color: #2a6853 !important;
  }
  .mint-tab-item-label {
    font-size: 16px !important;
  }
</style>
