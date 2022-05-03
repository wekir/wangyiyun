import {request} from './request'

// 获取验证码
export function getcaptcha(phone) {
  return request({
    url: '/captcha/sent',
    params: {
      phone,
    }
  })
}
// 短信登录
export function captchalogin(phone,captcha) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      captcha
    }
  })
}
//密码登录
export function passwordlogin(phone,password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    }
  })
}
//获取账号信息
export function accountmsg(){
  return request({
    url: '/user/account'
  })
}
// 获取等级信息
export function accountdj() {
  return request({
    url: '/user/level'
  })
}
// 注册
export function zhuce(phone,password,captcha,nickname) {
  return request({
    url: '/register/cellphone',
    params:{
      phone,
      password,
      captcha,
      nickname
    }
  })
}
// /song/detail?ids=347230
// /song/url?id=33894312

export function song(ids) {
  return request({
    url: '/song/detail',
    params:{
      ids,
    }
  })
}

export function songmp(id) {
  return request({
    url: '/song/url',
    params:{
      id,
    }
  })
}


// 我的歌单
export function wodegedan(uid) {
  return request({
    url: '/user/playlist',
    params:{
      uid,
    }
  })
}

export function dongtai(uid) {
  return request({
    url: '/user/event',
    params:{
      uid,
    }
  })
}



export function dlzt() {
  return request({
    url: '/login/status',
  })
}

// 用户关注列表
export function yhgzlb(uid) {
  return request({
    url: '/user/follows',
    params:{
      uid,
    }
  })
}

// 9003
// 用户动态
export function yhdt(uid) {
  return request({
    url: '/user/event',
    params:{
      uid,
    }
  })
}
// /comment/event
// export function yhdt(uid) {
//   return request({
//     url: '/user/event',
//     params:{
//       uid,
//     }
//   })
// }