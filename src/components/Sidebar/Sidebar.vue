<script setup lang="ts">
import {
  BxHomeAlt,
  BsChatSquare,
  BsFileText,
  AkCreditCard,
  BxLinkAlt,
  CaChartBar,
  BxEditAlt,
  BxHelpCircle,
  MiSolidDoorExit
} from '@kalimahapps/vue-icons'

import { ref } from 'vue'
import { useUserStore } from '../../stores/user'

const userStore = useUserStore()

const showSidebar = ref(false)

const menuItems = [
  { icon: BxHomeAlt, text: 'Início', active: true },
  { icon: BsChatSquare, text: 'Meus treinamentos' },
  { icon: BsFileText, text: 'Faturas' },
  { icon: AkCreditCard, text: 'Assinaturas' },
  { icon: BxLinkAlt, text: 'Integrações' },
  { icon: CaChartBar, text: 'Relatório' },
  { icon: BxEditAlt, text: 'Templates' },
  { icon: BxHelpCircle, text: 'Suporte' }
]
</script>

<template>
<button
  class="md:hidden fixed top-4 right-4 z-50 p-2 rounded"
  :class="[showSidebar ? 'text-red-500': 'bg-green-600 text-white ']"
  @click="showSidebar = !showSidebar"
>
  <span v-if="!showSidebar">☰</span>
  <span v-else>✕</span>
</button>


  <div
  class="fixed top-0 right-0 h-full bg-white shadow-lg p-4 z-40 transition-transform transform md:translate-x-0"
  :class="[
    'w-64 flex flex-col',
    showSidebar ? 'translate-x-0' : 'translate-x-full',
    'md:relative md:translate-x-0 md:flex'
  ]"
>
    <div class="flex items-center space-x-4 mb-8">
      <img
        src="https://thumbs.dreamstime.com/b/%C3%ADcone-de-espa%C3%A7o-reservado-para-fotos-do-avatar-em-branco-ilustra%C3%A7%C3%A3o-vetorial-desenho-imagem-perfil-269268516.jpg"
        class="rounded-full w-12 h-12 object-cover"
        alt="Profile"
      />
      <div class="hidden md:block">
        <h2 class="font-semibold">{{ userStore.name }}</h2>
        <span class="text-sm text-green-500">{{ userStore.role }}</span>
      </div>
    </div>

    <nav class="flex-1">
      <ul class="space-y-2">
        <li
          v-for="item in menuItems"
          :key="item.text"
          :class="[
            'flex items-center space-x-2 p-2 rounded hover:bg-gray-200 cursor-pointer',
            item.active ? 'bg-green-50 text-green-600' : ''
          ]"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </nav>

    <div class="pt-4">
      <button class="w-full p-2 text-red-500 hover:bg-red-200 rounded flex items-center">
        <MiSolidDoorExit class="w-5 h-5" />
        <span class="ml-2">Sair</span>
      </button>
    </div>
  </div>
</template>
