<template>
  <!--  <nav class="navbar navbar-dark bg-primary">-->
  <!-- Navbar content -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in nav" :key="index">
            <router-link :to="item.path" class="nav-link active" aria-current="page">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--  </nav>-->
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        nav: [
          {
            path: '/home',
            name: 'Home'
          },
          {
            path: '/about',
            name: 'About'
          }
        ]
      }
    }
  }
</script>

<style scoped></style>
