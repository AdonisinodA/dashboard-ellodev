import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'João da Silva',
    role: 'Estagiário',
    isLoggedIn: true
  }),

})
