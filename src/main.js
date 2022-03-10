import Vue from 'vue'
import App from './App.vue'
// 引入字体图标
import './assets/icons/iconfont/iconfont.css';
//引入路由
import VueRouter from 'vue-router'
import router from './router/index'
// // 引入vuex
import store from './store'

// 引入antdvue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// 引入音乐播放器
// import APlayer from '@moefe/vue-aplayer';

Vue.config.productionTip = false  //关闭生产提示

// 应用插件
Vue.use(VueRouter)
Vue.use(Antd)
// Vue.use(APlayer, {
//   defaultCover: 'https://github.com/u3u.png',
//   productionTip: true,
// });

new Vue({
  render: h => h(App),
  router,
  store,
  // 事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
