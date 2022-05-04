import {request} from './request'
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

// 获取收藏
export function getcollection() {
  return request({
    url: '/user/subcount',
  })
}