<template>
    <div class="bg-white md:p-6 py-2 rounded-lg ">
        <div>
          <div class="flex flex-col space-x-2 items-start">
           <div class="flex space-x-2 p-1">
            <p class="text-gray-600">{{ label }}</p>
            <span class="bg-green-200 p-1 rounded-lg">
              <component :is="icon" class="text-green-600"/>
            </span>
           </div>
           <div class="flex space-x-2">
             <p class="text-2xl font-bold text-gray-600">{{ value }}</p>
             <PercentageUp :value="Number(increase)"/>
            </div>
          </div>
          
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
import PercentageUp from '../PercentageBadge/PercentageUp.vue';

  const {
    increase,
    label,
    value
  } = defineProps<{
    label: string
    value: string
    increase: string
    icon:any
  }>()
  </script>
  