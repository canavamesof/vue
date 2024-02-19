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
        <textarea @change="detectLanguages()" v-model="text" placeholder="Traducir"></textarea>
        <button @click="mountLanguageDetect()">{{ myDetectionLanguage === "" ? "Detectar" : myDetectionLanguage }}</button>
        
      </div>
      <div class="d-flex justify-content-center">
        <textarea v-model="TextTranslate" placeholder="Texto traducido"></textarea>
         <button @click="translate">traducir</button>
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
const myDetectionLanguage = ref("");

const mountLanguageDetect = () =>{
  source.value = myDetectionLanguage.value;
};

const getLanguages = async () =>{
  const response = await googleServices.getLanguages();
  languages.value = response.data.data.languages;
};

const detectLanguages = async () =>{
  const response = await googleServices.detectLanguages(text.value);

  let detection = response.data.data.detection[0];
  myDetectionLanguage.value = detection[0].language;

  translate();

}

const translate = async () =>{
  if (text.value !== "" && target.value !== "" && source.value !== "") {
    const response = await googleServices.translate(
      text.value,
      target.value,
      source.value
    );
    let translation = response.data.data.translations;
    console.log(translation[0].translatedText);
    TextTranslate.value = translation[0].translatedText;
  }
}


onMounted(() => {
 getLanguages();
});
</script>
