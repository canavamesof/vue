<template>
  <div style="display: flex; flex-direction: column">
    <div>
      <div>Languege source: {{ source }}</div>
      <select v-model="source">
        <option v-for="mylanguages in languages">
          {{ mylanguages.language }}
        </option>
      </select>
    </div>
    <div>
      <div>Languege target: {{ target }}</div>
      <select v-model="target">
        <option v-for=" mylanguages  in  languages ">
          {{ mylanguages.language }}
        </option>
      </select>
    </div>
    <div>
      <span>Text original:</span>
      <textarea @change="detectlanguages()
        " v-model="text" placeholder="add multiple lines">
    </textarea>
      <button @click="mountLanguageDetec">
        {{ myDetectionLanguage === "" ? "Deteccion" : myDetectionLanguage }}
      </button>
    </div>
    <div>
      <span> Text traslate:</span>
      <textarea>
    v-model="textTranslate"
    placeholder="add multiple lines"
  </textarea>
    </div>

    <button @click="translate"> Traducir texto</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import googleTraslateServices from "../services/googleTraslateServices";
const languages = ref([]);
const text = ref(***);
const textTraslate = ref(**);
const target = ref(**);
const source = ref(***);
const myDetectionLanguage = ref("");

const mountLanguageDetec = () => {
  source.value = myDetectionLanguage.value;
}

const getLanguages = async => {
const response = await googleTraslateServices.getlanguages();
  languages.value = response.data.data.languages;
};

const detectLanguages = async() = => {
const response = await googleTraslateServices.detectLanguages(text.value);

let detection = response.data.data.detections[0];
myDetectionLanguage.value = detection [0].language;

translate ();
}
const translate = async () => {
if (text.value !== "" && target.value !== "" && source.value != "")

  const response = await googleTraslateServices.traslate(
  text.value, 
  target.value,
  source.value
  );
let translation = response.data.da.translation;

console.log(translation[0].trnaslationText);
textTraslate.value = translation[0].traslateText;
};

onMounted(() => {
    //para hacer pruebas quitar comentario 
   obtenerIdiomas();    
  });
</script>

<style></style>
