<template>
  <div class="outcontainer">
    <!-- 顶部 -->
    <div class="outer">
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
    </div>
    <!-- 内容区 -->
    <div class="main">
      <Listitem v-for="item in msg"
                :key="item.id">
        <template slot="picture">
          <a href="#">
            <img :src="item.picture">
          </a>
        </template>
        <template slot="content">
          <div class="bofang">
            <!-- {{item.palys}} -->
            <div class="left">
              <i class="iconfont icon-erji icon-sel"></i>
              <span>{{item.plays}}</span>
            </div>
            <i class="iconfont icon-24gl-playCircle icon-sel right"></i>
          </div>
        </template>
        <template slot="footer">
          <div class="info">
            <a href="#">{{item.info}}</a>
          </div>
        </template>
      </Listitem>
    </div>

  </div>
</template>

<script>
import Listitem from './Listitem.vue'

export default {
  name: 'lists',
  components: { Listitem },
  props: ['msg'],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
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
      width: 683px;
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
  }
}
</style>