<template>
<div class="card" style="width: 25rem;">
  <div class="card-body">
    <h5 class="card-title" v-if="titulo">{{titulo}}</h5>
    <p class="card-text" v-if="parrafo">{{parrafo}}</p>
    <!-- enviar de html a vue /slot/ -->
    <slot></slot>
    <div class="d-grid">
      <button v-for="button in buttonsConfig"> {{ button.texto }}</button>
    </div>

  </div>
</div>

</template>

<!-- //esto son los props  (pasar parametros del padre al hijo)-->

<script setup>
defineProps({
    titulo: {
        type: String,
        required: false,
    },
    parrafo:{
        type: String,
        required: false,
    },
    buttonsConfig: {
      type: Object,
      required: true
    },
});

</script>