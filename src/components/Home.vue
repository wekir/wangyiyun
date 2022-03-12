<template>
  <div style="padding-bottom: 74px">
    <Navbar @selectItem="selectItem" />
    <!-- <h2>主页</h2>
    <h2>zhuye</h2> -->
    <!-- <Faxianyinyue v-if="showitem === '1'" />
    <Wodeyinyue v-if="showitem === '2'" />
    <Guanzhu v-if="showitem === '3'" /> -->
    <router-view></router-view>
    <Bottomyinpin />
  </div>
</template>

<script>
import Navbar from '../components/comps/Navbar.vue'
import Bottomyinpin from '../components/comps/Bottomyinpin'
// import Faxianyinyue from './fxyy/Faxianyinyue.vue'
// import Wodeyinyue from './wdyy/Wodeyinyue.vue'
// import Guanzhu from './gz/Guanzhu.vue'



export default {
  name: 'zhuye',
  components: { Navbar, Bottomyinpin },
  data () {
    return {
      // showitem: '1' //当前展示的页面  发现音乐
      // 音频列表
    }
  },
  methods: {
    selectItem (value) {
      console.log('hhh', value)
      // this.showitem = value
    }
  }
}
</script>

<style scoped lang="scss">
</style>