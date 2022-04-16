<template>
  <div class="retjitempage">
    <div class="left">
      <!-- 顶部 -->
      <div class="topoutter">
        <div class="top">
          <img style="width: 220px;height: 220px;"
               :src="picture">
          <div class="topRight">
            <div class="title">
              <div class="titleleft"></div>
              <h2 class="titleright">{{info.title}}</h2>
            </div>

            <div class="audioinfo"
                 v-show="authorTX">
              <img :src="authorTX">
              <div style="margin: 0 10px 0 10px;">{{author}}</div>
              <div style="margin: 0 10px 0 0;">{{createTime}}</div>
            </div>
            <div style="margin-top:10px">歌手：{{info.author}}</div>
            <div>{{info.createTime}}</div>
            <div style="margin-bottom:30px">{{info.fxgs}}</div>

            <div class="bfbtn">
              <a-button type="primary"
                        @click="bfsong">
                <i class="iconfont icon-24gl-playCircle icon-sel"
                   style="margin-right: 5px;"></i>
                播放
              </a-button>
            </div>

          </div>
        </div>
      </div>
      <div class="otherinfooutter">
        <div class="otherinfo">
          <div style="margin-bottom:10px">专辑介绍：</div>
          <div>
            <p style="font-size:12px;color:#777777">{{info.introduce}}</p>
          </div>
        </div>
      </div>
      <div class="songstableouter">
        <div class="songstable">
          <div v-if="info.bofangid">
            <Songslist :ids="info.bofangid" />
          </div>
        </div>

      </div>

    </div>
    <div class="right">
      <div class="top">
        <div class="topinner">
          <span>喜欢这张专辑的人</span>
          <a-divider style="margin:7px 0 17px 0"
                     type="horizontal" />
          <div class="likesongs">
            <a style="display:block"
               href="">
              <img v-for="(item,index) in likesonglist"
                   :key="index"
                   :src="item">
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottominner">
          <span>Ta的其他热门专辑</span>
          <a-divider style="margin:7px 0 17px 0"
                     type="horizontal" />
          <div v-for="index in gdtotal"
               :key="index"
               class="list">
            <div class="listinner">
              <a style="display:block"
                 href="#"><img :src="list.popularsongTX[index]"></a>
              <div style="margin-left:10px">
                <span class="title">{{list.popularsongTitle[index]}}</span>
                <div>
                  <span>by</span>
                  <span class="audio">{{list.popularsongauthor[index]}}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Songslist from '../../../../comps/Songslist'

export default {
  name: 'Xdsjitempages',
  components: { Songslist },
  data () {
    return {
      info: [],  //每一页的数据
      index: 0,    //那个a标签点击的
      list: {},    //热门歌单数据
      gdtotal: 0,   //多少个热门歌单
      jmtotal: 0,  //更多节目数量
      jmlist: {},  //更多节目数据
      listsongids: []
    }
  },
  mounted () {
    this.index = this.$route.params.index  //哪一个item
    this.info = this.$route.params.allinfo.data[this.index]  //对应的数据
    // 将热门歌单的信息放如一个对象里

    this.list.popularsongTX = JSON.parse(this.info.popularsongTX)   //头像
    this.list.popularsongTitle = JSON.parse(this.info.popularsongTitle)  //标题
    this.list.popularsongauthor = JSON.parse(this.info.popularsongauthor)  //作者

    // 热门歌单条数
    if (this.list.popularsongTX.length) {
      this.gdtotal = this.list.popularsongTX.length - 1
    }

  },
  computed: {
    // 大图
    picture () {
      return this.info.picture
    },
    // 头像
    authorTX () {
      return this.info.authorTX
    },
    // 作者
    author () {
      return this.info.author
    },
    // 创建时间
    createTime () {
      return this.info.createTime
    },
    // 介绍
    introduce () {
      return this.info.introduce
    },
    // 喜欢这个歌单的人
    likesonglist () {
      if (this.info.likesonglist) {
        return JSON.parse(this.info.likesonglist)
      }
    }
  },
  methods: {
    ...mapActions('songinfo', ['switchsong']),
    bfsong () {
      console.log('播放歌曲');
    }
  }

}
</script>

<style scoped lang="scss">
.retjitempage {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  .left {
    // height: 700px;
    border: 2px solid rgb(211, 211, 211);
    background-color: white;
    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    .topoutter {
      width: 733px;
      display: flex;
      justify-content: center;
      .top {
        width: 644px;
        height: 218px;
        background-color: white;
        margin: 50px 0 5px 0;
        display: flex;
        align-items: center;
        // border-image: ;
        img {
          padding: 2px;
          border: 1px solid #d5d5d5;
        }
        .topRight {
          width: 413px;
          margin-left: 30px;
          height: 200px;
          background-color: white;
          .title {
            display: flex;
            .titleleft {
              width: 55px;
              height: 25px;
              background-image: url("../../../../../assets/img/someicons.png");
              background-position: 0 -240px;
            }
            .long {
              width: 110px;
            }
            .titleright {
              margin: 0 0 0 12px;
              width: 325px;
              // font-size: 17px;
            }
          }
          .audioinfo {
            display: flex;
            align-items: center;
          }
          .bfbtn {
            margin: 12px 0 12px 0;
          }
        }
      }
    }
    .otherinfooutter {
      width: 733px;
      display: flex;
      justify-content: center;
      .otherinfo {
        width: 644px;
        background-color: white;
        .infotitle {
          display: flex;
          margin: 15px 0 15px 0;
          span {
            margin-right: 17px;
          }
        }
      }
    }
    .songstableouter {
      display: flex;
      justify-content: center;
      .songstable {
        width: 644px;
        margin-top: 20px;
      }
    }
  }
  .right {
    width: 250px;
    border: 2px solid #d3d3d3;
    background-color: white;
    .top {
      width: 250px;
      display: flex;
      justify-content: center;
      .topinner {
        width: 200px;
        margin: 15px 0 15px 0;
        .likesongs {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          img {
            padding: 0 10px 10px 0;
          }
        }
      }
    }
    .bottom {
      width: 250px;
      display: flex;
      justify-content: center;
      .bottominner {
        width: 200px;
        .list {
          // display: flex;
          // flex-wrap: wrap;
          .listinner {
            margin-top: 15px;
            display: flex;
            span {
              margin: 5px 5px 5px 0;
            }
            img {
              width: 50px;
              height: 50px;
            }
            .title {
              display: block;
              width: 144px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>