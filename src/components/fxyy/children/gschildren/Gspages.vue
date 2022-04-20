<template>
  <div class="wapper">
    <div class="inner">
      <div class="left">
        <div class="yuanquan"></div>
        <h2>全部</h2>
      </div>
      <div class="right">
        <a-button class="btnstyle"
                  type="primary"
                  @click="btn">
          热门
        </a-button>
      </div>
      <div class="footer"></div>
    </div>
    <Gshasimg :msg="info"></Gshasimg>
    <Gsnoimg v-show="this.noimginfo"
             :msg="noimginfo"></Gsnoimg>
  </div>
</template>

<script>
import Gshasimg from './Gshasimg'
import Gsnoimg from './Gsnoimg'
// import 
export default {
  name: 'Geshou',
  components: { Gshasimg, Gsnoimg },
  data () {
    return {
      // hasimginfo: null
    }
  },
  computed: {
    info () {
      console.log('this.$route.params.itemdata', this.$route.params.itemdata);
      return this.$route.params.itemdata
    },
    noimginfo () {
      return this.$route.params.itemdatanoimg
    }
  },
  // mounted() {

  // },
  methods: {
    btn () {
      console.log('歌手页面');
    }
  }
}
</script>

<style scoped lang="scss">
.wapper {
  padding: 40px;
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
      .btnstyle {
        background-color: #c20c0c;
        width: 60px;
        height: 30px;
        border: none;
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