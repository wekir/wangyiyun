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
        <a-button type="primary"
                  @click="test2">
          点我
        </a-button>
        <a-button type="primary"
                  @click="test3">
          点我
        </a-button>
        <a-button type="primary"
                  @click="test4">
          看看
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

import { songmp } from '../../../network/login'  //测试
import { songxq } from '../../../network/song'
import { rmtjinfo } from '../../../network/pc/rmtj'
import { rmtjfirstinfo } from '../../../network/pc/rmtjfirst'

import { mapActions } from 'vuex'

export default {
  name: 'Tuijian',
  components: { Banner, Accountmsg, Lists },
  data () {
    return {
      id: '21311956',
      rmtj: {}
    }
  },
  mounted () {
    rmtjinfo().then(res => {
      this.rmtj = res.data
      console.log('this.rmtj', this.rmtj);
    })
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    test () {
      songmp(this.id).then(res => {
        console.log('歌曲信息', res);
      })
    },
    test1 () {
      rmtjinfo().then(res => {
        console.log('自己的接口', res);
      })
    },
    test2 () {
      rmtjfirstinfo().then(res => {
        console.log('热门推荐子页面数据', res);
      })
    },
    test3 () {
      songxq(this.id).then(res => {
        console.log('歌曲详情', res);
      })
    },

    test4 () {
      this.switchsong(this.id)
    },

  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
}
</style>