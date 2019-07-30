import Vue from 'vue'
import router from '../router/index'
import axios from 'axios'
import utils from './utils'
import QS from 'qs'

axios.interceptors.request.use(config => {
  return config
}, error => Promise.reject(error))

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

var checkStatus = response =>{
  if (response.status === 200 || response.status === 304) {
    return response.data
  }
  setTimeout(_ =>{ Vue.$vux.loading.hide(200) }, 500)
  Vue.$vux.toast.text('服务器错误,错误状态码为:' + response.status, 'middle')
  return {
    result_id: response.status,
    result_msg: response.statusText,
    data: response.statusText,
  }
},
checkCode = res =>{
  if (res.result_id !== 0) {
    Vue.$vux.toast.text(res.result_msg, 'middle')
  }else if(res.result_id == 'expires'){
    router.push({ path: '/login' })
  }
  setTimeout(_ =>{ Vue.$vux.loading.hide(200) }, 500)
  return res
},
post = (url, data, isShowLoading) =>{
  !isShowLoading && Vue.$vux.loading.show({
    text: ' '
  })
  !(data instanceof FormData) && (data = QS.stringify(data))
  return axios({
    method: 'post',
    url,
    data,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(checkStatus).then(checkCode)
},
get = (url, params) =>{
  return axios({
    method: 'get',
    url,
    params,
    timeout: 30000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  }).then(checkStatus).then(checkCode)
};
Vue.prototype.post = post;
Vue.prototype.get = get;
Vue.prototype.$common = Object.assign({}, utils, {
})
