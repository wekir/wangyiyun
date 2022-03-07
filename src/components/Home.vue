<template>
  <div>
    <Navbar @selectItem="selectItem" />
    <!-- <h2>主页</h2>
    <h2>zhuye</h2> -->
    <!-- <Faxianyinyue v-if="showitem === '1'" />
    <Wodeyinyue v-if="showitem === '2'" />
    <Guanzhu v-if="showitem === '3'" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '../components/comps/Navbar.vue'
// import Faxianyinyue from './fxyy/Faxianyinyue.vue'
// import Wodeyinyue from './wdyy/Wodeyinyue.vue'
// import Guanzhu from './gz/Guanzhu.vue'


export default {
  name: 'zhuye',
  components: { Navbar },
  data () {
    return {
      // showitem: '1' //当前展示的页面  发现音乐
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

<style>
</style>