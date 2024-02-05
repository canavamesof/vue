<template>
    <div>
      <div>Languege source: {{ source }}</div>
      <select v-model="source">
        <option v-for="mylanguages in languages">
          {{ mylanguages.language }}
        </option>
      </select>
    </div>
  </template>
  
  <script setup>
  import googleTranslateService from "@/services/googleTranslateService";
  
  import { onMounted, ref } from "vue";
  const languages = ref([]);
  const source = ref("");
  const obtenerIdiomas = async () => {
    const response = await googleTranslateService.obtenerIdiomas();
    languages.value = response.data.data.languages;
    console.log(response);
  };
  
  onMounted(() => {
    //para hacer pruebas quitar comentario 
   // obtenerIdiomas();    
  });
  </script>
  

<style>

</style>
