import http from '@/apis/http'

interface User {
  username: string,
  password: string
}



export const login = (user: User) => http.post('/login', user)
