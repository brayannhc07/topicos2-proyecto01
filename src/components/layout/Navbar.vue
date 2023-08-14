<template>

  <nav class="bg-surface border-b border-outline">
    <div class="flex flex-wrap justify-between items-center app-container p-4">
      <RouterLink to="/" class="flex items-center">
        <img src="@/assets/logo-no-background.svg" class="h-8 mr-3" alt="Nitlygo Logo"/>
      </RouterLink>
      <div class="flex items-center"></div>
    </div>
  </nav>
  <nav class="bg-surface-container">
    <div class="app-container py-3">
      <div class="flex items-center">
        <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
          <li>
            <RouterLink to="/" class="hover:underline" active-class="text-primary">Inicio</RouterLink>
          </li>
          <li>
            <RouterLink to="/introduction" class="hover:underline" active-class="text-primary">Introducción</RouterLink>
          </li>
          <li>
            <RouterLink to="/activity" class="hover:underline" active-class="text-primary">Dinámica</RouterLink>
          </li>
          <li>
            <RouterLink to="/evaluation" class="hover:underline" active-class="text-primary">Evaluación</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:underline" active-class="text-primary">Autoría</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {RouterLink} from "vue-router";
</script>