<template>
<div class="card" style="width: 25rem;">
  <div class="card-body">
    <h5 class="card-title" v-if="titulo">{{titulo}}</h5>
    <p class="card-text" v-if="parrafo">{{parrafo}}</p>
    <!-- enviar de html a vue /slot/ -->
    <slot></slot>
    <a href="#" class="btn btn-info">Registrese acá</a>

  </div>
</div>

</template>

<!-- //esto son los props  -->

<script setup>
defineProps({
    titulo: {
        type: String,
        required: false
    },
    parrafo:{
        type: String,
        required: false
    }
});

</script>