// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Icon from 'vue2-svg-icon/Icon.vue'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(Vant)
Vue.component('icon', Icon)

Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
