<template>
  <section class="card p-4 flex flex-col">
    <h2 class="text-2xl font-semibold mb-4">Sombreros</h2>
    <div class="my-2 border rounded-lg p-2" v-for="hat in hats">
      <label class="form-group col-span-2">
        Nombre del sombrero:
        <input type="text" class="form-field" v-model="hat.name">
      </label>
      <label class="form-group w-1/2 inline-block">
        Color del sombrero:
        <input type="color" v-model="hat.color">
      </label>
      <label class="form-group w-1/2 inline-block">
        Texto del sombrero:
        <input type="color" v-model="hat.textColor">
      </label>
      <h4 class="text-lg font-medium mb-2">Elementos <button class="btn-xs btn-primary w-auto inline-flex" @click="hat.items.push({})">Agregar</button></h4>
      <ul >
        <li v-for="item in hat.items" class="my-2">
          <input type="text" class="form-field" v-model="item.value">
        </li>
      </ul>
    </div>
    <button class="btn-sm btn-primary w-auto" @click="hats.push({items:[]})">Agregar</button>

    <div class="mt-8 grid grid-cols-2 gap-2">
      <div class="rounded-lg p-4 border border-outline " v-for="hat in hats" :style="'background: ' + hat.color + '; color: ' + hat.textColor">
        <h3 class="text-2xl font-semibold mb-4">{{  hat.name }}</h3>
        <ul >
          <li v-for="item in hat.items">{{ item.value }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>

import {ref} from "vue";

const hats = ref([]);


</script>