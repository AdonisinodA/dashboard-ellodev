<template>
    <PercentageBadge :percentage='value' :icon="CoChartLine"></PercentageBadge>
</template>



<script setup lang="ts">
  import { defineProps } from 'vue'
import PercentageBadge from './PercentageBadge.vue';
import { CoChartLine } from '@kalimahapps/vue-icons';


const {value} = defineProps<{
    value:number 
}>()

</script>