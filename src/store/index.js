import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {captchalogin,passwordlogin} from '../network/login'

const login = {
  namespaced: true,  //开启命名空间
  state: {
    islogin: false  //初始为  未登录
  },
  actions: {
    // 修改登录状态  短信登录
    changelogin(context,value) {
      captchalogin(value.phone, value.captcha).then(() => {
        context.commit('Changelogin',true)
      }).catch((err) => {
        console.log(err);
        this.$message.error('验证码错误，请从新输入');
      })
    },
    // 修改登录状态  密码
    changeloginpw(context,value) {
      // console.log('context',context);
      // console.log('value',value);
      passwordlogin(value.phone, value.password).then((res) => {
        if (res.data.code === 200) {
          context.commit('Changeloginpw',true)
        }
        // 如果密码错误，输出错误信息
        if (res.data.msg) {
          context.commit('Changeloginpw',false)
        }
      })
    }
  },
  mutations: {
    // 修改登录状态  短信登录
    Changelogin(state,value) {
      state.islogin = value
    },
    // 修改登录状态  密码登录
    Changeloginpw(state,value) {
      state.islogin = value
    }
  },
  getters: {}
}

const moduleB = {
  namespaced: true,  //开启命名空间
  state: {},
  actions: {},
  mutations: {},
  getters: {}
}

const store = new Vuex.Store({
  modules: {
    login,
    moduleB
  }
})

export default store