<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  }
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  /* This defines what 1rem is 1 rem = 10px; 10px/16px = 62.5% */
  font-size: 62.5%;
}

body {
  height: 100vh;
  box-sizing: border-box;
  padding: 3rem;
  font-family: "Times New Roman";
  background: linear-gradient(#dee2eb 0%, #adbee4 100%);
  background-repeat: no-repeat;
  font-size: 25px;
  color: #9da3af;
}

#app {
  height: 93vh;
  width: 95vw;
  margin: 0 auto;
  border-radius: 5px;
  background: #f0f1f5;
  box-shadow: 20px 20px 6px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-rows: 22% auto;
  justify-content: center;
}
.container {
  width: 95vw;
  display: grid;
  justify-content: center;
}

.blog-container {
  height: 73vh;
  width: 89vw;

  background: #fff;
  transform: translateY(-5.3rem);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 60% 20%;
}
</style>
