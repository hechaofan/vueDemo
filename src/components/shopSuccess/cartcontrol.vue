<template>
  <div>
    <div class="cartcontrol">
      <div v-show="kind.count" @click.stop="updateKindCount(kind, false, $event)"><icon name="取消" :w="20" :h="20"></icon></div>
      <div class="cart-count" v-show="kind.count">{{kind.count}}</div>
      <div @click.stop="updateKindCount(kind, true, $event)"><icon name="公共组件图标" :w="20" :h="20"></icon></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    kind: Object,
    updateKindCount: Function
  },
  data () {
    return {
      num: 0
    }
  },
  methods: {
    isAdd (boolean) {
      if (boolean) {
        this.num += 1
      } else {
        this.num -= 1
      }
    }
  }
}
</script>

<style>
  .cartcontrol{
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
