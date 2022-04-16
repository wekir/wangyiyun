<template>
  <div class="box">
    <!-- <h1>排行榜</h1> -->
    <div class="header">
      <div class="imgstyle">
        <img :src="info.picture"
             alt="飙升榜">
      </div>

      <div class="headerRight">
        <h2>{{info.whichbd}}</h2>
        <div class="contentspan">
          <i class="iconfont icon-erji icon-sel"></i>
          <span style="margin-left: 10px">{{info.time}}</span>
          <span>{{info.gxtime}}</span>
        </div>
        <div>
          <a-button type="primary"
                    @click="bfsong">
            <i class="iconfont icon-24gl-playCircle icon-sel"
               style="margin-right: 5px;"></i>
            播放
          </a-button>
        </div>
      </div>
    </div>
    <div>
      <Songslist :ids="info.songid" />
    </div>
  </div>
</template>

<script>
import Songslist from '../../../comps/Songslist'

export default {
  name: 'Phbpages',
  components: { Songslist },
  computed: {
    info () {
      return this.$route.params.itemdata
    }
  },
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  // beforeRouteEnter (to, from, next) {
  //   console.log(123);
  //   console.log(to);
  //   // console.log(this.$route);
  //   // this.info = this.$route.params.itemdata
  //   // // this.$bus.$on('senditeminfo', this.getinfo)
  //   // console.log('0', this.info);
  //   next()
  // },
  // // created () {
  // //   // 数据
  // //   console.log();
  // //   console.log(this.$route);
  // //   this.info = this.$route.params.itemdata
  // //   // this.$bus.$on('senditeminfo', this.getinfo)
  // //   console.log('0', this.info);
  // // },
  mounted () {
    console.log(111);
  },
  methods: {
    getinfo (data) {
      // console.log('11111');
      console.log('data', data);
      this.info = data
      console.log('this.info', this.info);
    },
    bfsong () {
      console.log('播放');
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  padding: 40px 40px 40px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .header {
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    .imgstyle {
      padding: 3px;
      border: 1px solid #cccccc;
    }
    .headerRight {
      margin: 17px 30px;
      .contentspan {
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>