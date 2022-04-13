<template>
  <div class="outter">
    <div class="content">
      <div class="left">
        <div class="title">
          <strong>
            <h3>
              云音乐特色榜
            </h3>
          </strong>
        </div>
        <a-menu style="width: 248px"
                mode="vertical"
                @click="handleClick"
                class="left">
          <a-menu-item v-for="(item) in phbdata"
                       :key="item.id"
                       class="menu-item">
            <!-- ,query: {info: phbdata[index]} -->
            <!-- <router-link :to="{name: 'phbpages'}"> -->
            <!-- <div class="navstyle"> -->
            <img style="width:40px;height:40px"
                 :src="item.picture"
                 alt="phb">
            <!-- </div> -->
            <div class="info">
              <div>{{item.whichbd}}</div>
              <div class="timebottom">{{item.gxtime}}</div>
            </div>
          </a-menu-item>
        </a-menu>
      </div>
      <div style="width: 730px;background-color: white;">
        <!-- <keep-alive> -->
        <router-view></router-view>
        <!-- </keep-alive> -->
      </div>
    </div>
  </div>

</template>

<script>
import Phbpages from '../children/phbchildren/Phbpages';

import { phbinfo } from '../../../network/pc/phb'
export default {
  name: 'Paihangban',
  components: { Phbpages },
  data () {
    return {
      phbdata: [],
      itemdata: []
    }
  },
  mounted () {
    phbinfo().then(res => {
      this.phbdata = res.data
      this.itemdata = res.data[0]
      console.log('排行榜数据', this.phbdata);
      // this.csh()
    })

  },
  methods: {
    // 初始化
    // csh () {
    //   console.log('====');
    //   this.itemdata = this.phbdata[0]
    //   this.$router.push({ name: 'phbpages' })
    //   console.log('----', this.itemdata);
    //   this.$bus.$emit('senditeminfo', this.itemdata)
    // },
    // 导航栏
    handleClick (a) {
      const index = a.key - 8
      this.itemdata = this.phbdata[index]
      console.log('0987', this.itemdata);
      // console.log(this.$route);
      this.$router.push({
        name: "phbpages",
        query: {
          id: a.key
        },
        params: {
          itemdata: this.itemdata
        }
      })
      // this.$bus.$emit('senditeminfo', this.itemdata)
    }
  }
}
</script>

<style scoped lang="scss">
.outter {
  display: flex;
  justify-content: center;
  background-color: #f5f5f5;
  .content {
    display: flex;
    justify-content: space-between;
    border: 2px solid #d3d3d3;
    .left {
      background-color: #f5f5f5;
    }
    .title {
      height: 40px;
      margin-top: 30px;
      display: flex;
      // justify-content: center;
      align-items: center;
      // display: table-cell;
      // visibility: hidden;
      h3 {
        padding-left: 10px;
      }
    }
    .menu-item {
      display: flex;
      height: 50px;
      .info {
        margin-left: 13px;
        height: 40px;
        // width: 170px;
        div {
          height: 15px;
          line-height: 15px;
          // width: 170px;
          margin-top: 5px;
        }
        .timebottom {
          margin-left: -8px;
        }
      }
    }
  }
}
</style>