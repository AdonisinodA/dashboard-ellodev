<template>
  <div class=" w-full mx-auto px-4">
    <h2 class="text-lg font-semibold text-gray-800 mb-4 flex items-center"> 
      <FaRankingStar class="text-green-700"/>
      <span>
        Treinamentos Populares
      </span>
    </h2>

    <div class="relative overflow-hidden">
      <div
        ref="carousel"
        class="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory space-x-4 pb-4 px-4"
      >
        <div
          v-for="(item, index) in props.items"
          :key="index"
          class="flex-none w-48 bg-white rounded-lg shadow-md p-4 snap-center"
        >
            <component :is="item.icon "></component>

          <h3 class="text-sm font-semibold text-gray-800">{{ item.name }}</h3>

          <p class="text-xs text-gray-500">{{ item.description }}</p>

          <div class="flex space-x-2 mt-2">
            <span class="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">{{
              item.badge1
            }}</span>
            <span class="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">{{
              item.badge2
            }}</span>
          </div>
        </div>
      </div>

    
    </div>
    <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
      >
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FaRankingStar } from '@kalimahapps/vue-icons';
interface CarouselItem {
  name: string;
  description: string;
  badge1: string;
  badge2: string;
  icon: any;
}

const props = defineProps<{
  items: CarouselItem[];
}>();

const carousel = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -200, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 200, behavior: "smooth" });
  }
};
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>