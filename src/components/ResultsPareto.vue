<template>
  <section class="card p-4 flex flex-col">
    <h2 class="text-2xl font-semibold mb-4">Diagrama de Pareto - Ishikawa</h2>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-on-surface-variant rounded-lg">
        <thead class="text-xs uppercase bg-surface-container">
        <tr>
          <th scope="col" class="p-3">
            Causa
          </th>
          <th scope="col" class="p-3">
            Frecuencia
          </th>
          <th scope="col" class="p-3">
            Total Acumulado
          </th>
          <th scope="col" class="p-3">
            Composición Porcentual
          </th>
          <th scope="col" class="p-3">
            Porcentaje acumulado
          </th>
          <th scope="col" class="p-3">
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-surface border-b border-outline" v-for="(element, index) in tableData">
          <th scope="row"
              class="p-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <input type="text" class="form-field" v-model="element.name">
          </th>
          <td class="p-3">
            <input type="number" class="form-field" v-model="element.count">
          </td>
          <td class="p-3">
            {{ element.countAccumulator }}
          </td>
          <td class="p-3">
            {{ Math.floor(element.percentage) }}%
          </td>
          <td class="p-3">
            {{ Math.floor(element.percentageAccumulator) }}%
          </td>
          <td class="p-3">
            <button class="btn-xs btn-primary" @click="tableData.splice(index, 1)">Eliminar</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="flex my-2">
        <button class="btn-sm btn-primary ml-auto" @click="tableData.push({count: 0})">Agregar</button>
      </div>
      <div>
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </section>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import Chart from "chart.js/auto";

const tableData = ref([
  {
    name: "HOla",
    count: 10,
    countAccumulator: 10,
    percentage: 10,
    percentageAccumulator: 10
  }
]);
watch(tableData, (table) => {
  table.sort((a, b) => b.count - a.count);
  const total = table.reduce((a, b) => parseInt(a + (b.count ?? 0)), 0);
  let countAccumulator = 0;
  let percentageAccumulator = 0;

  table = table.map(data => {
    data.percentage = (data.count / total) * 100;
    countAccumulator += data.count;
    percentageAccumulator += data.percentage;
    data.countAccumulator = countAccumulator;
    data.percentageAccumulator = percentageAccumulator;
    return data;
  });
  showTable();
}, {deep: true});
let chart = null;
const showTable = () => {
  if (chart) {

    chart.destroy();
  }
  const ctx = document.getElementById('myChart');
  chart = new Chart(ctx, {
    data: {
      labels: tableData.value.map(data => data.name),
      datasets: [
        {
          type: "bar",
          label: 'Causas',
          data: tableData.value.map(data => data.percentage),
          borderWidth: 1
        },
        {
          type: "line",
          label: 'Acumulados',
          data: tableData.value.map(data => data.percentageAccumulator),
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
</script>