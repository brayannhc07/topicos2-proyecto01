<template>
  <section class="bg-surface h-screen">
    <div class="app-container py-8 text-center lg:py-16">
      <h1 class="animate-fade-up my-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        Brayan Hernández Cortés
      </h1>
      <img src="@/assets/logo-no-background.svg" class="animate-fade-up max-h-16 my-8 block mx-auto" alt="">
      <div class="animate-fade-up flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <RouterLink to="/introduction"
           class="btn btn-primary">
          Entrar
          <i class="fa-solid fa-arrow-right ml-2 -mr-1"></i>
        </RouterLink>
      </div>
      <div class="animate-fade-up px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span class="font-semibold text-gray-400 uppercase">JPN.MX</span>
        <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">

        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>