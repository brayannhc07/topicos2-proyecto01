<template>
  <section class="card p-4 flex flex-col">
    <h2 class="text-2xl font-semibold mb-4">CATWDA</h2>

    <div>
      <div>
        <label class="form-group" v-for="(element) in elements">
          {{ element.label }}:
          <input type="text" v-model="element.description">
        </label>
      </div>
    </div>
  </section>
</template>
<script setup>

import {ref} from "vue";

const elements = ref([
  {
    label: "Clientes",
    description: ""
  },
  {
    label: "Actores",
    description: ""
  },
  {
    label: "Transformación",
    description: ""
  },
  {
    label: "Weltanschaung",
    description: ""
  },
  {
    label: "Dueños",
    description: ""
  },
  {
    label: "Ambiente",
    description: ""
  }
]);
</script>