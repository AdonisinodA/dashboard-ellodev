<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Header from './components/Header/HeaderUser.vue';
</script>

<template>
  <Header/>
  
  <div class="flex min-h-screen bg-gray-200 w-full">
    <div class="md:m-2 md:w-[15%]">
      <Sidebar />
   </div>
    <div class="md:w-[85%] w-full md:m-2 md:p-0 p-2 bg-white shadow-lg rounded-md"> 
      <Dashboard />
    </div>
  </div>
</template>