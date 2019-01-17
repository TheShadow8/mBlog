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

a {
  text-decoration: none;
  color: #232440;
}

body {
  height: 100vh;
  min-height: 94rem;
  box-sizing: border-box;
  padding: 3rem;
  font-family: "Times New Roman";
  background: linear-gradient(#dee2eb 0%, #adbee4 100%);
  background-repeat: no-repeat;
  font-size: 25px;
  color: #232440;
}

#app {
  height: 93vh;
  min-height: 88rem;
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
  min-height: 69rem;
  display: grid;
  justify-content: center;
}

.blog-container {
  height: 73vh;
  min-height: 69rem;
  width: 89vw;

  background: #fff;
  transform: translateY(-5.3rem);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 60% 20%;
}

/* For Form  */
.form-container {
  height: 100%;
  display: flex;
  justify-content: center;
  grid-row: 2/-1;
}
.form {
  height: 95%;
  width: 85%;
  display: flex;

  flex-direction: column;
  font-family: "Times New Roman";
}

.form > * {
  margin: 0 0 2rem;
  padding: 1rem 0;
  font-family: "Times New Roman";
  font-size: 2.5rem;
}

.btn-post {
  height: 6rem;
  width: 18rem;
  outline: none;
  border: none;
  margin-top: 4rem;
  color: #f0f1f5;
  text-align: center;
}

/* Media query */
@media only screen and (max-width: 75em) {
  html {
    font-size: 50%;
  }
}
</style>
