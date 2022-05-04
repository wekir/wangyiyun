import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {captchalogin,passwordlogin} from '../network/login'  //登录
import { songchange,songxq } from '../network/song'//歌曲
import { songtime } from '../components/comps/time'
import {by} from '../components/comps/paixu'

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
    // 播放列表
    audio: [
      {
        title: 'Waving At Cars',
        color: 'white',
        artist: 'Isac Elliot',
        src: 'https://music.163.com/song/media/outer/url?id=1815892497.mp3',
        pic: 'https://p1.music.126.net/JDIyMuDRPZmnrvssRld5pg==/109951165674055444.jpg',
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
    // 第几首歌播放
    whichSong: 0
  },
  actions: {
    switchsong(context,value) {
      // console.log('有没有',value);
      // value.sort(function(a,b) {
      //   return b - a
      // })
      // console.log('有',value);
      let audio = []
      value.forEach((item,index) => {
        // console.log('222',item);
        let obj = {}
        songxq(item).then(res => {
          // obj.id = item
          obj.title = res.data.songs[0].name
          obj.artist = res.data.songs[0].ar[0].name
          obj.pic = res.data.songs[0].al.picUrl
          // obj.lrc = res.data.songs[0].dt
          obj.src = `https://music.163.com/song/media/outer/url?id=${item}.mp3`

          obj.key = index + 1
          obj.songtitle = res.data.songs[0].name
          // obj.songtime = res.data.songs[0].dt
          obj.songtime = songtime(res.data.songs[0].dt).substring(songtime(res.data.songs[0].dt).length - 5)
          obj.songaudio = res.data.songs[0].ar[0].name
          obj.album = res.data.songs[0].al.name

          // songchange(item).then( res => {
          //   obj.src = res.data.data[0].url
          // })
          audio.push(obj)
          if(index === value.length - 1){
            console.log('audio.length',audio.length)
            audio.sort(function(a,b) {
              return b.key - a.key
            })
            console.log('audio',audio)
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
    // 播放列表
    Switchsong (state,value) {  
      
      value.sort(function(a,b) {
        return b.key - a.key
      })
      console.log('不按时的',value);
      state.audio = value
      
    },
    // 列表中的第几首歌
    changebfsongs (state,value) {
      state.whichSong = value
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