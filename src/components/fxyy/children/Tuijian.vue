<template>
  <div class="tuijian">
    <!-- 轮播图 -->
    <banner />
    <!-- 内容区 -->
    <div class="content">
      <div style="width:733px;border: 2px solid #d3d3d3;">
        <Lists :msg="rmtj" />
        <Xdsjlist :msg="xdsj" />
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
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from '../../comps/Banner'  //引入轮播图组件
import Accountmsg from './tuijianchildren/Accountmsg'  //引入右侧账号信息组件
import Lists from './tuijianchildren/Lists'
import Xdsjlist from './tuijianchildren/Xdsjlist'

import { songmp } from '../../../network/login'  //测试
import { songxq } from '../../../network/song'
import { rmtjfirstinfo } from '../../../network/pc/rmtjfirst'
import { xdsjinfo } from '../../../network/pc/xdsj'

import { mapActions } from 'vuex'

export default {
  name: 'Tuijian',
  components: { Banner, Accountmsg, Lists, Xdsjlist },
  data () {
    return {
      id: '28563317',
      rmtj: {},  //热门推荐
      xdsj: {},   //新碟上架
      rzgexx: {}  //入驻歌手
    }
  },
  mounted () {
    //热门推荐
    rmtjfirstinfo().then(res => {
      this.rmtj = res.data
    })
    // 新碟上架
    xdsjinfo().then(res => {
      this.xdsj = res.data
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