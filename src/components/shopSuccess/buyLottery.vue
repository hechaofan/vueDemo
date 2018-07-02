<template>
  <div>
    <div class="buyLotteryHeaader">
      <img src="../../assets/shopSuccessHomepage/lottery.fb311ac.jpg" alt="">
    </div>
    <div class="lottery-container" :style="{height : tabContHeight + 'px' }">
      <div class="lottery-container-left">
        <ul>
          <li v-for="(lottery,index) in lotterys" :key="lottery.id" class="lotteryTitleWrap" @click="lotteryChange(index)">
            <div class="lotteryTitle">
              {{lottery.title}}
            </div>
          </li>
        </ul>
      </div>
      <div class="lottery-container-right">
        <div class="lotterytitle">{{lotterys[num].title}}</div>
        <div class="list-box" style="overflow: auto" :style="{maxHeight : tabContHeight-66 + 'px' }">
          <div class="item-box" v-for="(kind,index) in lotterys[num].kinds" :key="kind.id">
              <div>
                <div class="item-title mb-3">{{kind.title}}</div>
                <div class="item-des mb-3">单张最高奖金：{{kind.bonus}}万元</div>
                <div class="item-price mb-3">￥{{kind.price}}.00</div>
              </div>
              <cartcontrol :kind="lotterys[num].kinds[index]" :update-kind-count="updatekindCount"></cartcontrol>
          </div>
        </div>
      </div>
    </div>
    <shopcart :totalPrice="totalPrice" :kindList="kindList" :update-kind-count="updatekindCount"></shopcart>
  </div>
</template>

<script>
import cartcontrol from './cartcontrol.vue'
import shopcart from './shopcart.vue'
import Vue from 'vue'
export default {
  data () {
    return {
      tabContHeight: 0,
      lotterys: [
        {
          title: '热销',
          kinds: [
            {title: '小金猪1',
              bonus: 3,
              price: 300
            },
            {title: '棒棒糖1',
              bonus: 1,
              price: 200
            },
            {title: '我爱中国1',
              bonus: 1.5,
              price: 300
            },
            {title: '小金猪1',
              bonus: 3,
              price: 300
            },
            {title: '棒棒糖1',
              bonus: 1,
              price: 200
            },
            {title: '我爱中国1',
              bonus: 1.5,
              price: 300
            },
            {title: '小金猪1',
              bonus: 3,
              price: 300
            },
            {title: '棒棒糖1',
              bonus: 1,
              price: 200
            },
            {title: '我爱中国1',
              bonus: 1.5,
              price: 300
            },
            {title: '小金猪1',
              bonus: 3,
              price: 300
            },
            {title: '棒棒糖1',
              bonus: 1,
              price: 200
            },
            {title: '我爱中国1',
              bonus: 1.5,
              price: 300
            },
            {title: '财运旺好运旺1',
              bonus: 15,
              price: 600
            }
          ]
        },
        {
          title: '1元票',
          kinds: [
            {title: '棒棒糖',
              bonus: 1,
              price: 200
            }
          ]
        },
        {
          title: '2元票',
          kinds: [
            {title: '小金猪',
              bonus: 3,
              price: 300
            },
            {title: '我爱中国',
              bonus: 1.5,
              price: 300
            }
          ]
        },
        {
          title: '5元票',
          kinds: [
            {title: '财运旺好运旺',
              bonus: 15,
              price: 600
            },
            {title: '甜蜜蜜',
              bonus: 10,
              price: 600
            }
          ]
        }
      ],
      num: 1
    }
  },
  computed: {
    kindList () { // 返回所有count>0的kind的数组
      const kinds = []
      this.lotterys.forEach(lottery => {
        lottery.kinds.forEach(kind => {
          if (kind.count) {
            kinds.unshift(kind)
          }
        })
      })
      return kinds
    },
    totalPrice () {
      return this.kindList.reduce((preTotal, kind) => {
        return preTotal + kind.count * kind.price
      }, 0)
    }
  },
  mounted () {
    this.tabContHeight = document.documentElement.clientHeight - 105 - 56 - 70
  },
  methods: {
    lotteryChange (index) {
      this.num = index
    },
    updatekindCount (kind, isAdd, event) {
      if (isAdd) { // 增加
        if (!kind.count) { // 第一次
          // 新增count属性
          // kind.count = 1  // 没有监视-->没有数据绑定, 界面不会更新
          Vue.set(kind, 'count', 1)
        } else {
          kind.count++
        }
      } else { // 减少
        if (kind.count) {
          kind.count--
        }
      }
    }
  },
  components: {
    cartcontrol,
    shopcart
  }
}
</script>

<style>
  .buyLotteryHeaader{
    width: 100%;
    height: 105px;
  }
  .buyLotteryHeaader>img{
    width: 100%;
    height: 105px;
  }
  .lottery-container{
    box-sizing: border-box;
    padding: 10px 5px 5px 5px;
    display: flex;
  }
  .lottery-container-left{
    width: 70px;
    height: 100%;
    margin-right: 5px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .lottery-container-right{
    flex-grow: 1;
    height: 100%;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .lotteryTitleWrap{
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
  }
  .lotteryTitle{
    margin-left: 10px;
    width: 50px;
    height: 56px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .lotterytitle{
    box-sizing: border-box;
    font-size: 18px;
    width: 100%;
    height: 46px;
    line-height: 46px;
    padding-left: 10px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .list-box::-webkit-scrollbar {/*隐藏滚动条*/
    display: none;
  }
  .item-box{
    width: 100%;
    height: 77px;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 7px 15px 4px;
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.1);
    justify-content: space-between;
  }
  .item-title{
    font-size: 18px;
    color: rgba(0,0,0,.75);
  }
  .item-des{
    font-size: 12px;
    color: rgba(0,0,0,.5);
  }
  .item-price{
    font-size: 14px;
    color: red;
  }
  .mb-3{
    margin-bottom: 10px;
  }
</style>
