import {request} from './request'

// 切换歌曲
export function songchange(id) {
  return request({
    url: '/song/url',
    params:{
      id,
    }
  })
}

// 歌曲详情
export function songxq(ids) {
  return request({
    url: '/song/detail',
    params:{
      ids,
    }
  })
}