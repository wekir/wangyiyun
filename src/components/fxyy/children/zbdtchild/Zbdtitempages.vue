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
            <!-- 类型 -->
            <div v-if="isshowmorejm">
              <div style="margin: 30px 0 20px 0;font-size: 17px"><strong><i class="iconfont icon-erji icon-sel"
                     style="margin: 0 11px 0 11px"></i></strong>{{info.musictype}}
              </div>
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
      <div v-if="isshowmorejm"
           class="otherinfooutter">
        <div class="otherinfo">
          <div class="infotitle">
            <span style="border: 1px solid red;color:red;padding: 0 3px 0 3px">{{info.type}}</span>
            <strong><span>{{info.periods}}</span></strong>
            <span style="color: #cccccc">{{info.createTime}}</span>
            <div style="color: #cccccc">播放：</div>
            <span style="color:red;margin-right: 0">{{info.plays}}</span>
            <div style="color: #cccccc">次</div>
          </div>
          <div class=showall>
            <p style="font-size:12px;color:#777777">{{info.introduce}}</p>
          </div>
        </div>
      </div>
      <div class="songstableouter">
        <div class="songstable">
          <div v-if="info.bofangid">
            <Songslistzbdt :ids="info.bofangid"
                           :bfcs="info.plays" />
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div v-if="!isshowmorejm"
           class="top">
        <div class="topinner">
          <span>喜欢这个歌单的人</span>
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
      <div v-if="ishashotsongs"
           class="bottom">
        <div class="bottominner">
          <span>热门歌单</span>
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
      <div v-if="isshowmorejm"
           class="bottom"
           style="margin-top: 20px">
        <div class="bottominner">
          <span>更多节目</span>
          <a-divider style="margin:7px 0 17px 0"
                     type="horizontal" />
          <div v-for="index in jmtotal"
               :key="index"
               class="list">
            <div class="listinner">
              <img :src="jmlist.moreprogramsTX[index]">
              <div style="margin-left:10px">
                <span class="title">{{jmlist.moreprogramsTitle[index]}}</span>
                <div>
                  <span class="audio">{{jmlist.moreprogramsNunber[index]}}</span>
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
import Songslistzbdt from './Songslistzbdt.vue'

export default {
  name: 'zbdtitempages',
  components: { Songslistzbdt },
  data () {
    return {
      info: [],  //每一页的数据
      index: 0,    //那个a标签点击的
      list: {},    //热门歌单数据
      gdtotal: 0,   //多少个热门歌单
      ishashotsongs: false,  //是否有热门歌单
      jmtotal: 0,  //更多节目数量
      jmlist: {},  //更多节目数据
      isshowmorejm: false,  //是否展示更多节目列表
      listsongids: [],
      showall: false   //刚开始没有激活
    }
  },
  mounted () {
    // this.index = this.$route.params.index  //哪一个item
    // this.info = this.$route.params.allinfo.data[this.index]  //对应的数据
    this.info = this.$route.params.allinfo
    console.log('this.info', this.info);
    // 将热门歌单的信息放如一个对象里
    if (this.info.popularsongTX) {
      this.list.popularsongTX = JSON.parse(this.info.popularsongTX)   //头像
      this.list.popularsongTitle = JSON.parse(this.info.popularsongTitle)  //标题
      this.list.popularsongauthor = JSON.parse(this.info.popularsongauthor)  //作者
    }
    // 热门歌单条数
    if (this.list.popularsongTX) {
      if (this.list.popularsongTX.length) {
        this.gdtotal = this.list.popularsongTX.length - 1
        this.ishashotsongs = true
      }

    }
    // 将更多节目放一对象里
    if (this.info.moreprogramsTX) {
      this.jmlist.moreprogramsTX = JSON.parse(this.info.moreprogramsTX)
      this.jmlist.moreprogramsTitle = JSON.parse(this.info.moreprogramsTitle)
      this.jmlist.moreprogramsNunber = JSON.parse(this.info.moreprogramsNunber)
    }
    // 更多节目数量
    if (this.jmlist.moreprogramsTX) {
      if (this.jmlist.moreprogramsTX.length) {
        this.jmtotal = this.jmlist.moreprogramsTX.length - 1
        this.isshowmorejm = true
      }

    }
    // 是否展示热门歌单
    // if (this.jmlist.moreprogramsTX.length === 0) {
    //   this.isshowmorejm = false
    // }
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
    },
    showmoretext () {
      console.log('---');
      showall = !showall
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
        // height: 218px;
        background-color: white;
        margin: 50px 0 5px 0;
        display: flex;

        // align-items: center;
        // border-image: ;
        img {
          padding: 2px;
          border: 1px solid #d5d5d5;
        }
        .topRight {
          width: 413px;
          margin-left: 30px;
          // height: 200px;
          background-color: white;
          .title {
            display: flex;
            .titleleft {
              width: 55px;
              height: 25px;
              background-image: url("../../../../assets/img/someicons.png");
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
          .showall {
            padding: 10px 10px 0 10px;
            height: 62px;
            overflow: hidden;
            clear: both;
            background: #f5f5f5;
            margin-top: 6px;
          }
          .showall.active {
            //点击了查看更多，就高度就不管了。随实际的大小变化
            height: auto;
            padding-bottom: 16px;
            background: #fff;
            // min-height: 150px;
          }
          .show {
            float: right;
            .imgbtn {
              height: 20px;
            }
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
        .showall {
          padding: 10px;
          clear: both;
          background: #f5f5f5;
          margin-top: 6px;
          p {
            margin: 0;
          }
        }
      }
    }
    .songstableouter {
      display: flex;
      justify-content: center;
      .songstable {
        width: 644px;
        margin: 20px 0 40px 0;
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