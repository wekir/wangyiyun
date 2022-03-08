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
            <router-link :class="defaultSelect[0] === '2' ? 'active' : '' "
                         to="/faxianyinyue/paihangban">排行榜</router-link>

          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('3')"
                       key="3">
            <router-link :class="defaultSelect[0] === '3' ? 'active' : '' "
                         to="/faxianyinyue/gedan">歌单</router-link>

          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('4')"
                       key="4">
            <router-link href="https://music.163.com/store/product"
                         :class="defaultSelect[0] === '4' ? 'active' : '' "
                         to="/faxianyinyue/zhubodiantai">主播电台</router-link>

          </a-menu-item>
          <a-menu-item class="listitem"
                       @click="currentItem('5')"
                       key="5">
            <router-link href="https://music.163.com/st/musician"
                         :class="defaultSelect[0] === '5' ? 'active' : '' "
                         to="/faxianyinyue/geshou">歌手</router-link>

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
export default {
  name: 'Faxianyinyue',
  data () {
    return {
      defaultSelect: ['1']
    }
  },
  methods: {
    currentItem (value) {
      this.defaultSelect = [value]
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
    padding-left: 170px;
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