<template>
    <div style="width: 100%;height: 100%;">
      <div class="list-mask" @click="addressShow()"></div>
      <div style="background-color: #ffffff" class="fixed">
        <div class="flex">
          <div @click="addressShow()">取消</div>
          <div>请选择地区</div>
          <div style="color: #2a6853" @click="confirmAddress">确定</div>
        </div>
        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </div>
    </div>
</template>

<script>
import { Picker } from 'mint-ui';
import myaddress from '../../../static/pca.json' //引入省市区数据
export default {
  name: '',
  components: {
    'mt-picker': Picker
  },
  props: {
    addressShow:Function
  },
  data () {
    return {
      myAddress:'',
        flag: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      myAddressProvince:'省',
      myAddressCity:'市',
      myAddresscounty:'区/县',
    }
  },
  created() {


  },
  methods: {
    onMyAddressChange(picker, values) {
      if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
      }
    },
    confirmAddress() {
      this.flag = true
      if(this.flag) {
          this.myAddress = this.myAddressProvince + ' ' +this.myAddressCity +' ' + this.myAddresscounty
          this.$emit('myAddress',this.myAddress)
      }
      this.flag = false
      this.addressShow()
    }
  },
  mounted(){
    this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
}
</script>

<style scoped>
.fixed{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  z-indx:40;
}
  .flex{
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
.list-mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7, 17, 27, 0.6);
}
</style>
