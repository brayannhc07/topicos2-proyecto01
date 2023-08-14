<template>
  <section class="bg-surface">
    <div class="app-container py-8 text-center lg:py-16">
      <a href="#"
         class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm bg-surface-container text-on-surface-container rounded-full hover:bg-highlight"
         role="alert">
        <span class="text-xs bg-primary-container rounded-full text-on-primary-container px-4 py-1.5 mr-3">New</span>
        <span class="text-sm font-medium">Flowbite is out! See what's new</span>
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
        We invest in the world’s potential
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite
        we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic
        growth.</p>
      <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <RouterLink to="/introduction"
           class="btn btn-primary">
          Entrar
          <i class="fa-solid fa-arrow-right ml-2 -mr-1"></i>
        </RouterLink>
      </div>
      <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <span class="font-semibold text-gray-400 uppercase">JPN.MX</span>
        <div class="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">

        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>