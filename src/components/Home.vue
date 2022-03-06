<template>
  <div>
    <Navbar />
    <h2>主页</h2>
    <h2>zhuye</h2>
    <Faxianyinyue />
  </div>
</template>

<script>
import Faxianyinyue from './fxyy/Faxianyinyue.vue'
import Navbar from '../components/comps/Navbar.vue'

export default {
  name: 'zhuye',
  components: { Faxianyinyue, Navbar }
}
</script>

<style>
</style>