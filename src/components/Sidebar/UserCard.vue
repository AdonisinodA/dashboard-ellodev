<template>
    <div class="bg-white shadow rounded-xl p-4 text-center">
      <div class="flex justify-center">
        <div class="w-20 h-20 rounded-full border-4 border-emerald-500 overflow-hidden">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="Lucas Silva"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
  
      <h2 class="text-lg font-semibold mt-2">{{ userStore.name }}</h2>
  
      <div class="mt-1 inline-flex items-center px-3 py-0.5 border border-emerald-500 text-emerald-600 text-xs rounded-full space-x-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm6-2V7a6 6 0 10-12 0v2a6 6 0 0012 0zm-3 6h-6m6 0a3 3 0 11-6 0m6 0v2a3 3 0 01-6 0v-2" />
        </svg>
        <span>{{ userStore.role }}</span>
      </div>
  
      <div class="mt-4 text-left">
        <p class="text-sm font-medium text-gray-700">Treinamentos criados</p>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div class="bg-emerald-500 h-2 rounded-full" style="width: 60%"></div>
        </div>
  
        <p class="text-sm font-medium text-gray-700 mt-3">Usuários nos Treinamentos</p>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div class="bg-emerald-500 h-2 rounded-full" style="width: 80%"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { useUserStore } from '../../stores/user';

 const userStore = useUserStore()

  </script>
  