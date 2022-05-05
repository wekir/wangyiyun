<template>

  <div class="gqlb">
    <div class="conten">

      <div class="item"
           v-for="(item) in lists"
           :key="item.id">
        <a :href="item.imgurl">
          <img :src="item.coverImgUrl"
               alt="歌单图片">
          <div class="info">
            <div>
              <h2>{{item.name}}</h2>
              <h2>{{item.playCount}} 首</h2>
            </div>

          </div>

        </a>
      </div>
      <!-- <a href="https://music.163.com/#/my/m/music/playlist?id=2493617088"></a> -->

      <!-- <h2>我的音乐</h2>
        <a-button @click="btn01">点我</a-button>
        <a-button @click="btn02">关注列表</a-button>
        <a-button @click="btn03">用户动态</a-button>
        <a-button @click="GD">歌单</a-button> -->
    </div>

  </div>
</template>

<script>
import { accountdj, wodegedan, dongtai, dlzt, yhgzlb } from '../../network/login'
import { getuserinfo, getuserplaylist } from '../../network/wodeyinyue'
import { songxq } from '../../network/song'
export default {
  name: 'Wodeyinyue',
  data () {
    return {
      timers: '',
      lists: [
        {
          coverImgUrl: '',
          name: '',
          playCount: 0,
          imgurl: ''
        }
      ]
    }
  },
  created () {
    getuserplaylist('1658129428').then(res => {
      this.lists = res.data.playlist
      if (this.lists[0].coverImgUrl) {
        this.lists.map((item, index) => {
          this.lists[index].imgurl = 'https://music.163.com/#/my/m/music/playlist?id=' + item.id
        })
      }
    })

  },
  mounted () {
    accountdj().then(res => {
      console.log('乱', res);
      // this.dengji = res.data.data.level
    })

    // songxq('2493617088').then(res => {
    //   console.log('9999999', res);
    //   // this.dengji = res.data.data.level
    // })
    dongtai('1658129428').then(res => {
      console.log('1111', res);
    })
    // dlzt().then(res => {
    //   res.data.data.account.status = 1
    //   console.log('登录状态', res);
    //   wodegedan('1658129428').then(res => {
    //     console.log('hao', res);
    //     // this.dengji = res.data.data.level
    //   })
    // })
  },
  methods: {
    btn01 () {
      // console.log('222');
      dlzt().then(res => {
        // res.data.data.account.status = 1
        console.log('登录状态', res);
        // wodegedan('1658129428').then(res => {
        //   console.log('hao', res);
        //   // this.dengji = res.data.data.level
        // })
      })
    },
    btn02 () {
      yhgzlb('1658129428').then(res => {
        console.log('关注列表', res);
      })
    },
    btn03 () {
      yhgzlb('9003').then(res => {
        console.log('用户动态', res);
      })
      this.timers = new Date(1650895231051);
      console.log('this.timers', this.timers);
    },
    GD () {
      getuserplaylist('1658129428').then(res => {
        console.log('信息', res);
      })
      console.log('ggggg');
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
    flex-wrap: wrap;
    // justify-content: space-around;
    .item {
      width: 500px;
      height: 200px;
      border: 2px solid #d3d3d3;
      margin: 5px 23px;
      background-color: #f5f5f5;
      // background-color: red;
      a {
        display: flex;
        width: 500px;
        height: 200px;
        img {
          display: block;
          height: 150px;
          width: 150px;
          margin: 20px 10px;
        }
        .info {
          display: flex;
          // text-align: center;
          align-items: center;
          // justify-content: center;
          div {
            height: 150px;
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }
      }
    }
  }
}
</style>