<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Header from './components/Header/HeaderUser.vue';
import { useMenuStore } from './stores/menu';
const menuStore = useMenuStore()
const components = [
  {
    id:'relatorio', component:Dashboard
  }
]
</script>

<template>
  <Header/>
  
  <div class="flex min-h-screen bg-gray-100 w-full">
    <div class="md:m-2 h-auto ">
      <Sidebar />
   </div>
    <div class="md:min-w-[50%] w-full  md:m-2 bg-white shadow-lg rounded-md "> 
       <component class="md:p-4 p-2" :is="components.find(component=> component.id ===  menuStore.activeMenuItem)?.component"/>
    </div>
  </div>
</template>