<template>
  <nav class="navbar">
    <div class="nav-left">
      <router-link to="/">
        <img class="logo" :src="'/static/images/favicon.png'">
      </router-link>

      <div class="nav-item mr-2">
        <router-link to="/">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <div class="nav-right">
      <router-link class="btn btn-primary" to="/add">Add</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbar {
  border-radius: 5px 5px 0px 0px;
  background: #232440;
  border: 1px solid #707070;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  text-align: center;
  color: #f0f1f5;
}

.nav-left {
  display: flex;
  align-items: center;
}

.nav-left > * {
  margin-right: 1rem;
}

.logo {
  height: 10rem;
  width: 10rem;
  margin-left: 2rem;
}

.nav-right {
  background-color: #3770fc;
  padding: 1rem 5rem;
  border-radius: 50px;
  margin-right: 5.8rem;
  margin-top: 3rem;
}
</style>
