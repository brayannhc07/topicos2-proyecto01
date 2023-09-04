<script setup>
import ResultsPareto from "@/components/ResultsPareto.vue";
import ResultsDiagram from "@/components/ResultsDiagram.vue";
import ResultsCatwda from "@/components/ResultsCatwda.vue";
import ResultsFODA from "@/components/ResultsFODA.vue";
import ResultsHats from "@/components/ResultsHats.vue";
</script>
<template>
  <main class="app-container flex flex-col space-y-8 py-12">
    <ResultsDiagram/>
    <ResultsPareto/>
    <ResultsCatwda/>
    <ResultsFODA/>
    <ResultsHats/>

    <RouterLink class="btn btn-primary " to="/about">Autoría</RouterLink>
  </main>
</template>
<style>

</style>