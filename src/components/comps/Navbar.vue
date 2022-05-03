<template>
  <div class="nav">
    <!-- logo -->
    <h1 class="logo"></h1>
    <!-- 列表 -->
    <div>
      <a-menu :defaultSelectedKeys="defaultSelect"
              class="list"
              mode="horizontal">
        <a-menu-item class="listitem"
                     @click="currentItem('1')"
                     key="1">
          <router-link :class="defaultSelect[0] === '1' ? 'active' : '' "
                       :to="{name:'tuijian'}">发现音乐</router-link>
        </a-menu-item>
        <a-menu-item class="listitem"
                     @click="currentItem('2')"
                     key="2">
          <router-link :class="defaultSelect[0] === '2' ? 'active' : '' "
                       :to="{name:'wodeyinyue'}">我的音乐</router-link>
        </a-menu-item>
        <a-menu-item class="listitem"
                     @click="currentItem('3')"
                     key="3">
          <router-link :class="defaultSelect[0] === '3' ? 'active' : '' "
                       :to="{name:'guanzhu'}">关注</router-link>
        </a-menu-item>
        <a-menu-item class="listitem"
                     @click="currentItem('4')"
                     key="4">
          <a href="https://music.163.com/store/product"
             :class="defaultSelect[0] === '4' ? 'active' : '' ">商城</a>

        </a-menu-item>
        <a-menu-item class="listitem"
                     @click="currentItem('5')"
                     key="5">
          <a href="https://music.163.com/st/musician"
             :class="defaultSelect[0] === '5' ? 'active' : '' ">音乐人</a>

        </a-menu-item>
        <a-menu-item class="listitem"
                     @click="currentItem('6')"
                     key="6">
          <a :class="defaultSelect[0]==='6' ? 'active' : '' ">下载客户端</a>

        </a-menu-item>
      </a-menu>
    </div>
    <!-- hot -->
    <h1 class="hot"></h1>
    <!-- 搜索框 -->
    <div class="searchwapper">
      <a-input-search class="search"
                      placeholder="音乐/视频/用户"
                      @search="onSearch" />
    </div>
    <div class="czzzx">
      <a-button class="child"
                style="font-size: 12px;"
                shape="round"
                ghost>创作者中心</a-button>
    </div>
    <div class="touxiang"
         v-if="islogin">
      <a-dropdown>
        <a class="ant-dropdown-link"
           @click="e => e.preventDefault()">
          <img style="width: 30px;height: 30px;border-radius:50%"
               :src="photosrc">
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-mine icon-sel"></i>我的主页</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-massage icon-sel"></i>我的消息</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-dengji icon-sel"></i>我的等级</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-vip icon-sel"></i>VIP会员</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-shezhi icon-sel"></i>个人设置</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-shimingrenzheng icon-sel"></i>实名认证</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;"><i class="iconfont icon-h icon-sel"></i>退出</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-button v-if="!islogin"
              ghost
              class="login"
              @click="showModal">
      登录
    </a-button>
    <!-- 登录对话框 -->
    <div ref="mymodel"
         class="test">
      <a-modal :mask="false"
               title="手机号码登录"
               :visible="visible"
               @ok="handleOk"
               @cancel="handleCancel"
               :footer="null"
               :getContainer="() => $refs.mymodel">
        <div class="model">
          <div style="margin-left: 150px;padding: 24px 0 50px 0">
            <div class="sjh">
              <a-input placeholder="请输入手机号"
                       v-model="phone" />
            </div>
            <div class="yzm"
                 v-show="isphonelogin">
              <a-input class="yzminput"
                       placeholder="请输入验证码"
                       v-model="captcha" />
              <a-button @click="getcaptcha"
                        class="yzmbtn"
                        type="primary">
                获取验证码
              </a-button>
            </div>
            <div style="color: #333;margin-bottom:17px"
                 v-show="isphonelogin">
              <a-button ghost
                        style="color: #999999;border: none;margin:0 0 0 -10px"
                        @click="isphonelogin = !isphonelogin">
                密码登录
              </a-button>
            </div>
            <div class="yzm"
                 v-show="!isphonelogin">
              <a-input placeholder="请输入密码"
                       v-model="password" />
            </div>
            <div style="color: #333;margin-bottom:17px"
                 v-show="!isphonelogin">
              <a-button ghost
                        style="color: #999999;border: none;margin:0 0 0 -10px"
                        @click="isphonelogin = !isphonelogin">
                短信登录
              </a-button>
            </div>
            <a-button @click="loginbtn"
                      class="loginbtn"
                      type="primary">
              登录
            </a-button>

          </div>
          <!-- 分割线 -->
          <a-divider />
          <div style="background-color: #f7f7f7;height: 50px">
            <a-button ghost
                      style="color: #999999;border: none;margin:10px 0 0 355px"
                      @click="showzhuce">
              没有账号？免费注册 >
            </a-button>
          </div>
        </div>
      </a-modal>
    </div>
    <!-- 注册对话框 -->
    <div ref="mymodel1"
         class="test">
      <a-modal :mask="false"
               title="手机号注册"
               :visible="zhucevisible"
               @ok="handleOkzhuce"
               @cancel="handleCancelzhuce"
               :footer="null"
               :getContainer="() => $refs.mymodel1">
        <div class="model">
          <!-- 设置密码阶段 -->
          <div v-show="!shownext"
               style="margin-left: 150px;padding: 24px 0 50px 0">
            <div style="color: #999999;">手机号：</div>
            <div class="sjh">
              <a-input placeholder="请输入手机号"
                       v-model="phone" />
            </div>
            <div style="color: #999999;">密码：</div>
            <div class="sjh">
              <a-input placeholder="设置登录密码，不少于8位"
                       v-model="password" />
            </div>
            <div style="color: #999999;">昵称</div>
            <div class="sjh">
              <a-input placeholder="请输入昵称"
                       v-model="username" />
            </div>
            <a-button style="width: 220px;margin-top:10px"
                      type="primary"
                      @click="isnext">
              下一步
            </a-button>

          </div>
          <!-- 短信验证阶段 -->
          <div v-show="shownext"
               style="margin-left: 150px;padding: 24px 0 50px 0">
            <div>你的手机号: {{shouphone}}</div>
            <div>为了安全，我们会给你发送短信验证码</div>
            <a-input style="width:222px;margin-top:20px"
                     placeholder="请输入验证码"
                     v-model="captcha" />
            <a-button style="width: 220px;margin-top:20px"
                      type="primary"
                      @click="zhuce">
              下一步
            </a-button>
          </div>
          <!-- 分割线 -->
          <a-divider />
          <div style="background-color: #f7f7f7;height: 50px">
            <a-button ghost
                      style="color: #999999;border: none;margin-top:10px"
                      @click="showModal">
              返回登录
            </a-button>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { getcaptcha, captchalogin, passwordlogin, zhuce } from '../../network/login'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false, //登录对话框
      zhucevisible: false,  //注册对话框
      phone: '',  //手机号
      captcha: '',  //验证码
      password: '',  //密码
      username: '',  //昵称
      isphonelogin: true,  //切换密码登录和验证码登录  
      shownext: false,  //是否能进去下一步,
      defaultSelect: ['1'],  //当前选中的页面
      uid: '',    //保存登陆后的id  
      photosrc: '',  //头像图片src值
    };
  },
  computed: {
    ...mapState('login', ['islogin']),
    shouphone () {
      const firstphone = this.phone.slice(0, 3)
      const lastphone = this.phone.slice(7)
      return `${firstphone}****${lastphone}`
    }
  },
  mounted () {
    this.$bus.$on('duihuakuan', this.showModal)
  },
  methods: {
    ...mapActions('login', ['changelogin', 'changeloginpw']),
    // 搜索
    onSearch (value) {
      console.log(value);
    },
    // 导航栏  （发现音乐，我的音乐，关注，商城...）
    currentItem (value) {
      this.defaultSelect = [value]
      this.$emit('selectItem', value)
    },
    // 获取验证码按钮
    getcaptcha () {
      getcaptcha(this.phone).then(res => {
        console.log(res);
        // this.captcha = 
      }).catch(err => {
        console.log(err);
      })
    },
    // 登录按钮
    loginbtn () {
      //判断是验证码登录 还是 密码登录
      if (this.isphonelogin) {
        // this.$store.dispatch('login/changelogin', { phone: this.phone, captcha: this.captcha })
        this.changelogin({ phone: this.phone, captcha: this.captcha })
        captchalogin(this.phone, this.captcha).then((res) => {
          //存下uid
          this.uid = res.data.account.id
          this.visible = false
          this.photosrc = res.data.profile.avatarUrl + '?param=30y30'
        }).catch((err) => {
          console.log(err);
          this.$message.error('验证码错误，请从新输入');
        })
      } else {
        // this.$store.dispatch('login/changeloginpw', { phone: this.phone, password: this.password })
        this.changeloginpw({ phone: this.phone, password: this.password })
        passwordlogin(this.phone, this.password).then((res) => {
          if (res.data.code === 200) {
            // 存下uid
            this.uid = res.data.account.id
            this.visible = false
            this.photosrc = res.data.profile.avatarUrl + '?param=30y30'
          }
          // 如果密码错误，输出错误信息
          if (res.data.msg) {
            this.$message.error(res.data.msg);
          }
        }).catch((err) => {
          console.log(err);
          this.$message.error('密码错误，请从新输入');
        })
      }
    },
    // //账号信息
    // accountmsg () {
    //   accountmsg().then(res => {
    //     console.log('账号信息', res);
    //   })
    // },
    // 登录对话框
    showModal () {
      this.visible = true;
      this.zhucevisible = false
    },
    handleOk (e) {
      console.log(e)
      this.ModalText = 'The modal will be closed after two seconds';
      setTimeout(() => {
        this.visible = false;
      }, 2000);
    },
    handleCancel (e) {
      console.log(e)
      console.log('Clicked cancel button');
      this.visible = false;
    },
    // 注册对话框
    showzhuce () {
      this.visible = false
      this.zhucevisible = true
    },
    handleOkzhuce (e) {
      console.log(e)
      this.ModalText = 'The modal will be closed after two seconds';
      setTimeout(() => {
        this.zhucevisible = false;
        this.shownext = false
      }, 2000);
    },
    handleCancelzhuce (e) {
      console.log(e)
      console.log('Clicked cancel button');
      this.zhucevisible = false;
      this.shownext = false
    },
    // 密码,昵称设置成功，进去下一步
    isnext () {
      if (this.phone === '') {
        this.$message.error('手机号不能为空！')
      }
      if (this.password === '') {
        this.$message.error('密码不能为空！')
      }
      if (this.username === '') {
        this.$message.error('昵称不能为空！')
      }
      if (this.phone && this.password && this.username) {
        this.shownext = !this.shownext
      }
    },
    zhuce () {
      this.getcaptcha()
      const that = this
      zhuce(this.phone, this.password, this.captcha, this.username).then(res => {
        if (res.data.code === 200) {
          that.$message.info('注册成功！')
          that.zhucevisible = false
        }
        if (res.data.message) {
          that.$message.error(this.data.message)
        }
      }).catch(() => {
        that.$message.info('已有账号，请登录！')
        that.showModal()
      })
    }
  },

}
</script>

