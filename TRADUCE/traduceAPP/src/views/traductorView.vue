<template>
  <div class="contenedor">
    <div class="mainContainer">
      <div class="d-flex justify-content-center">
        <div>Languege source: {{ source }}</div>
        <div>
          <select v-model="source">
            <option v-for="mylanguages in languages">
              {{ mylanguages.language }}
            </option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div>Language target: {{ target }}</div>
        <div>
          <select v-model="target">
            <option v-for="mylanguages in languages">
              {{ mylanguages.language }}
            </option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <textarea v-model="text" @change="detectLanguages()" placeholder="Traducir">
            </v-model></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <textarea v-model="TextTranslate" placeholder="Texto traducido">
            </v-model></textarea>
      </div>
      <div class="d-flex justify-content-center">
        <button @change="">
          {{ myDetectarLenguage === "" ? "Detectar" : myDetectarLenguage }}
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <button @click="traducirIdiomas">traducir</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import googleServices from "@/services/googleServices";

const source = ref("");
const target = ref("");
const languages = ref([]);
const text = ref("");
const TextTranslate = ref("");
const miDetectarLenguage = ref("");




onMounted(() => {
  //obtenerIdiomas();
});
</script>
