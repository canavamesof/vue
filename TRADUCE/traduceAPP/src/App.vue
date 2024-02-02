<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navMenuComponent from './components/navMenuComponent.vue'
// import axios from 'axios';
 
// const encodedParams = new URLSearchParams();
// encodedParams.set('q', 'Hello, world!');
// encodedParams.set('target', 'es');
// encodedParams.set('source', 'en');

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': 'd0d50816bamshad8f033304be837p129613jsn923528bc384d',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);}

</script>

<template>

  <navMenuComponent/>
  <RouterView />

</template>

