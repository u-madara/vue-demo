const Mock = require('mockjs')

Mock.setup({
  timeout: '200-800'
})
const userInfoList = [
  {
    username: 'admin',
    password: '123456'
  }
]

Mock.mock('/list', 'get', () => {
  return {
    code: 0,
    data: ['123']
  }
})
Mock.mock('/login', 'post', (config) => {
  console.log(config)
  const {
    username,
    password
  } = JSON.parse(config.body)
  const user = userInfoList.filter(item => item.username === username)
  if (user.length) {
    if (user[0].password === password) {
      return {
        code: 200,
        message: '登录成功'
      }
    } else {
      return {
        code: 1,
        message: '账号或密码不对'
      }
    }
  } else {
    return {
      code: 2,
      message: '查无此人'
    }
  }
})
