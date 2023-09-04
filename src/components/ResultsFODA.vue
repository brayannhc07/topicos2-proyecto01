<template>
  <section class="card p-4 flex flex-col">
    <h2 class="text-2xl font-semibold mb-4">Análisis FODA</h2>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="(element) in foda">
        <h3 class="text-xl mb-4">{{ element.name }}</h3>
        <input type="text" class="form-field my-2" v-for="(item) in element.items" v-model="item.name">
        <button class="btn-xs btn-primary" @click="element.items.push({name: ''})">Agregar</button>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-2 grid-rows-2 gap-2">
      <div class="p-4 rounded" v-for="(element) in foda" :class="element.class">
        <h3 class="text-xl mb-4">{{ element.name }}</h3>
        <ul class="list-disc list-inside">
          <li v-for="item in element.items">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const foda = ref([
  {
    name: "Fortalezas",
    items: [],
    class: "bg-green-300"
  },
  {
    name: "Oportunidades",
    items: [],
    class: "bg-yellow-300"
  },
  {
    name: "Debilidades",
    items: [],
    class: "bg-purple-300"
  },
  {
    name: "Amenazas",
    items: [],
    class: "bg-red-300"
  }
]);
</script>