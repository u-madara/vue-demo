import * as axios from 'axios'
interface defaultRes {
  code: number,
  message: string,
  data?: [],
}
declare module 'axios' {
  interface AxiosResponse<defaultRes>{
    data:defaultRes
  }
}
