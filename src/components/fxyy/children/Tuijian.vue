<template>
  <div class="tuijian">
    <!-- 轮播图 -->
    <banner />
    <!-- 内容区 -->
    <div class="content">
      <div style="width:730px;border: 2px solid #d3d3d3;">
        <Lists :msg="rmtj" />
        <Xdsjlist :msg="xdsj" />
        <Bandanlist />
      </div>
      <Accountmsg />

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from '../../comps/Banner'  //引入轮播图组件
import Accountmsg from './tuijianchildren/Accountmsg'  //引入右侧账号信息组件
import Lists from './tuijianchildren/Lists'   //热门推荐
import Xdsjlist from './tuijianchildren/Xdsjlist'   //新碟上架
import Bandanlist from './tuijianchildren/Bandanlist'  //榜单

import { songmp } from '../../../network/login'  //测试
import { songxq } from '../../../network/song'
import { rmtjfirstinfo } from '../../../network/pc/rmtjfirst'
import { xdsjinfo } from '../../../network/pc/xdsj'

import { mapActions } from 'vuex'

export default {
  name: 'Tuijian',
  components: { Banner, Accountmsg, Lists, Xdsjlist, Bandanlist },
  data () {
    return {
      id: '28563317',
      rmtj: {},  //热门推荐
      xdsj: {},   //新碟上架
      rzgexx: {},  //入驻歌手
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