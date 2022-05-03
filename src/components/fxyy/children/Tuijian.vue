<template>
  <div class="tuijian">
    <!-- 轮播图 -->
    <banner />
    <!-- 内容区 -->
    <div class="content">
      <div style="width:730px;border: 2px solid #d3d3d3;">

        <Lists :msg="rmtj">
          <template slot="top">
            <div class="inner">
              <div class="left">
                <div class="yuanquan"></div>
                <h2>热门推荐</h2>
              </div>
              <div class="right">
                <span>更多</span>
                <div class="next"></div>
              </div>
              <div class="footer"></div>
            </div>
          </template>
        </Lists>
        <Xdsjlist :msg="xdsj" />
        <Bandanlist />
      </div>
      <Accountmsg :isshowrzgs="true" />

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
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  .inner {
    // width: 683px;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 50px;
    .left {
      display: flex;
      .yuanquan {
        width: 35px;
        height: 35px;
        background-image: url("../../../assets/img/btns.png");
        background-position: -228px -155px;
      }
    }
    .right {
      display: flex;
      width: 60px;
      align-items: center;

      .next {
        width: 30px;
        height: 30px;
        background-image: url("../../../assets/img/btns.png");
        background-position: 5px -230px;
        // padding-left: 20px;
      }
    }
    .footer {
      width: 100%;
      height: 2px;
      background-color: #c20c0c;
      margin: -5px 0 10px 0;
    }
  }
}
</style>