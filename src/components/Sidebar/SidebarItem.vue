<template>
    <li
    @click="menuStore.setActiveMenuItem(id)"
    :class="[
        'flex items-center space-x-2 p-2 rounded hover:bg-green-300 cursor-pointer transition-all relative',
        menuStore.activeMenuItem === id
          ? 'bg-green-200 text-green-600 font-medium before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-600 before:rounded-r'
          : 'text-gray-700'
      ]"
    >
      <component class="w-5 h-5 my-2" :is="icon"></component>
      <span>{{ text }}</span>
    </li>
  </template>
  
  <script setup lang="ts">
import { useMenuStore } from '../../stores/menu';

  defineProps<{
    icon: any
    text: string
    id:string
  }>()

  const menuStore = useMenuStore()
  </script>
  