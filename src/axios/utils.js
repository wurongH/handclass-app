export default {
  getLocalStorage(key){
    var value = localStorage.getItem(key);
    return value ? JSON.parse(value) : 0;
  },
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeLocalStorage(key){ localStorage.removeItem(key) },
  setSessionStorage(key, value){
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSessionStorage(key){
    var value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : false;
  },
  removeSessionStorage(key){ sessionStorage.removeItem(key); },
  /* 获取cookie */
  getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
    else
    return false;
  },
  /* 判断是否是安卓 */
  isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1,

  /* 判断是否是IOS */
  isIOS: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

  /* JS获取CSS属性值 */
  getCurrentStyle (obj, attribute) {
    return obj.currentStyle ? obj.currentStyle[attribute] : document.defaultView.getComputedStyle(obj,false)[attribute];
  },

  /* JS获取网页URL参数 */
  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); return null;
  }
}
