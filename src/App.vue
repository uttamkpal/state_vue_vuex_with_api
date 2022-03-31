<script>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
.container {
  width: 75%;
  margin: 0 auto;
}

a {
  color: white;
  text-decoration: none;
}
</style>
