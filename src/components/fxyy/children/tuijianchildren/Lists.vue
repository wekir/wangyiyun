<template>
  <div class="outcontainer">
    <!-- 顶部 -->
    <div class="outer">
      <!-- <div class="inner">
        <div class="left">
          <div class="yuanquan"></div>
          <h2>热门推荐</h2>
        </div>
        <div class="right">
          <span>更多</span>
          <div class="next"></div>
        </div>
        <div class="footer"></div>
      </div> -->
      <slot name="top"></slot>
    </div>
    <!-- 内容区 -->
    <div class="main">
      <!-- <h1>{{msg}}</h1> -->
      <Listitem v-for="(item,index) in msg"
                :key="item.id">
        <template slot="picture">
          <router-link :to="{name:'rmtjitempages',params: {allinfo:item,index:index}}"
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
          </div>
        </template>
      </Listitem>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Listitem from './Listitem.vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import { rmtjfirstinfo } from '../../../../network/pc/rmtjfirst'

export default {
  name: 'lists',
  components: { Listitem },
  props: ['msg'],
  data () {
    return {
      itemsmsg: '权威u'
    }
  },
  mounted () {
    rmtjfirstinfo().then(res => {
      this.itemsmsg = res
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
    // 跳到每个a的页面
    // runitem () {
    //   this.$router.push({
    //     name: 'rmtjitempages'
    //   })
    // }
  }
}
</script>

<style scoped lang="scss">
.outcontainer {
  // width: 733px;
  // background-color: red;
  .outer {
    width: 100%;
    display: flex;
    justify-content: center;
    // padding-top: 7px;
    padding: 7px 20px 0 20px;

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
        width: 140px;
        height: 140px;
      }
    }
  }
}
</style>