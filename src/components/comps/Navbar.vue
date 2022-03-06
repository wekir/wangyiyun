<template>
  <div class="nav">
    <!-- logo -->
    <h1 class="logo"></h1>
    <!-- 列表 -->
    <ul class="list">
      <li><span><a href="#">发现音乐</a></span></li>
      <li><span><a href="#">我的音乐</a></span></li>
      <li><span><a href="#">关注</a></span></li>
      <li><span><a href="https://music.163.com/store/product">商城</a></span></li>
      <li><span><a href="#">音乐人</a></span></li>
      <li><span><a href="#">下载客户端</a></span></li>
    </ul>
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

    <a-button ghost
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
              <a-input placeholder="请输入手机号" />
            </div>
            <div class="yzm">
              <a-input class="yzminput"
                       placeholder="请输入验证码" />
              <a-button class="yzmbtn"
                        type="primary">
                获取验证码
              </a-button>
            </div>
            <div style="color: #333;margin-bottom:17px">
              <a-button ghost
                        style="color: #999999;border: none;margin:0 0 0 -10px">
                密码登录
              </a-button>

            </div>
            <a-button class="loginbtn"
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
              <a-input placeholder="设置登录密码，不少于8位" />
            </div>
            <a-button style="width: 220px;margin-top:20px"
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
            <a-button style="width: 220px;margin-top:20px"
                      type="primary">
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
export default {
  name: 'Navbar',
  data () {
    return {
      ModalText: 'Content of the modal',
      visible: false, //登录对话框
      zhucevisible: false,  //注册对话框
      phone: '',  //手机号
      shownext: false  //是否能进去下一步
    };
  },
  computed: {
    shouphone () {
      const firstphone = this.phone.slice(0, 3)
      const lastphone = this.phone.slice(7)
      return `${firstphone}****${lastphone}`
    }
  },
  methods: {
    onSearch (value) {
      console.log(value);
    },
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
    // 密码设置成功，进去下一步
    isnext () {
      this.shownext = !this.shownext
    }
  },

}
</script>

<style scoped lang="scss">
.nav {
  height: 70px;
  width: 100%;
  background-color: #333;
  display: flex;
  position: relative;
  .logo {
    width: 177px;
    height: 70px;
    margin-left: 124px;
    background-image: url("../../assets/img/topbar.png");
  }
  .list {
    width: 508px;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    li {
      span {
        height: 70px;
        a {
          display: block;
          height: 70px;
          line-height: 70px;
          text-decoration: none;
          color: #cccccc;
          font-size: 14px;
        }
        a:hover {
          color: #ffffff;
          // background-color: #000000;
        }
      }
    }
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