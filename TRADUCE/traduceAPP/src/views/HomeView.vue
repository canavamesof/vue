<template>
  <div class="home">
    <div v-if="!esLoginCurrenUser" class="row">
      <div class="col-lg-6">
        <div class="img-container">
          <div class="d-flex">
            <img src="../assets/logo app.png" alt="Logo Vue" height="350px" />
          </div>
          <div>
            <h2>
              La mejor web de traducción
            </h2>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <loginUsuario class="loginUsuario" :butoms-config="butomsConfig">
          <template #default>
            <div v-if="isLoginFailed" class="alert alert-danger" role="alert">
              Usuario o contraseña incorrecta
            </div>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Correo</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingrese su correo"
                  v-model="email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Contraseña</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Ingrese su contraseña"
                  v-model="password"
                  autocomplete="on"
                />
              </div>
            </form>
          </template>
        </loginUsuario>
      </div>
    </div>
  </div>
</template>

<script setup>
import loginUsuario from "@/components/loginUsuario.vue";
import { onMounted, ref } from "vue";
import userServices from "../services/userServices";
import localStorage from "../services/localStorage";
import keys from "../share/keys";

const email = ref("");
const password = ref("");
const esLoginCurrenUser = ref(false);
const nameCurrenUser = ref("");
const isLoginFailed = ref(false);

const getLogin = async () => {
  const response = await userServices.getLogin(email.value, password.value);

  if (response !== null && response != undefined) {
    esLoginCurrenUser.value = response.esLogin;
    nameCurrenUser.value = response.fullname;

    localStorage.setItem(
      keys.keysLocalStorage.esLogin,
      esLoginCurrenUser.value
    );
    localStorage.setItem(
      keys.keysLocalStorage.nameCurrenUser,
      nameCurrenUser.value
    );

    location.href = "/";
  }else{
    isLoginFailed.value = true;
  }
};

let butomsConfig = [
  {
    texto: "Iniciar Sesión",
    clases: "btn btn-primary mb-2",
    metodo: getLogin,
  },
  {
    texto: "Olvido su contraseña?",
    clases: "btn  mb-2",
  },
];

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
img {
  margin: 1em auto 0 auto;
}

.home {
  max-width: 895px;
  margin: auto;
  padding-top: 150px;
}

@media screen and (max-width: 992px) {
  .home {
    max-width: 895px;
    margin: auto;
    padding-top: 20px;
  }
}

.img-container {
  display: flex;
  flex-direction: column;
}

.loginUsuario {
  max-width: 550px;
  margin-top: 4em;
}
</style>
