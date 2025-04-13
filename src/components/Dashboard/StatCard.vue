<template>
    <div class="bg-white p-6 rounded-lg shadow">
      <div class="flex justify-between items-center">
        <div>
          <div class="flex justify-between space-x-2 items-center">
            <p class="text-gray-600">{{ label }}</p>
            <span class="bg-green-200 p-2 rounded-lg">
              <component :is="icon" class="text-green-600"/>
            </span>
          </div>
          <p class="text-2xl font-bold">{{ value }}</p>
        

        </div>
        <PercentageUp :value="Number(increase)"/>
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
  