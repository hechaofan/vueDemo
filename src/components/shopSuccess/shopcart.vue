<template>
  <div>
    <div class="LotteryFooter">
      <div class="content">
        <div class="contentLeft" @click="toogleList">
          <div class="logo-wrapper">
            <div class="log logb1" v-show="kindList.length == 0">
              <icon name="购物车" :w="24" :h="24"></icon>
            </div>
            <div class="log logb2" v-show="kindList.length > 0">
              <icon name="购物车 (1)" :w="24" :h="24"></icon>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>
          <div class="totalPrice">￥{{totalPrice}}</div>
        </div>
        <div class="contentRight">
          <div class="btn btn-primary">去下单</div>
        </div>
      </div>
      <transition name="fold">
        <div class="shopcart-list" v-show="ListShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content" ref="listContent" style="overflow: auto">
            <ul>
              <li class="kind" v-for="kind in kindList" :key="kind.id">
                <span class="name">{{kind.title}}</span>
                <div class="price"><span>￥{{kind.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :kind="kind" :update-kind-count="updateKindCount"></cartcontrol>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="ListShow" @click="toogleList"></div>
    </transition>
  </div>
</template>

<script>
import cartcontrol from './cartcontrol.vue'
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    totalPrice: Number,
    kindList: Array,
    updateKindCount: Function
  },
  methods: {
    toogleList () {
      this.isShow = !this.isShow
    },
    clearCart () {
      this.kindList.forEach(kind => {
        kind.count = 0
      })
    }
  },
  computed: {
    totalCount () {
      return this.kindList.reduce((preTotal, kind) => {
        return preTotal + kind.count
      }, 0)
    },
    ListShow () {
      let that = this
      if (that.totalCount === 0) {
        that.isShow = false
        return false
      }
      return that.isShow
    }
  },
  components: {
    cartcontrol
  }
}
</script>

<style>
  .LotteryFooter{
    position: fixed;
    left: 0;
    bottom: 68px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    z-index: 50;
  }
  /*content*/
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(234,234,234);
  }
  .contentLeft{
    position: relative;
    bottom: 0;
    flex-grow: 1;
    height: 100%;
  }
  .totalPrice{
    position: absolute;
    right: 0;
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 18px;
  }
  .logo-wrapper{
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    padding: 6px;
    border-radius: 50%;
    margin: 0 12px;
    background-color: rgb(234,234,234);
  }
  .num{
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
  .log{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 10px;
  }
  .logb1{
    background-color: #C4C9C9;
  }
  .logb2{
    background-color: #2a6853;
  }
  .contentRight{
    width: 105px;
    height: 100%;
  }
  .btn-primary {
    color: #fff;
    background-color: #2a6853;
  }
  .btn {
    margin-left: 20px;
    margin-top: 4px;
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
  }
  /*shopcart-list*/
  .shopcart-list{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #ffffff;
    transform: translate3d(0, -100%, 0); /*显示时的状态*/
    z-index: -1;
  }
  .fold-enter-active, .fold-leave-active{
    transition: all 0.5s;
  }
  .fold-enter,.fold-leave-active{
    transform: translate3d(0, 0, 0);
  }
  .list-header{
    height: 40px;
    line-height: 40px;
    padding: 0 18px;
    background: #f3f5f7;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .title{
    float: left;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .empty{
    float: right;
    font-size: 12px;
    color: #2a6853;
  }
  .list-content{
    padding: 0 18px;
    max-height: 300px;
    overflow: hidden;
    background: #fff;
  }
  .list-content::-webkit-scrollbar {/*隐藏滚动条*/
    display: none;
  }
  .kind{
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .name{
    line-height: 24px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .price{
    position: absolute;
    right: 90px;
    bottom: 12px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 700;
    color: rgb(240, 20, 20);
  }
  .cartcontrol-wrapper{
    position: absolute;
    right: 0;
    bottom: 12px;
  }
  /*list-mask*/
  .list-mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
  }
  .fade-enter-active,.fade-leave-active{
    transition: all 0.5s;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
</style>
