<template>
  <div class="tuijian">
    <!-- 轮播图 -->
    <banner />
    <div class="content">
      <div style="width:733px;height: 285px;background-color: #bfc;"></div>
      <Accountmsg />

    </div>

  </div>
</template>

<script>
import Banner from '../../comps/Banner'
import Accountmsg from './tuijianchildren/Accountmsg'

export default {
  name: 'Tuijian',
  components: { Banner, Accountmsg },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
}
</style>