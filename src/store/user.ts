import { login } from '@/apis/login'
import { defineStore } from 'pinia'
import router from '@/router'

const useUserStore = defineStore('user',{
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem('user') || '{}'),
      menus: JSON.parse(localStorage.getItem('menus') || '{}')
    }
  },
  actions: {
    async login(user: any){
      const result = await login(user)
      if (result.code === 200) {
        this.user = result.data.user
        this.menus = result.data.menus
        localStorage.setItem('user', result.data.user)
        localStorage.setItem('menus', result.data.menus)
        await router.push('/home')
      }
    }
  }
})

export default useUserStore
