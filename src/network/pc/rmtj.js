import { request } from "./requestpc";

export function rmtjinfo() {
  return request({
    url: '/rmtj'
  })
}