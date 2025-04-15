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
import SidebarItem from './SidebarItem.vue'


const showSidebar = ref(false)

 const menuItems = [
  { icon: AnFilledHome, text: 'Início',  id:'inicio'},
  { icon: HeFilledGroupDiscussionMeetingx3, text: 'Meus treinamentos' , id:'meusTreinamentos'},
  { icon: BsFileTextFill, text: 'Faturas' , id:'faturas'},
  { icon: BsCreditCardFill, text: 'Assinaturas' , id:'assinaturas' },
  { icon: BxLinkAlt, text: 'Integrações', id:'integracoes' },
  { icon: BsBarChartFill, text: 'Relatório' , id:'relatorio'},
  { icon: BsEnvelopeFill, text: 'Templates', id:'templates'},
  { icon: MdRoundContactSupport, text: 'Suporte', id:'suporte' }
]

</script>

<template>
<button
  class="md:hidden absolute top-4 right-4 z-40 p-2 "
  :class="[showSidebar ? 'hidden': 'text-green-600']"
  @click="showSidebar = !showSidebar"
>
  <FeMenu class="size-7"/>
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
      class="md:hidden absolute top-1 right-4  
      text-2xl z-50 p-2 text-red-700"
      @click="showSidebar = !showSidebar"
    >
      <span >✕</span>
    </button>
    <UserCard/>

    <nav class="flex-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-white">
      <ul class="space-y-2">
    <div v-for="item in menuItems">
      <SidebarItem :text="item.text" :id="item.id!"  :icon="item.icon"/>
    </div>

      </ul>

      <div class="pt-20">
      <button class="w-full p-2 text-red-500 hover:bg-red-200 rounded flex items-center">
        <MiSolidDoorExit class="w-5 h-5" />
        <span class="ml-2">Sair</span>
      </button>
    </div>
    </nav>
  
  </div>
</template>
