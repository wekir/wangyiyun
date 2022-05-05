
import {request} from './request'

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export function getuserinfo() {
  return request({
    url: '/user/subcount',
    // params:{
    //   id,
    // }
  })
}

// 获取用户歌单
export function getuserplaylist(uid) {
  return request({
    url: '/user/playlist',
    params:{
      uid,
    }
  })
}