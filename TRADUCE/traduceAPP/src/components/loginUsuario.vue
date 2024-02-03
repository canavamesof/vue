<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title" v-if="titulo">{{ titulo }}</h5>
      <p class="card-text" v-if="parrafo">{{ parrafo }}</p>
      <slot></slot>
      <div class="d-grid">
        <button v-for="butom in butomsConfig" :class="butom.clases" @click="butom.metodo">
          {{ butom.texto }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: false,
  },
  parrafo: {
    type: String,
    required: false,
  },
  butomsConfig: {
    type: Object,
    required: true,
  },
});
</script>

