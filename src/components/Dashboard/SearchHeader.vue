<template>
    <div class="flex items-center justify-between p-3 rounded space-x-2">
      <div class="text-sm text-gray-700 font-medium flex items-center space-x-2">
        <component :is="props.icon" class="w-4 h-4 text-gray-500" v-if="props.icon" />
        <span>{{ props.title }}</span>
      </div>
  
      <div class="flex items-center bg-white rounded overflow-hidden border border-gray-300 w-96 ">
        <input
          type="text"
          class="px-3 py-1 text-sm focus:outline-none w-full"
          placeholder="Pesquisar"
          v-model="searchQuery"
          @input="emitSearch"
        />
        <button class="bg-green-300 p-2 hover:bg-green-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110 2.5a7.5 7.5 0 016.65 14.15z" />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'
  
  const props = defineProps<{
    title: string
    icon?: any
  }>()
  
  const emit = defineEmits<{
    (e: 'search', value: string): void
  }>()
  
  const searchQuery = ref('')
  
  function emitSearch() {
    emit('search', searchQuery.value)
  }
  </script>
  