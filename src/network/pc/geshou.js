
import { request } from "./requestpc";

export function geshouTJinfo() {
  return request({
    url: '/getgeshou',
    // params:{
    //   number,
    //   pages
    // }
  })
}

// 华语有图片
export function getHYhasimginfo() {
  return request({
    url: '/gethyhasimg',
  })
}
// 华语没有图片
export function getHYnoimginfo() {
  return request({
    url: '/gethynoimg',
  })
}