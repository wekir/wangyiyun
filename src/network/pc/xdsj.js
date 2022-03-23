import { request } from "./requestpc";

export function xdsjinfo() {
  return request({
    url: '/xdsj'
  })
}