import { request } from "./request";

export function getbanner(type) {
  return request({
    url: '/banner',
    params: {
      type,
    }
  })
}