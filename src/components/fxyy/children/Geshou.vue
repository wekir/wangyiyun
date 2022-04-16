<template>
  <div>
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
          <a-menu style="width: 180px"
                  mode="vertical"
                  @click="handleClick"
                  class="left">
            <!-- <a-menu-item v-for="(item) in phbdata"
                       :key="item.id"
                       class="menu-item">
            <img style="width:40px;height:40px"
                 :src="item.picture"
                 alt="phb">
            <div class="info">
              <div>{{item.whichbd}}</div>
              <div class="timebottom">{{item.gxtime}}</div>
            </div>
          </a-menu-item> -->
            <a-menu-item class="menu-item">
              1
            </a-menu-item>
            <a-menu-item class="menu-item">
              2
            </a-menu-item>
          </a-menu>
          <div class="left">
            <div class="title">
              <strong>
                <h3>
                  全球媒体榜
                </h3>
              </strong>
            </div>
            <a-menu style="width: 180px"
                    mode="vertical"
                    @click="qqmtbClick"
                    class="left">
              <!-- <a-menu-item v-for="(item) in phbqqmtbdata"
                         :key="item.id"
                         v-show="item.picture"
                         class="menu-item">
              <img style="width:40px;height:40px"
                   :src="item.picture"
                   alt="phb">
              <div class="info">
                <div>{{item.whichbd}}</div>
                <div class="timebottom">{{item.gxtime}}</div>
              </div>
            </a-menu-item> -->
              <a-menu-item class="menu-item">
                <div><span>1</span></div>
              </a-menu-item>
              <a-menu-item class="menu-item">
                <div><span>2</span></div>
              </a-menu-item>
            </a-menu>
          </div>
        </div>
        <div style="width: 799px;background-color: white;">
          <!-- <keep-alive> -->
          <router-view></router-view>
          <!-- </keep-alive> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Geshou',
  data () {
    return {

    }
  },
  methods: {
    // 导航栏
    handleClick (a) {
      console.log(a);
      // const index = a.key - 8
      // this.itemdata = this.phbdata[index]
      // console.log('0987', this.itemdata);
      console.log(this.$router);
      this.$router.push({
        name: "gspages",
        query: {
          id: a.key
        },
        // params: {
        //   itemdata: this.itemdata
        // }
      })
    },
    qqmtbClick () {
      // const index = a.key - 32
      // this.qqmtbitemdata = this.phbqqmtbdata[index]
      this.$router.push({
        name: "gspages",
        // query: {
        //   id: a.key
        // },
        // params: {
        //   itemdata: this.qqmtbitemdata
        // }
      })
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