<template>
    <li
      :class="[
        'flex items-center space-x-2 p-2 rounded hover:bg-gray-100 cursor-pointer',
        active ? 'bg-green-50 text-green-600' : ''
      ]"
    >
      <span>{{ icon }}</span>
      <span>{{ text }}</span>
    </li>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    icon: string
    text: string
    active?: boolean
  }>()
  </script>
  