
<script setup lang="ts">
import { MdSharpDarkMode , FaUser, MdRoundNotifications} from '@kalimahapps/vue-icons';

</script>
  
<template>
    <header class="flex items-center  bg-white shadow rounded-xl px-4 py-2 w-screen justify-between h-12">
      <div class=" items-center space-x-2 flex">
        <div class="bg-emerald-500 text-white p-1 rounded-md">
          <!-- icone improvisado da empresa-->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <span class="font-bold text-sm">BS MEMBERS</span>
      </div>
  
      <div class="flex items-center space-x-4 pr-3 ">
          <MdSharpDarkMode class="text-gray-600 hover:scale-110 hover:cursor-pointer"/>
  
          <FaUser class="text-gray-600 hover:scale-110 hover:cursor-pointer"/>
  
         <MdRoundNotifications class="text-gray-600 hover:scale-110 hover:cursor-pointer"/>
      </div>
    </header>
  </template>
  
  