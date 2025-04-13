<script setup lang="ts">
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import PopularTrainingCard from './PopularTrainingCard.vue'
import StatCard from './StatCard.vue'
import { useUserStore } from '../../stores/user'
import SearchHeader from './SearchHeader.vue'
import { BsBarChartFill, BxSolidDownload, ChRefresh, TaBrandCashapp} from '@kalimahapps/vue-icons'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, BarElement)

const stats = ref([
  { label: 'Lucro Total', value: 'R$ 128.591', increase: '24%' },
  { label: 'Lucro Médio', value: 'R$ 1352', increase: '35%' },
  { label: 'Total Membros', value: '826', increase: '8%' },
  { label: 'Total de treinamentos', value: '18', increase: '5%' }
])

const chartData = {
  labels: Array.from({ length: 15 }, (_, i) => `${i + 1} Jan`),
  datasets: [
    {
      label: 'Total arrecadado',
      data: [5000, 12000, 4000, 6000, 8000, 5000, 15000, 10000, 9000, 4000, 5000, 3000, 4000, 5000, 12000],
      backgroundColor: '#059669', // verde escuro
      stack: 'stack1',
      borderRadius: 6
    },
    {
      label: 'Total retirado',
      data: [3000, 8000, 2000, 4000, 6000, 3000, 10000, 7000, 6000, 2000, 3000, 2000, 3000, 3000, 8000],
      backgroundColor: '#6EE7B7', // verde claro
      stack: 'stack1',
      borderRadius: 6
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: { display: false },
      ticks: { color: '#374151' } // opcional
    },
    y: {
      stacked: true,
      beginAtZero: true,
      grid: { color: '#f3f4f6' },
      ticks: { stepSize: 5000, color: '#374151' }
    }
  },
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
      align: 'start' as const,
      labels: {
        boxWidth: 8,
        usePointStyle: true,
        pointStyle: 'rectRounded'
      }
    }
  }
}
const popularTrainings = ref([
  { name: 'Docker', users: '38', duration: '2h', enrolled: '105' },
  { name: 'GitLab', users: '42', duration: '3h', enrolled: '98' },
  { name: 'C#', users: '45', duration: '4h', enrolled: '120' },
  { name: 'Webflow', users: '35', duration: '2h', enrolled: '89' },
  { name: 'Figma', users: '40', duration: '3h', enrolled: '95' }
])
const userStore = useUserStore()
</script>

<template>
  <div class="flex-1 p-4 md:p-8">
    <SearchHeader title="Relatório" :icon="BsBarChartFill" @search="filter=>console.log('filter', filter)"/>
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 class="text-2xl font-bold">Bem vindo, {{ userStore.name }}!</h1>
        <p class="text-gray-600">Aqui ficam todas estatísticas da sua conta!</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-2 items-center">
        <button class="px-4 py-2 bg-green-200 text-green-700 rounded-lg w-full sm:w-auto hover:scale-105 flex items-center space-x-2">
          <BxSolidDownload/>
          <span>Baixar relatório</span>
          </button>
        <button class="px-4 py-2 bg-green-200 text-green-700  rounded-lg w-full sm:w-auto hover:scale-105 flex items-center space-x-2">
          <ChRefresh/>
          <span>Atualizar</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        v-for="stat in stats"
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :increase="stat.increase"
      />
    </div>

    <div class="bg-white p-6 rounded-lg shadow mb-8">
      <h2 class="text-xl font-semibold pb-5 flex items-center space-x-2"><span class="bg-green-200 p-1 text-green-700 rounded-md "><TaBrandCashapp/></span><span>Total Movimentado</span></h2>
      <div class="min-h-[300px]">
        <Bar :data="chartData" :options="chartOptions" />
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Treinamentos Populares</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <PopularTrainingCard
          v-for="training in popularTrainings"
          :key="training.name"
          v-bind="training"
        />
      </div>
    </div>
  </div>
</template>
