<template>
  <div>
    <mt-tab-container v-model="xuanzhe" :swipeable="true">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" title="'外卖 ' + n"  :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 6" title="'订单 ' + n" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 6" title="'发现 ' + n" :key="n.id"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 6" title="'我的 ' + n" :key="n.id"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="xuanzhe">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      xuanzhe: '外卖'
    }
  }
}
</script>

<style>
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: pink !important;
    color: red !important;
  }
</style>
