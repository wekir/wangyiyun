import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  namespaced: true,  //开启命名空间
  state: {},
  action: {},
  mutation: {},
  getters: {}
}

const moduleB = {
  namespaced: true,  //开启命名空间
  state: {},
  action: {},
  mutation: {},
  getters: {}
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

export default store