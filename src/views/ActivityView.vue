<template>
  <header class="app-container">
    <h1 class="text-4xl font-semibold my-8 animate-fade-up">Dinámica</h1>
  </header>
  <main class="app-container">
    <p class="text-lg text-on-surface-variant">
      Realiza un decálogo que comprenda 10 cosas relevantes de lo aprendido en el contenido presentado anteriormente.
    </p>

    <form v-on:submit.prevent="enviar">
      <div class="py-6 grid grid-cols-2 gap-4">
        <label class="form-group">
          <span>Decálogo - Punto 1</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 2</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 3</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 4</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 5</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 6</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 7</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 8</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 9</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>

        <label class="form-group">
          <span>Decálogo - Punto 10</span>
          <input
              type="text"
              required
              placeholder="Un punto importante que presente una idea"
          />
        </label>
      </div>
      <label class="form-group my-4">
        <span>Conclusión y comentarios</span>
        <textarea
            name="conclusion"
            rows="5"
            placeholder="Una pequeña conclusión sobre el tema visto anteriormente"></textarea>
      </label>
      <p v-if="error" class="block bg-error-container text-on-error-container p-4 rounded-xl border-on-error-container ">Debes
        completar todos los campos.</p>

      <button type="submit" class="btn btn-primary my-4 animate-fade-up">Enviar</button>
    </form>
  </main>
</template>
<script setup>
import {ref} from "vue";
import router from "@/router";

const error = ref(false);
const enviar = (e) => {
  e.preventDefault();
  error.value = true;
  router.push("/evaluation");

}
</script>