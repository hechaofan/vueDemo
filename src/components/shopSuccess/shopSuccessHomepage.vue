<template>
  <div>
    <router-view></router-view>
    <div class="shopHomepageFooter">
      <ul class="shopFooterItems">
        <li class="shopFooterItem" @click="skipRouter('buyLottery')">
            <div class="shopFooterItemImg">
              <img src="../../assets/shopSuccessHomepage/4.png" alt="" class="shopFooterItemimg">
            </div>
          <div class="shopFooterItemFont">申领</div>
        </li>
        <li class="shopFooterItem">
          <div class="shopFooterItemImg">
            <img src="../../assets/shopSuccessHomepage/3.png" alt="" class="shopFooterItemimg">
          </div>
          <div class="shopFooterItemFont">排行榜</div>
        </li>
        <li class="shopFooterItem" @click="skipRouter('shopindent')">
          <div class="shopFooterItemImg">
            <img src="../../assets/shopSuccessHomepage/1.png" alt="" class="shopFooterItemimg">
          </div>
          <div class="shopFooterItemFont">订单</div>
        </li>
        <li class="shopFooterItem">
          <div class="shopFooterItemImg">
            <img src="../../assets/shopSuccessHomepage/5.png" alt="" class="shopFooterItemimg">
          </div>
          <div class="shopFooterItemFont">设备</div>
        </li>
        <li class="shopFooterItem">
          <div class="shopFooterItemImg">
            <img src="../../assets/shopSuccessHomepage/2.png" alt="" class="shopFooterItemimg">
          </div>
          <div class="shopFooterItemFont">我的</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    skipRouter (s) {
      if (s === 'shopindent') {
        this.$router.push('/shopindent')
      }
      if (s === 'buyLottery') {
        this.$router.push('/buyLottery')
      }
    }
  }
}
</script>

<style>
  .shopHomepageFooter{
    border-top: 1px solid rgba(0,0,0,0.2);
    background-color: #ffffff;
    position: fixed;
    box-sizing: border-box;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    padding: 0px 10px;
    z-index: 50;
  }
  .shopFooterItems{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .shopFooterItem{
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    text-align: center;
    padding: 2px 5px;
  }
  .shopFooterItemImg{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 3px;
  }
  .shopFooterItemimg{
    width: 35px;
    height: 35px;
    vertical-align: middle;
  }
  .shopFooterItemFont{
    font-size: 14px;
    color: grey;
  }
  .shopFooterItem:active{
    background-color: pink;
    color: red;
  }
</style>
