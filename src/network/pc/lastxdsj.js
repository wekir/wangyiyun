
import { request } from "./requestpc";

export function lastXDSJinfo() {
  return request({
    url: '/getlastxdsj',
  })
}