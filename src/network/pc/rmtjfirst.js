import { request } from "./requestpc";

// 第一个item里的数据
export function rmtjfirstinfo() {
  return request({
    url: '/rmtjfirst'
  })
}