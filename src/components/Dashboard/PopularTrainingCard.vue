<template>
    <div class="p-4 border rounded-lg text-center">
      <h3 class="font-semibold">{{ name }}</h3>
      <p class="text-sm text-gray-600">{{ users }} Alunos</p>
      <p class="text-sm text-gray-600">{{ duration }}</p>
      <p class="text-sm text-green-500">{{ enrolled }} matriculados</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    name: string
    users: string
    duration: string
    enrolled: string
  }>()
  </script>
  