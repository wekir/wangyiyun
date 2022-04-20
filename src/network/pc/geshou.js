
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

// 欧美有图片
export function getOMhasimginfo() {
  return request({
    url: '/getomhasimg',
  })
}
// 欧美没有图片
export function getOMnoimginfo() {
  return request({
    url: '/getomnoimg',
  })
}

// 韩国有图片
export function getHGhasimginfo() {
  return request({
    url: '/gethghasimg',
  })
}
// 韩国没有图片
export function getHGnoimginfo() {
  return request({
    url: '/gethgnoimg',
  })
}