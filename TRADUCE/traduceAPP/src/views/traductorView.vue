<template>
    <div class="mainContainer">
        <div class="">
            <div>Languege source: {{ source }}</div>
            <select v-model="source">
                <option v-for="mylanguages in languages">
                    {{ mylanguages.language }}
                </option>
            </select>
        </div>
        <div>
            <div>Language target: {{ target }}</div>
            <select v-model="target">
                <option v-for="mylanguages in languages">
                    {{ mylanguages.language }}
                </option>
            </select>
        </div>
        <div>
            <textarea v-model="text" placeholder="Traducir">
            </v-model></textarea>
        </div>
        <div>
            <textarea v-model="translatedText" placeholder="Texto traducido">
            </v-model></textarea>
        </div>
        <div>
            <button @change="detectarIdioma">idioma detectado</button>
        </div>
        <div>
            <button @click="traducirIdiomas">traducir</button>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import googleServices from "@/services/googleServices";

const source = ref("es");
const target = ref("en");
const languages = ref([]);
const text = ref("");
const translatedText = ref("");

const obtenerIdiomas = async () => {
    const response = await googleServices.obtenerIdiomas();
    console.log(response);
    languages.value = response.data.data.languages;
};

const traducirIdiomas = async () => {
    const response = await googleServices.traducirIdiomas(
        text.value,
        target.value,
        source.value
    );
    let translation = response.data.data.translations;

    console.log(translation[0].translatedText);

    translatedText.value = translation[0].translatedText;
};
const detectarIdioma = async (texto) => {
    const response = await googleServices.detectarIdioma(text.value);
    let detectarIdioma = response.data.data.translations;
    console.log(translation[0].detectarIdiomaText);

    detectarIdioma.value = translation[0].detectarIdioma;
};
onMounted(() => {
    //obtenerIdiomas();
});
</script>
