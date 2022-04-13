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

// 榜单-飙升榜
export function bsbinfo() {
  return request({
    url: '/bsbsy'
  })
}

// 榜单-新歌榜
export function xgbinfo() {
  return request({
    url: '/xgbsy'
  })
}

// 榜单-原创榜
export function ycbinfo() {
  return request({
    url: '/ycbsy'
  })
}