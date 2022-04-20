<template>
  <div>
    <div class="outter">
      <div class="content">
        <div class="left">
          <div class="title">
            <strong>
              <h3>
                推荐
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
              <div>· 推荐歌手</div>
            </a-menu-item>
          </a-menu>
          <div class="left">
            <div class="title">
              <strong>
                <h3>
                  华语
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
                <div><span>· 华语男歌手</span></div>
              </a-menu-item>
              <a-menu-item class="menu-item">
                <div><span>· 华语女歌手</span></div>
              </a-menu-item>
              <a-menu-item class="menu-item">
                <div><span>· 华语乐队/组合</span></div>
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
import { geshouTJinfo, getHYhasimginfo, getHYnoimginfo } from '../../../network/pc/geshou'
export default {
  name: 'Geshou',
  data () {
    return {
      itemdata: [],
      witchitem: 0,  //哪个一  如男歌手还是女歌手
      itemdatanoimg: [],  //没有图片
    }
  },
  mounted () {
    // geshouTJinfo().then(res => {
    //   this.itemdata = res.data
    //   // console.log('0099', res);
    // })
  },
  methods: {
    // 导航栏
    handleClick (a) {
      geshouTJinfo().then(res => {
        this.itemdata = []
        this.itemdata = res.data
        this.$router.push({
          name: "gspages",
          query: {
            id: a.item._uid
          },
          params: {
            itemdata: this.itemdata
          }
        })
      })
    },
    qqmtbClick (a) {
      getHYhasimginfo().then(res => {
        this.itemdata = []
        this.witchitem = a.key.charAt(a.key.length - 1)
        res.data.forEach(item => {
          if (item.artistsex == this.witchitem) {
            this.itemdata.push(item)
          }
        })
      }).then(() => {
        getHYnoimginfo().then(res => {
          res.data.forEach(item => {
            if (item.artistsex == this.witchitem) {
              this.itemdatanoimg.push(item)
            }
          })
          this.$router.push({
            name: "gspages",
            query: {
              id: a.item._uid
            },
            params: {
              itemdata: this.itemdata,
              itemdatanoimg: this.itemdatanoimg
            }
          })
        })
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
      margin-top: 20px;
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
      height: 30px;
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