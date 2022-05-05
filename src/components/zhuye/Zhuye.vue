<template>
  <div class="gqlb">
    <div class="conten">
      <div class="inner">
        <div class="userinfo">
          <img :src="photoimg"
               style="width: 180px;height: 180px;padding: 2px;border: 1px solid #d5d5d5;">
          <div style="margin-left: 25px">
            <div class="above">
              <div class="info">
                <h3>{{username}}</h3>
                <a-button style="width:50px;height:25px;background-color:#eaeaea;margin-left:10px"
                          shape="round">Lv.{{dengji}}</a-button>
              </div>
            </div>
            <a-divider style="height: 2px" />
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
      </div>
    </div>

  </div>
</template>

<script>
import { accountmsg, accountdj } from '../../network/login'
export default {
  name: 'zhuye',
  mounted () {
    // 获取账号信息
    accountmsg().then(res => {
      console.log('账号信息', res);
      if (res.data.account) {
        this.photoimg = res.data.profile.avatarUrl + '?param=180y180'
        this.status = res.data.account.status
        this.tokenVersion = res.data.account.tokenVersion
        this.username = res.data.profile.nickname
      }
    })
    // 等级信息
    accountdj().then(res => {
      this.dengji = res.data.data.level
    })
  },
  data () {
    return {
      photoimg: '',  //头像图片地址
      username: '',  //用户名
      status: '',  //动态条数
      tokenVersion: '', //关注数量
      fans: 2,   //粉丝数  
      dengji: '',  //等级
    }
  }
}
</script>

<style scoped lang="scss">
.gqlb {
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  background-color: #f5f5f5;
  // height: 100vh;
  .conten {
    width: 1100px;
    height: 100%;
    background-color: white;
    border: 2px solid #d3d3d3;
    display: flex;
    justify-content: center;
    .inner {
      margin-top: 50px;
      width: 950px;
      // background-color: red;
      .userinfo {
        display: flex;
        .above {
          width: 730px;
          display: flex;
          justify-content: space-between;
          .info {
            margin-top: 20px;
            width: 130px;
            display: flex;
          }
        }
        .dibu {
          width: 730px;
          display: flex;
          // justify-content: center;
          margin-top: 25px;
          .bottom {
            width: 65px;
            margin-left: 20px;
          }
        }
      }
    }
    // justify-content: space-around;
  }
}
</style>