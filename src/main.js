import Vue from 'vue'
import App from './App.vue'
//引入路由
// import VueRouter from 'vue-router'
// import router from './router'
// // 引入vuex
// import store from './store'

Vue.config.productionTip = false  //关闭生产提示

// 应用插件
// Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  // router,
  // store,
  // 事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
