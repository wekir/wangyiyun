import { request } from "./requestpc";

export function rmtjinfo() {
  return request({
    url: '/rmtj'
  })
}

//首页入驻歌手
export function rzgsinfo() {
  return request({
    url: '/rzgssy'
  })
}

//首页热门主播
export function rmzbinfo() {
  return request({
    url: '/rmzbsy'
  })
}
