import Vue from 'vue'
import Router from 'vue-router'
import loadImgDemo from '@/components/loadImgDemo'
import homePage from '@/components/homePage'
import tabContainer from '@/components/tabContainer'
import tabBar from '@/components/tabBar'
import shopSuccess from '@/components/shopSuccess'
import cssNav from '@/components/css/cssNav'
import VantUploader from '@/components/Vant/Vant-uploader'
import markdownEditor from '@/components/markdownEditor/markdownEditor'
import es6 from '@/components/es6/es6'

Vue.use(Router)

export const router = new Router({
  routes: [
    { path: '/', redirect: '/homePage' },
    {
      path: '/loadImgDemo',
      name: 'loadImgDemo',
      component: loadImgDemo,
      meta: {title: '上传图片普通版'}
    },
    {
      path: '/markdownEditor',
      name: 'markdownEditor',
      component: markdownEditor,
      meta: {title: 'markdownEditor'}
    },
    {
      path: '/es6',
      name: 'es6',
      component: es6,
      meta: {title: 'es6'}
    },
    {
      path: '/VantUploader',
      name: 'VantUploader',
      component: VantUploader,
      meta: {title: '上传图片demo'}
    },
    {
      path: '/cssNav',
      name: 'cssNav',
      component: cssNav,
      meta: {title: 'css导航栏下滑跟随效果'}
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage,
      meta: {title: '首页'}
    },
    {
      path: '/tabContainer',
      name: 'tabContainer',
      component: tabContainer,
      meta: {title: '顶部滑动面板'}
    },
    {
      path: '/tabBar',
      name: 'tabBar',
      component: tabBar,
      meta: {title: '底部滑动面板'}
    },
    {
      path: '/shopSuccessHomepage',
      name: 'shopSuccessHomepage',
      component: shopSuccess.shopSuccessHomepage,
      redirect: '/buyLottery',
      meta: {title: '商户成功主页'},
      children: [
        {
          path: '/shopIndent',
          name: 'shopIndent',
          component: shopSuccess.shopIndent,
          meta: {title: '商户成功订单'}
        },
        {
          path: '/buyLottery',
          name: 'buyLottery',
          component: shopSuccess.buyLottery,
          meta: {title: '商户购买彩票'}
        }
      ]
    }
  ]
})

router.afterEach((to, from) => {
  let titleEle = document.getElementsByTagName('title')[0]
  let title = (to.meta && to.meta.title) ? to.meta.title : 'vuedemo'
  titleEle.innerHTML = title
})
