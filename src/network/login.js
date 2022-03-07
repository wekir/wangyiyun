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
