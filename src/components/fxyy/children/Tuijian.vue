<template>
  <div class="tuijian">
    <!-- 轮播图 -->
    <banner />
    <!-- 内容区 -->
    <div class="content">
      <div style="width:733px;border: 2px solid #d3d3d3;">
        <Lists :msg="rmtj" />
        <!-- <Lists :msg="rmtj" /> -->
        <a-button type="primary"
                  @click="test">
          点我
        </a-button>
        <a-button type="primary"
                  @click="test1">
          点我
        </a-button>
      </div>
      <Accountmsg />

    </div>

  </div>
</template>

<script>
import Banner from '../../comps/Banner'  //引入轮播图组件
import Accountmsg from './tuijianchildren/Accountmsg'  //引入右侧账号信息组件
import Lists from './tuijianchildren/Lists'

import { songmp } from '../../../network/login'
import { rmtjinfo } from '../../../network/pc/rmtj'



export default {
  name: 'Tuijian',
  components: { Banner, Accountmsg, Lists },
  data () {
    return {
      id: '208891',
      rmtj: {}
    }
  },
  mounted () {
    rmtjinfo().then(res => {
      console.log('res.data', res.data);
      this.rmtj = res.data
    })
  },
  methods: {
    test () {
      songmp(this.id).then(res => {
        console.log('歌曲信息', res);
      })
    },
    test1 () {
      rmtjinfo().then(res => {
        console.log('自己的接口', res);
      })
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