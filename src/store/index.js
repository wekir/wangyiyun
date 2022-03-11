import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {captchalogin,passwordlogin} from '../network/login'  //登录
import { songchange,songxq } from '../network/song'//歌曲

const login = {
  namespaced: true,  //开启命名空间
  state: {
    islogin: false  //初始为  未登录
  },
  actions: {
    // 修改登录状态  短信登录
    changelogin(context,value) {
      captchalogin(value.phone, value.captcha).then(() => {
        context.commit('Changelogin',true)
      }).catch((err) => {
        console.log(err);
        this.$message.error('验证码错误，请从新输入');
      })
    },
    // 修改登录状态  密码
    changeloginpw(context,value) {
      // console.log('context',context);
      // console.log('value',value);
      passwordlogin(value.phone, value.password).then((res) => {
        if (res.data.code === 200) {
          context.commit('Changeloginpw',true)
        }
        // 如果密码错误，输出错误信息
        if (res.data.msg) {
          context.commit('Changeloginpw',false)
        }
      })
    }
  },
  mutations: {
    // 修改登录状态  短信登录
    Changelogin(state,value) {
      state.islogin = value
    },
    // 修改登录状态  密码登录
    Changeloginpw(state,value) {
      state.islogin = value
    }
  },
  getters: {}
}

const songinfo = {
  namespaced: true,  //开启命名空间
  state: {
    audio: [
      {
        title: 'CRANK',
        color: 'white',
        artist: 'CHENYI',
        src: 'http://m801.music.126.net/20220312000102/2c49fd68ee80c5f420ba038e5ab5961d/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1662497870/b26c/49dd/9542/d95be5b819083e26dc8826bdb431d74a.flac',
        pic: 'https://p1.music.126.net/3zGTj7aqQwt0pBneu9hHLg==/109951164793724802.jpg',
        // lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
      },
      // {
      //   title: '蒲空英的约定',
      //   artist: '黄叶',
      //   src: 'http://m8.music.126.net/20220311163433/6cab3b295ba2856e63f53fe26349a388/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/4064576995/b15a/97b1/e51a/6f0cbfcf3a0556f0e5809b24db078440.mp3',
      //   pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/QQ%E5%9B%BE%E7%89%8720200713203148.jpg",
      //   lrc: '[00:00.00] (,,•́ . •̀,,) 刚刚开始学钢琴弹的hhhh',
      // },
      // {
      //   title: '无畏',
      //   artist: '马頔',
      //   url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E9%A9%AC%E9%A0%94%20-%20%E6%97%A0%E7%95%8F.flac',
      //   pic: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E4%BB%A5%E5%AE%B6%E4%B9%8B%E5%90%8D.jpg', // prettier-ignore
      //   lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
      // },
      // {
      //   title: '蓝乐',
      //   artist: '白纸',
      //   url: 'https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/%E8%93%9D%E4%B9%90%20-%20%E7%99%BD%E7%BA%B8.flac',
      //   pic: "https://edu-guil-1010.oss-cn-beijing.aliyuncs.com/-1992181439.jpg",
      //   lrc: '[00:00.00] (,,•́ . •̀,,) 抱歉，当前歌曲暂无歌词',
      // },
    ],
  },
  actions: {
    switchsong(context,value) {
      let audio = []
      value.forEach((item,index) => {
        let obj = {}
        songxq(item).then(res => {
          // obj.id = item
          obj.title = res.data.songs[0].al.name
          obj.artist = res.data.songs[0].ar[0].name
          obj.pic = res.data.songs[0].al.picUrl
          // obj.lrc = res.data.songs[0].dt
          obj.src = `https://music.163.com/song/media/outer/url?id=${item}.mp3`
          // songchange(item).then( res => {
          //   obj.src = res.data.data[0].url
          // })
          audio.push(obj)
          if(index === value.length - 1){
            context.commit('Switchsong',audio)
          }
        })
      });
    },
    // 歌曲音频
    // songyp(context,value) {
    //   let audio = value
    //   songchange(audio.id).then(res => {
    //     audio.src = res.data.data[0].url
    //     // console.log('拿到！！！',audio);
    //     context.commit('Switchsong',audio)
    //   })
    // }
  },
  mutations: {
    Switchsong (state,value) {  
      state.audio = value
      console.log('state.audio',state.audio);
    }
  },
  getters: {}
}

const store = new Vuex.Store({
  modules: {
    login,
    songinfo
  }
})

export default store