import {request} from './request'
// /playlist/subscribe?t=1&id=106697785
// /playlist/subscribe?t=1&id=106697785
// 收藏
export function collection(t,id) {
  return request({
    url: '/playlist/subscribe',
    params:{
      t,
      id
    }
  })
}
// /user/subcount
// /user/event?uid=32953014
// 获取收藏
export function getcollection() {
  return request({
    url: '/topic/sublist',
    // params:{
    //   // uid,
    //   // type
    // }
  })
}

// ?id=1297494209&msg=测试
export function share(type,id) {
  return request({
    url: '/share/resource',
    params:{
      type,
      id
    }
  })
}

// 获得分享
export function getshare(uid) {
  return request({
    url: '/user/event',
    params:{
      uid
    }
  })
}
// /song/download/url
// 下载
export function download(id) {
  return request({
    url: '/song/download/url',
    params:{
      id
    }
  })
}

// /playlist/create?name=测试歌单
// 新建歌单
export function createplaylist(name) {
  return request({
    url: '/playlist/create',
    params:{
      name
    }
  })
}
// /follow?id=32953014&t=1
// 关注 和 取消关注
export function guanzhu(id,t) {
  return request({
    url: '/follow',
    params:{
      id,
      t
    }
  })
}