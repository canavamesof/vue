<template>
    <div class="contenedor">
        <div class="mainContainer">
            <div class="d-flex justify-content-center ">
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
                <textarea v-model="text" placeholder="Traducir">
            </v-model></textarea>
            </div>
            <div class="d-flex justify-content-center">
                <textarea v-model="translatedText" placeholder="Texto traducido">
            </v-model></textarea>
            </div>
            <div class="d-flex justify-content-center">
                <button @change="detectarIdioma">idioma detectado</button>
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
