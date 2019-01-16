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

    <router-link class="btn btn-primary" to="/add">
      <div class="nav-right">Add</div>
    </router-link>
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
.navbar a {
  color: #f0f1f5;
  text-decoration: none;
}

.navbar a:hover {
  color: #9da3af;
}

.nav-left {
  display: flex;
}

.nav-left > * {
  margin-right: 2rem;
}

.nav-left div {
  margin-top: 5rem;
}

.logo {
  height: 12rem;
  width: 12rem;
  margin-left: 3.3rem;
}

.nav-right {
  background-color: #3770fc;
  padding: 1rem 6rem;
  border-radius: 50px;
  margin-right: 5rem;
  margin-top: 4.2rem;
  cursor: pointer;
}

.nav-right:hover {
  background-color: #9da3af;
  color: #f0f1f5;
}
</style>
