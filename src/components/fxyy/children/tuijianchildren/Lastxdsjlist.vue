<template>
  <div class="outcontainer">
    <!-- 顶部 -->
    <div class="outer">
      <div class="inner">
        <div class="left">
          <div class="yuanquan"></div>
          <h2>新碟上架</h2>
        </div>
        <div class="right">
          <span>更多</span>
          <div class="next"></div>
        </div>
        <div class="footer"></div>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="main">
      <Xdsjlistitem v-for="(item,index) in msg"
                    :key="item.id">
        <template slot="picture">
          <router-link :to="{name:'xdsjitempages',params: {allinfo:itemsmsg,index:index}}"
                       href="#">
            <img :src="item.picture">
          </router-link>
        </template>
        <template slot="content">
          <div class="bofang">
            <!-- {{item.palys}} -->
            <div class="left">
              <i class="iconfont icon-erji icon-sel"></i>
              <span>{{item.plays}}</span>
            </div>
            <i class="iconfont icon-24gl-playCircle icon-sel right"
               @click="bfsong(item)"></i>
          </div>
        </template>
        <template slot="footer">
          <div class="info">
            <a href="#">{{item.title}}</a>
            <div>{{item.author}}</div>
          </div>
        </template>
      </Xdsjlistitem>
    </div>
  </div>
</template>

<script>
import Xdsjlistitem from './Xdsjlistitem'
import { mapState, mapActions } from 'vuex'
import { lastXDSJinfo } from '../../../../network/pc/lastxdsj'


export default {
  name: 'lastxdsjlist',
  components: { Xdsjlistitem },
  props: ['msg'],
  data () {
    return {
      itemsmsg: '权威u'
    }
  },
  mounted () {
    // lastXDSJinfo().then(res => {
    //   this.itemsmsg = res
    // })
    lastXDSJinfo().then(res => {
      // console.log('resmmmm', res);
      this.itemsmsg = res
      console.log('this.itemsmsg', this.itemsmsg);
    })
  },
  computed: {
    ...mapState('songinfo', ['audio'])
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    // 播放
    bfsong (item) {
      let arr = JSON.parse(item.bofangid)
      let musicid = arr.map(item => {
        return item.slice(9)
      });
      this.switchsong(musicid)
    },
  }
}
</script>

<style scoped lang="scss">
.outcontainer {
  width: 733px;
  // background-color: red;
  .outer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 7px;

    .inner {
      // width: 683px;
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 20px 50px 20px;
      .left {
        display: flex;
        .yuanquan {
          width: 35px;
          height: 35px;
          background-image: url("../../../../assets/img/btns.png");
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
          background-image: url("../../../../assets/img/btns.png");
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

  .main {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    a {
      display: block;
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>