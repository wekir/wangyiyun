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
    <div style="width:250px;height: 700px;background-color: #333333;"></div>
  </div>
</template>

<script>
import { accountmsg, accountdj } from '../../../../network/login'
import { mapState } from 'vuex'

export default {
  name: 'accountmsg',
  data () {
    return {
      photoimg: '',  //头像图片地址
      username: '',  //用户名
      status: '',  //动态条数
      tokenVersion: '', //关注数量
      fans: 2,   //粉丝数  
      dengji: '',  //等级
    }
  },
  computed: {
    ...mapState('login', ['islogin']),
  },
  mounted () {
    // 获取账号信息
    accountmsg().then(res => {
      console.log('账号信息', res);
      if (res.data.account) {
        this.photoimg = res.data.profile.avatarUrl + '?param=80y80'
        this.status = res.data.account.status
        this.tokenVersion = res.data.account.tokenVersion
        this.username = res.data.profile.nickname
      }
    })
    // 等级信息
    accountdj().then(res => {
      console.log('等级', res);
      this.dengji = res.data.data.level
    })
  },
  methods: {
    login () {
      this.$bus.$emit('duihuakuan')
    }
  }
}
</script>

<style scoped lang="scss">
// 未登录时显示
.nologin {
  width: 250px;
  height: 140px;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
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
  width: 250px;
  height: 185px;
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  border: 1px solid #d3d3d3;
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
</style>