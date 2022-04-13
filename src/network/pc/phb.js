import { request } from "./requestpc";

export function phbinfo() {
  return request({
    url: '/phb'
  })
}