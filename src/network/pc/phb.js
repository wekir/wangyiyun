import { request } from "./requestpc";

export function phbinfo() {
  return request({
    url: '/phb'
  })
}

export function phbqqmtbinfo() {
  return request({
    url: '/phbqqmtb'
  })
}