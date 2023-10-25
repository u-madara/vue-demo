import axios from 'axios'

const http = axios.create({
  // baseURL: ''
  timeout: 1000,
})

http.interceptors.request.use((config) => {
  return config
}, error => {
  return Promise.reject(error)
})


http.interceptors.response.use(response => {
  console.log(response)
  return response.data
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default http
