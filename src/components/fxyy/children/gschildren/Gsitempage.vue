<template>
  <div>
    <div class="retjitempage">
      <div class="left">
        <!-- 顶部 -->
        <div class="topoutter">
          <div class="top">
            <h2>{{newinfo.artistName}}</h2>
            <h3>{{newinfo.artistAlias}}</h3>
            <img :src="newinfo.bigphoto"
                 alt="大图">
            <div>
              <a-button style="margin-right:15px"
                        :disabled="shifouguanzhu"
                        @click="follow">
                关注
              </a-button>
              <a-button :disabled="!shifouguanzhu"
                        @click="unfollow">
                取消关注
              </a-button>
            </div>
          </div>
        </div>
        <div class="songstableouter">
          <div class="songstable">
            <div v-if="newinfo.songids">
              <Songslist :ids="newinfo.songids" />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="topinner">
            <span>相似歌手</span>
            <a-divider style="margin:7px 0 17px 0"
                       type="horizontal" />
            <div class="likesongs">
              <a v-for="(item,index) in likesonglist"
                 :key="index"
                 @click="xsgsturn(item)">
                <div>
                  <img class="xsgsimg"
                       :src="item.smallTX">
                  <div class="fontstyle">{{item.artistName}}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Songslist from '../../../comps/Songslist'
import { guanzhu } from '../../../../network/fuction'
export default {
  name: 'Gsitempage',
  components: { Songslist },
  computed: {
    info () {
      console.log('newinfo777', this.$route.params);
      return this.$route.params.allinfo
    },
    index () {
      return this.$route.params.index
    },
    num () {
      return this.$route.params.num
    },
    all () {
      return this.$route.params.all
    }
  },
  created () {
    this.newinfo = this.info
  },
  mounted () {
    this.createRandom(this.num)
    this.randomSixStr.map((item) => {
      this.newobj = this.all[item]
      this.newobj.smallTX = this.newobj.bigphoto.replace('640y300', '50y50');
      this.likesonglist.push(this.newobj)
    })
  },

  data () {
    return {
      TXgeshou: [],  //总的   有头像的歌手
      randomSixStr: [],  //六位随机数
      likesonglist: [],  //相似歌手  六个
      newobj: {},  //相似歌手新对象
      newinfo: {},  // 新页面数据
      shifouguanzhu: false,   //  是否关注
    }
  },
  methods: {
    // 随机生成六位数
    createRandom (num) {
      // Math.random() //生成0-1随机数 
      // Math.round() //四舍五入
      // Math.ceil() //向上取整
      // Math.floor() //向下取整
      // Math.abs() //取绝对值
      // Math.sin(x) //x的正弦值,返回值在 -1.0 到 1.0 之间
      // Math.cos(x) //x的余弦值,返回的是 -1.0 到 1.0 之间的数
      // parseInt() //丢弃小数部分，保留整数部分
      // parseFloat() //转为数字
      for (var i = 0; i < num; i++)
        this.randomSixStr.push(i);
      this.randomSixStr.sort(function () {
        return 0.5 - Math.random();
      });
      this.randomSixStr.length = 6;
    },
    xsgsturn (item) {
      this.newinfo = item
      this.likesonglist = []
      this.randomSixStr.map((item) => {
        this.newobj = this.all[item]
        this.newobj.smallTX = this.newobj.bigphoto.replace('640y300', '50y50');
        this.likesonglist.push(this.newobj)
      })
    },
    // 关注
    follow () {
      guanzhu('29879272', 1).then(res => {
        // console.log('guanz', res);
        if (res.data.code == 200) {
          this.$message.info('已关注');
          this.shifouguanzhu = true
        }
      })
      // console.log('关注');
    },
    // 取消关注
    unfollow () {
      guanzhu('29879272', 2).then(res => {
        // console.log('取消关注', res);
        if (res.data.code == 200) {
          this.$message.info('已取消关注');
          this.shifouguanzhu = false
        }
      })
      // console.log('取消关注');
    }
  }
}
</script>

<style  scoped lang="scss">
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
        h2,
        h3 {
          display: inline-block;
        }
        h3 {
          color: #999;
          margin-left: 10px;
        }
        width: 644px;
        // height: 218px;
        background-color: white;
        margin: 50px 0 5px 0;
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
          a {
            // display:block;
            display: flex;
            justify-content: space-between;
            // div {}
            .xsgsimg {
              width: 51px;
              height: 51px;
              // padding: 0 10px 10px 0;
            }
            .fontstyle {
              padding: 5px 0 13px 0;
              color: #333;
              font-size: 12px;
            }
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