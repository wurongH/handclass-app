import Vue from 'vue'
import App from './App'
import router from './router'
import api from './axios/api'
// import VConsole from 'vconsole'


// var vConsole = new VConsole();

import store from './store'
Vue.config.productionTip = false;

import filter from './filter/index';
//注册通用的过滤器
for (var filteritem in filter) {
  Vue.filter(filteritem, filter[filteritem])
}

// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//   loading: "https://res.diankeduo.cn/Common/images/Defaultbg.jpg",
// })

// import infiniteScroll from 'vue-infinite-scroll';
// Vue.use(infiniteScroll)

import { AlertPlugin, LoadingPlugin, ConfirmPlugin, Toast, WechatPlugin, ToastPlugin } from 'vux';
Vue.use(AlertPlugin);
Vue.use(LoadingPlugin);
Vue.use(ConfirmPlugin);
Vue.use(Toast);
Vue.use(ToastPlugin);
Vue.use(WechatPlugin)

new Vue({
  el: '#app',
  router,
  store,
  data: {
    eventHub: new Vue()
  },
  ...App,
})
