<template>
    <div class="inline-flex items-center px-2 py-1 rounded bg-green-100 text-green-600 text-sm font-medium">
      <component :is="icon" class="w-4 h-4 mr-1" />
      <span>{{ percentage }}%</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue'
  
  const { icon, percentage} = defineProps<{
    percentage: number
    icon: any
  }>()
  </script>
  