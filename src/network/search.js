// /cloudsearch?keywords=海阔天空
import {request} from './request'

// 搜索
export function search(keywords) {
  return request({
    url: '/cloudsearch',
    params:{
      keywords,
    }
  })
}