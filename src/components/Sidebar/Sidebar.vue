<script setup lang="ts">
import {
  AnFilledHome,
  HeFilledGroupDiscussionMeetingx3,
  BsFileTextFill,
  BsCreditCardFill,
  BxLinkAlt,
  BsBarChartFill,
  BsEnvelopeFill,
  MdRoundContactSupport,
  MiSolidDoorExit,
  FeMenu
} from '@kalimahapps/vue-icons'

import { ref } from 'vue'
import UserCard from './UserCard.vue'


const showSidebar = ref(false)

 const menuItems = [
  { icon: AnFilledHome, text: 'Início',  },
  { icon: HeFilledGroupDiscussionMeetingx3, text: 'Meus treinamentos' },
  { icon: BsFileTextFill, text: 'Faturas' },
  { icon: BsCreditCardFill, text: 'Assinaturas' },
  { icon: BxLinkAlt, text: 'Integrações' },
  { icon: BsBarChartFill, text: 'Relatório' , active: true},
  { icon: BsEnvelopeFill, text: 'Templates' },
  { icon: MdRoundContactSupport, text: 'Suporte' }
]

</script>

<template>
<button
  class="md:hidden absolute top-6 right-4 z-40 p-2 "
  :class="[showSidebar ? 'hidden': 'text-green-600']"
  @click="showSidebar = !showSidebar"
>
  <span v-if="!showSidebar"><FeMenu/></span>
</button>


  <div
  class="fixed  top-0 right-0 h-full bg-white rounded-md shadow-lg p-4 z-50 transition-transform transform md:translate-x-0"
  :class="[
    'w-full flex flex-col',
    showSidebar ? 'translate-x-0' : 'translate-x-full',
    'md:relative md:translate-x-0 md:flex'
  ]"
>
    <button
      class="md:hidden absolute top-1 right-4 z-50 p-2 text-red-700"
      @click="showSidebar = !showSidebar"
    >
      <span >✕</span>
    </button>
    <UserCard/>

    <nav class="flex-1">
      <ul class="space-y-2">
        <li
      v-for="item in menuItems"
      :key="item.text"
      :class="[
        'flex items-center space-x-2 p-2 rounded hover:bg-green-300 cursor-pointer transition-all relative',
        item.active
          ? 'bg-green-200 text-green-600 font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-600 before:rounded-r'
          : 'text-gray-700'
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
