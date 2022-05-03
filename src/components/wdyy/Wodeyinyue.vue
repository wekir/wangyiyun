<template>
  <div>
    <h2>我的音乐</h2>
    <a-button @click="btn01">点我</a-button>
    <a-button @click="btn02">关注列表</a-button>
    <a-button @click="btn03">用户动态</a-button>
  </div>
</template>

<script>
import { accountdj, wodegedan, dongtai, dlzt, yhgzlb } from '../../network/login'
import { songxq } from '../../network/song'
export default {
  name: 'Wodeyinyue',
  data () {
    return {
      evId: '',
      timers: ''
    }
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
    }
  }
}
</script>

<style>
</style>