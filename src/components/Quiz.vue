<script setup>
import {onMounted, ref} from "vue";
import questionsJSON from "@/assets/questions.json";

const showWarning = ref(true);
const isQuizStarted = ref(false);
const isQuizEnded = ref(false);
const questionsList = ref([]);
const currentQuestionIndex = ref(0);

const correctAnswersCount = ref(0);

onMounted(() => {
  loadQuestions();
})

const loadQuestions = () => {
  questionsList.value = JSON.parse(JSON.stringify(questionsJSON));
}
const nextQuestion = () => {
  if (currentQuestionIndex.value < questionsList.value.length - 1) {
    currentQuestionIndex.value++;
  }

}

const finish = () => {
  isQuizEnded.value = true;
  isQuizStarted.value = false;
}

const start = () => {
  loadQuestions();
  showWarning.value = true;
  isQuizEnded.value = false;
  isQuizStarted.value = false;
  currentQuestionIndex.value = 0;
  correctAnswersCount.value = 0;
}

const selectOption = (option, questionId, optionIndex) => {
  if (option.isCorrect) {
    correctAnswersCount.value++;
  }
  questionsList.value[questionId].options[optionIndex].isSelected = true;

}

const isOptionSelected = (options) => {
  const selectionCount = options.filter(m => m.isSelected === true).length;
  return selectionCount !== 0;
}
const startQuiz = () => {
  showWarning.value = false;
  isQuizStarted.value = true;
}
</script>

<template>
  <div class="card p-8 mb-4" :class="showWarning ? 'block' : 'hidden'">
    <div class="text-4xl font-semibold mb-4 animate-fade-up">Evaluación</div>
    <p class="mb-2 text-lg text-on-surface-variant ">
      Evalua los conocimientos adquiridos en forma de preguntas de opción multiple donde elijas las que mejor se asimile
      a tus conocimientos.
    </p>
    <button class="btn btn-primary mr-4 animate-fade-up" @click="startQuiz()">Iniciar Evaluación</button>
  </div>

  <div class="card p-8 mb-4" :class="isQuizStarted? 'block':'hidden'">
    <header>
      <div class="text-3xl font-semibold">Evaluando tu conocimiento</div>
    </header>
    <section v-if="isQuizStarted">
      <p class="text-xl font-medium text-on-surface-variant mb-4">
        {{ currentQuestionIndex + 1 }}. {{ questionsList[currentQuestionIndex].question }}
      </p>
      <ul class="space-y-2 my-2">
        <li class="" v-for="(option,index) in questionsList[currentQuestionIndex].options">
          <button class="text-lg font-medium border-outline border rounded-lg p-4 w-full text-left"
                  @click="selectOption(option, currentQuestionIndex, index)" :class="{
            'bg-success-container':option.isSelected && option.isCorrect,
            'bg-error-container':option.isSelected  && !option.isCorrect}">{{ option.answer }}
          </button>
        </li>
      </ul>
    </section>

    <footer class="border-outline border-t my-4 py-4">
      <p class="text-lg font-medium text-on-surface-variant mb-4">
        <span>{{ currentQuestionIndex + 1 }}</span> of <span>{{ questionsList.length }}</span> Questions
      </p>
      <button v-if="currentQuestionIndex+1 === questionsList.length" class="btn btn-primary" @click="finish()">
        Finalizar
      </button>
      <button
          v-if="currentQuestionIndex +1 !== questionsList.length"
          class="btn btn-primary" @click="nextQuestion()">
        Siguiente
      </button>
    </footer>
  </div>


  <div class="card p-8" :class="isQuizEnded ? 'block':'hidden'">
    <div class="text-5xl text-yellow-400 mb-4">
      <i class="fas fa-crown"></i>
    </div>
    <div class="text-4xl font-medium mb-2 animate-fade-up">¡Has completado la evaluación!</div>
    <p class="text-2xl mb-4 animate-fade-up">
      Obtuviste <span class="font-semibold text-primary">{{ correctAnswersCount }}</span> de <span
        class="font-semibold text-primary">{{ questionsList.length }}</span>
    </p>
    <button class="btn btn-primary animate-fade-up" @click="start()">Reinicar prueba</button>
  </div>
</template>

