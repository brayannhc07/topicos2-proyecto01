<script setup>
import {ref} from "vue";
import {Position, VueFlow} from "@vue-flow/core";
import {Controls} from "@vue-flow/controls";

const elements = ref([
  // Nodes
  // An input node, specified by using `type: 'input'`
  {
    id: '1',
    type: 'input',
    label: 'Herramientas para la toma de decisiones',
    position: {x: 0, y: 100},
    sourcePosition: Position.Right
  },
  // Default nodes, you can omit `type: 'default'`
  {id: '2', label: '', position: {x: 200, y: 0}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '3', label: '', position: {x: 300, y: -50}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '4', label: '', position: {x: 400, y: -100}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '5', label: '', position: {x: 500, y: -50}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '6', label: '', position: {x: 600, y: 0}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '7', label: '', position: {x: 200, y: 200}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '8', label: '', position: {x: 300, y: 250}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '9', label: '', position: {x: 400, y: 300}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '10', label: '', position: {x: 500, y: 250}, targetPosition: Position.Right, sourcePosition: Position.Right},
  {id: '11', label: '', position: {x: 600, y: 200}, targetPosition: Position.Right, sourcePosition: Position.Right},

  {
    id: '12',
    type: 'output',
    label: 'Nombre de la problemática',
    position: {x: 800, y: 100},
    targetPosition: Position.Left
  },


  // Edges
  {id: 'e1-2', source: '1', target: '2',},
  {id: 'e1-3', source: '1', target: '3'},
  {id: 'e1-4', source: '1', target: '4',},
  {id: 'e1-5', source: '1', target: '5',},
  {id: 'e1-6', source: '1', target: '6',},
  {id: 'e1-7', source: '1', target: '7',},
  {id: 'e1-8', source: '1', target: '8',},
  {id: 'e1-9', source: '1', target: '9',},
  {id: 'e1-10', source: '1', target: '10',},
  {id: 'e1-11', source: '1', target: '11',},
  {id: 'e1-12', source: '1', target: '12',},
]);

</script>

<template>
  <section class="card p-4">
    <h2 class="text-2xl font-semibold mb-4">Diagrama Ishikawa</h2>
    <div class="grid grid-cols-2 gap-4">
      <label class="form-group col-span-2">
        Nombre de la problemática:
        <input type="text" :value="elements[11].label" @input="elements[11].label = $event.target.value">
      </label>
      <label class="form-group" v-for="(element) in [...Array(10).keys()]">
        Causa {{ element + 1 }}:
        <input type="text" :value="elements[element + 1].label"
               @input="elements[element + 1].label = $event.target.value">
      </label>
    </div>
    <VueFlow v-model="elements"
             class="h-96"
             :default-edge-options="{ type: 'smoothstep' }"
             :default-viewport="{ zoom: 1.5 }"
             :min-zoom="0.2"
             :max-zoom="4"
             fit-view-on-init>
      <Controls/>
    </VueFlow>
  </section>
</template>