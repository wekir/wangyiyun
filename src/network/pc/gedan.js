import { request } from "./requestpc";

export function gedaninfo(number,pages) {
  return request({
    url: '/getgedan',
    params:{
      number,
      pages
    }
  })
}

export function gedantotal(number,pages) {
  return request({
    url: '/getgedantotal',
    params:{
      number,
      pages
    }
  })
}


