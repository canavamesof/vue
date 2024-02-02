<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-container"></div>
        <div class="d-flex"></div>
        <img src="../assets/logo app.png" alt="logo de traduce app"  height="350px" />
      </div>

      <div class="col-lg-6">
        <!-- // solo aca cambiar el titulo, es un props  -->

        <loginUsuario class="card-component"/>

          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder= "Ingrese su correo">
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder= "Ingrese su contraseña">
            </div>
            <button type="submit" class="btn btn-info">Ingresar</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import loginUsuario from '@/components/loginUsuario.vue';

</script>

<style scoped>
  img {
    margin : 1 em auto 0 auto;
  }
.home{
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
.img-container{
  display: flex;
  flex-direction: column;
}
.card-component{
  max-width: 550px;
  margin-top: 4em;

}
</style>