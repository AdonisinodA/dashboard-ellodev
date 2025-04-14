import { defineStore } from 'pinia'

interface MenuItem {
  id: string
  title: string
  icon: string
}

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeMenuItem:'relatorio',
    menuItems: [
      { id: 'relatorio', title: 'Relatório', icon: 'HomeIcon' },
    ] as MenuItem[]
  }),
  actions: {
    setActiveMenuItem(id: string) {
      this.activeMenuItem = id
    }
  },
  getters: {
    currentMenuItem: (state) => 
      state.menuItems.find(item => item.id === state.activeMenuItem)
  }
})