<style scoped lang="scss">
// 图标大小
.icon-sel {
  font-size: 17px;
  padding-right: 7px;
}
.nav {
  height: 70px;
  width: 100%;
  background-color: #333;
  display: flex;
  position: relative;
  .logo {
    width: 177px;
    height: 70x;
    margin: 0 0 0 124px;
    background-image: url("../../assets/img/topbar.png");
  }
  .list {
    width: 508px;
    height: 71px;
    display: flex;
    justify-content: space-around;
    background-color: #333;
    .listitem {
      padding: 0;
      border: none;
      a {
        text-decoration: none;
        padding: 0 19px;
        border: none;
        height: 70px;
        line-height: 70px;
        color: #cccccc;
        font-size: 14px;
      }
      a:hover {
        color: #ffffff;
        background-color: #000000;
      }
      .active {
        // border: none;
        color: #ffffff;
        background-color: #000000;
      }
    }
    // .listitem:hover {
    //   color: #ffffff;
    //   background-color: #000000;
    // }
  }
  .hot {
    height: 15px;
    width: 26px;
    background-image: url("../../assets/img/topbar.png");
    background-position: -192px 0;
    position: absolute;
    left: 803px;
    top: 21px;
  }
  .searchwapper {
    margin-left: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    .search {
      width: 150px;
      border-radius: 25px;
    }
  }
  // 创作者中心
  .czzzx {
    margin-left: 20px;
    display: flex;
    align-items: center;
    .child {
      color: #cccccc;
      border-color: #4f4f4f;
    }
    .child:hover {
      color: #ffffff;
      border-color: #ffffff;
    }
  }
  // 头像样式
  .touxiang {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  //登录
  .login {
    margin-left: 7px;
    height: 70px;
    line-height: 70px;
    color: #cccccc;
    font-size: 12px;
    border: none;
  }
  .login:hover {
    color: #ffffff;
  }
  // 登录对话框
  .test {
    ::v-deep .ant-modal-header {
      // border-bottom: 0;
      // border-radius: 0;
      background-color: #333;
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
    }
    ::v-deep .ant-modal-title {
      color: #ffffff;
      font-size: 14px;
    }
    ::v-deep .ant-modal-close {
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      display: flex;
      align-items: center;
    }
    ::v-deep .ant-modal-body {
      padding: 0;
    }
    .model {
      // display: flex;
      // justify-content: center;
      //手机号输入框
      .sjh {
        width: 220px;
        height: 30px;
        margin-bottom: 10px;
      }
      // 验证码输入框
      .yzm {
        // 去掉button默认padding
        ::v-deep .ant-btn {
          padding: 0;
        }
        width: 220px;
        display: flex;
        justify-content: space-between;
        // margin-bottom: 7px;
        .yzminput {
          width: 136px;
        }
        .yzmbtn {
          width: 75px;
          font-size: 12px;
        }
      }
      .loginbtn {
        width: 220px;
      }
      ::v-deep .ant-divider {
        margin: 0;
      }
      // .ant-modal-header {
      //   background-color: red;
      // }
    }
  }
}
</style>