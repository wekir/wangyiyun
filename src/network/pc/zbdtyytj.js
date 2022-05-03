
import { request } from "./requestpc";

export function yytjinfo() {
  return request({
    url: '/getyytjinfo',
    // params:{
    //   number,
    //   pages
    // }
  })
}