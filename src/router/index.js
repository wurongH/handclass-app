import Vue from 'vue'
import Router from 'vue-router'

//二级跳转通用视图
const routerView = resolve => require(['components/router-view'], resolve),

//首页
THome = resolve => require(['pages/teacher/home'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    //教师端
    {
      path: '/teacher',  name: 'teacher',  component: routerView,
      children: [
        { path: 'home', name: 'teacher-home', component: THome, meta: { requireAuth: true, auth: false, title: '文章列表' } },
      ]
    },
  ]
})
