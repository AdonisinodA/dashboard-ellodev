<script setup lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import Header from './components/Header/HeaderUser.vue';
</script>

<template>
  <Header/>
  <div class="flex min-h-screen bg-gray-100">
    <Sidebar />
    <Dashboard />
  </div>
</template>