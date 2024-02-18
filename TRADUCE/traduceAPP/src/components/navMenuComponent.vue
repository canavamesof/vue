<template>
  <nav v-if="esLoginCurrenUser" class="navbar navbar-expand-lg bg-primary">
    <div class="container justify-content-evenly">
      <RouterLink class="nav-link active" aria-current="page" to="/"
        ><span class="material-icons-round"> home </span></RouterLink
      >

      <RouterLink class="nav-link" to="/about"
        ><span class="material-icons-round"> info </span></RouterLink
      >
      <RouterLink class="nav-link" to="/translate"
        ><span class="material-icons-round">translate</span></RouterLink
      >
    </div>
    <div class="d-flex">
      <label>{{ nameCurrenUser }}</label>
      <button class="btn" @click="logout">
        <span class="material-icons-round"> logout </span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import localStorage from "../services/localStorage";
import keys from "../share/keys";

const esLoginCurrenUser = ref(false);
const nameCurrenUser = ref("");

const logout = () => {
  localStorage.removeItem(keys.keysLocalStorage.esLogin);
  localStorage.removeItem(keys.keysLocalStorage.nameCurrenUser);

  location.href = "/";
};

onMounted(() => {
  let esLoginLocalStorage = localStorage.getItem(keys.keysLocalStorage.esLogin);
  let nameCurrenUserLocalStore = localStorage.getItem(
    keys.keysLocalStorage.nameCurrenUser
  );

  if (
    nameCurrenUserLocalStore !== undefined &&
    nameCurrenUserLocalStore !== null &&
    nameCurrenUserLocalStore !== "" &&
    esLoginLocalStorage === "true"
  ) {
    nameCurrenUser.value = nameCurrenUserLocalStore;
    esLoginCurrenUser.value = true;
  }
});
</script>

<style scoped>
.material-icons-round{
    color: white;
    font-size: 1.5em;
    background-color: rgb(52,72,94);
    padding: 0.3em;
    border-radius: 50%;
    margin: 0.1em;
}
</style>

