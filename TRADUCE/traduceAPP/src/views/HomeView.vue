<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-container">
          <div class="d-flex">
            <img src="../assets/logo app.png" alt="Logo traduceAPP" height="350px" />
          </div>
          <div>
            <h2>
              El mejor traductor
            </h2>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <loginUsuario class="loginUsuario" :butoms-config="butomsConfig">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese su correo"
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
              />
            </div>
          </form>
        </loginUsuario>
      </div>
    </div>
  </div>
</template>

<script setup>
import loginUsuario from "@/components/loginUsuario.vue";
import { onMounted } from "vue";
// import postServices from "../services/postServices";

// const imprimirConsola = () => {
//   console.log("Hola mundo");
// };

// const getDataPost = async () => {
//   const response = await postServices.getDataPost();

//   console.log("Se llamo al api");
//   console.log(response);
//   console.log(response.data);
// };

// const postDataPost = async () => {
//   // let newpost = {
//   //   id: "3",
//   //   title: "He creado este registro utilizando axios, desde una vista de Vusjs",
//   // };
//   const response = await postServices.getDataPost();

//   console.log(response);
// };

// const putDataPost = async () => {
//   // let updatepost = {
//   //   id: "3",
//   //   title:
//   //     "He actualizado este registro utilizando axios, desde una vista de Vuejs",
//   // };

//   const response = await postServices.putDataPost();

//   console.log(response);
// };

// const login = () => {
//   console.log("Hola desde login padre");
// };

let butomsConfig = [
  {
    texto: "Iniciar Sesión",
    clases: "btn btn-info mb-2",
    metodo: login,
  },
  {
    texto: "Olvido su contraseña?",
    clases: "btn  mb-2",
  },
];

// onMounted(() => {
//   getDataPost();
//   //imprimirConsola();
//   //postDataPost();
//   //putDataPost()
// });
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
