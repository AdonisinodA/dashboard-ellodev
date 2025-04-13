<template>
    <div class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-gray-600">{{ label }}</p>
          <p class="text-2xl font-bold">{{ value }}</p>
        </div>
        <span class="text-green-500">+{{ increase }}</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    label: string
    value: string
    increase: string
  }>()
  </script>
  