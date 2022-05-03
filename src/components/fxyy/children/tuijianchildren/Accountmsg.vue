<template>
  <div class="account">
    <div v-show="islogin"
         class="login">
      <div>
        <div class="above">
          <img :src="photoimg"
               style="width: 80px;height: 80px">
          <div class="info">
            <h3>{{username}}</h3>
            <a-button style="width:50px;height:25px;background-color:#eaeaea"
                      shape="round">Lv.{{dengji}}</a-button>
          </div>
        </div>
        <div class="dibu">
          <div class="bottom">
            <h2>{{status}}</h2>
            <div>动态</div>
          </div>
          <a-divider style="height: 65px"
                     type="vertical" />
          <div class="bottom">
            <h2>{{tokenVersion}}</h2>
            <div>关注</div>
          </div>
          <a-divider style="height: 65px"
                     type="vertical" />
          <div class="bottom">
            <h2>{{fans}}</h2>
            <div>粉丝</div>
          </div>
        </div>
      </div>

    </div>
    <div v-show="!islogin"
         class="nologin">
      <div>
        <div class="text">
          登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
        </div>
        <div class="btn">
          <a-button type="primary"
                    @click="login">用户登录</a-button>
        </div>
      </div>
    </div>
    <div v-show="isshowrzgs"
         class="loginbottom">
      <div class="bottom">
        <div class="bottominner">
          <div class="bottominnertop">
            <span>入驻歌手</span>
            <a style="color:#595959"
               @click="ckqb">查看全部 ></a>
          </div>
          <a-divider style="margin:7px 0 17px 0"
                     type="horizontal" />
          <div v-for="(item,index) in rzgexx"
               :key="index"
               class="list">
            <div class="listinner">
              <a style="display:block"
                 href="#"><img :src="item.TX"></a>
              <div style="margin-left:10px">
                <span class="title">{{item.GS}}</span>
                <div>
                  <span class="audio">{{item.YT}}</span>
                </div>
              </div>
            </div>

          </div>
          <div style="margin-top: 20px">
            <a-button>
              申请成为网易云音乐人
            </a-button>
          </div>

        </div>

      </div>

      <div class="bottom">
        <div class="bottominner">
          <div class="bottominnertop">
            <span>热门主播</span>
          </div>
          <a-divider style="margin:7px 0 17px 0"
                     type="horizontal" />
          <div v-for="(item,index) in rmzbxx"
               :key="index"
               class="list">
            <div class="listinner">
              <a style="display:block"
                 href="#"><img :src="item.TX"></a>
              <div style="margin-left:10px">
                <span class="title">{{item.GS}}</span>
                <div>
                  <span class="audio">{{item.YT}}</span>
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
import { accountmsg, accountdj } from '../../../../network/login'
import { rzgsinfo, rmzbinfo } from '../../../../network/pc/rmtj'
import { mapState } from 'vuex'
import { geshouTJinfo } from '../../../../network/pc/geshou'

export default {
  name: 'accountmsg',
  props: ['isshowrzgs'],
  data () {
    return {
      photoimg: '',  //头像图片地址
      username: '',  //用户名
      status: '',  //动态条数
      tokenVersion: '', //关注数量
      fans: 2,   //粉丝数  
      dengji: '',  //等级
      rzgexx: [],  //入驻歌手
      rmzbxx: [],  //热门主播
      itemdata: []
    }
  },
  computed: {
    ...mapState('login', ['islogin']),

  },
  mounted () {
    // 获取账号信息
    accountmsg().then(res => {
      if (res.data.account) {
        this.photoimg = res.data.profile.avatarUrl + '?param=80y80'
        this.status = res.data.account.status
        this.tokenVersion = res.data.account.tokenVersion
        this.username = res.data.profile.nickname
      }
    })
    // 等级信息
    accountdj().then(res => {
      this.dengji = res.data.data.level
    })
    // 首页入驻歌手
    rzgsinfo().then(res => {
      this.rzgexx = res.data
    })
    // 热门主播
    rmzbinfo().then(res => {
      this.rmzbxx = res.data
    })


  },
  methods: {
    login () {
      this.$bus.$emit('duihuakuan')
    },
    ckqb () {
      geshouTJinfo().then(res => {
        this.itemdata = []
        this.itemdata = res.data
        this.$router.push({
          name: "gspages",
          // query: {
          //   id: this.defaultSelect[0]
          // },
          params: {
            itemdata: this.itemdata
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.account {
  border: 2px solid #d3d3d3;
  // 未登录时显示
  .nologin {
    width: 248px;
    height: 140px;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
    border-bottom: 2px solid #d3d3d3;
    .text {
      margin: 20px 0 30px 0;
      width: 230px;
    }
    .btn {
      display: flex;
      justify-content: center;
    }
  }
  // 登录时显示
  .login {
    width: 248px;
    height: 185px;
    display: flex;
    justify-content: center;
    background-color: #f4f4f4;
    border-bottom: 2px solid #d3d3d3;
    .above {
      width: 230px;
      display: flex;
      justify-content: space-between;
      .info {
        width: 130px;
      }
    }
    .dibu {
      width: 230px;
      display: flex;
      justify-content: center;
      margin-top: 25px;
      .bottom {
        width: 65px;
        margin-left: 20px;
      }
    }
  }

  // 登录下方内容
  .loginbottom {
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    // padding-bottom: 50px;
    // 入驻歌手
    .bottom {
      width: 250px;
      display: flex;
      justify-content: center;
      .bottominner {
        width: 200px;
        margin-top: 20px;
        .bottominnertop {
          display: flex;
          justify-content: space-between;
        }
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
            .audio {
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