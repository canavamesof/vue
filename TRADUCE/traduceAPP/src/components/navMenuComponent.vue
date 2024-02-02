<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container justify-content-evenly">
      <RouterLink class="nav-link active" to="home"><span class="material-icons-round">
      home</span></RouterLink>

      <RouterLink class="nav-link" to="about"><span class="material-icons-round">
    info</span></RouterLink>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
      </form>

    </div>
  </nav>
</template>

<style scoped>
.material-icons-round {
color : white;
font-size: 1.5rem;
background-color: rgb(151, 160, 170);
padding: 0.3em;
border-radius: 50%;
margin: 0.1rem;

}

</style>