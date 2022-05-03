<template>
  <div>
    <div class="nav">
      <div class="innernav">
        <a-menu :defaultSelectedKeys="defaultSelect"
                class="list"
                mode="horizontal">
          <a-menu-item class="listitem"
                       @click="currentItem('1')"
                       key="1">
            <router-link :class="defaultSelect[0] === '1' ? 'active' : '' "
                         to="/faxianyinyue/tuijian">推荐</router-link>
          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('2')"
                       key="2">
            <a :class="defaultSelect[0] === '2' ? 'active' : '' ">排行榜</a>

          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('3')"
                       key="3">
            <router-link :class="defaultSelect[0] === '3' ? 'active' : '' "
                         to="/faxianyinyue/gedan">歌单</router-link>

          </a-menu-item>
          <!-- <a-menu-item class="listitem"
                       @click="currentItem('4')"
                       key="4">
            <router-link :class="defaultSelect[0] === '4' ? 'active' : '' "
                         to="/faxianyinyue/zhubodiantai">主播电台</router-link>

          </a-menu-item> -->
          <a-menu-item class="listitem"
                       @click="currentItem('5')"
                       key="5">
            <a :class="defaultSelect[0] === '5' ? 'active' : '' ">歌手</a>

          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('6')"
                       key="6">
            <router-link :class="defaultSelect[0]==='6' ? 'active' : '' "
                         to="/faxianyinyue/xindieshangjia">新碟上架</router-link>

          </a-menu-item>
        </a-menu>
      </div>
    </div>
    <!-- <h2>发现音乐</h2> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { geshouTJinfo } from '../../network/pc/geshou'
import { phbinfo } from '../../network/pc/phb'
export default {
  name: 'Faxianyinyue',
  data () {
    return {
      defaultSelect: ['1'],
      itemdata: []
    }
  },

  methods: {
    currentItem (value) {
      this.defaultSelect = [value]

      // 排行榜
      if (this.defaultSelect[0] === '2') {
        phbinfo().then(res => {
          this.itemdata = res.data[0]
          console.log('排行榜数据', this.phbdata);
          this.$router.push({
            name: "phbpages",
            query: {
              id: this.defaultSelect[0]
            },
            params: {
              itemdata: this.itemdata
            }
          })
        })
      }
      // 歌手
      if (this.defaultSelect[0] === '5') {
        geshouTJinfo().then(res => {
          this.itemdata = []
          this.itemdata = res.data
          this.$router.push({
            name: "gspages",
            query: {
              id: this.defaultSelect[0]
            },
            params: {
              itemdata: this.itemdata
            }
          })
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  z-index: 1;
  background-color: #c20c0c;
  height: 35px;
  .innernav {
    width: 774px;
    padding-left: 137px;
    margin-left: 124.5px;
    height: 35px;
    ::v-deep .ant-menu {
      border: none;
    }
    .list {
      // width: 508px;
      height: 35px;
      display: flex;
      justify-content: space-around;
      background-color: #c20c0c;
      .listitem {
        padding: 0;
        // border: none;
        a {
          text-decoration: none;
          padding: 0 19px;
          border: none;
          height: 35px;
          line-height: 35px;
          color: #cccccc;
          font-size: 14px;
        }
        a:hover {
          color: #ffffff;
        }
        .active {
          // border: none;
          color: #ffffff;
        }
      }
      // .listitem:hover {
      //   color: #ffffff;
      //   background-color: #000000;
      // }
    }
  }
}
</style>