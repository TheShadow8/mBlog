<template>
  <nav class="navbar" :key="this.$route.fullPath">
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

    <router-link v-if="isHome()" to="/add">
      <div class="nav-add">Add</div>
    </router-link>
    <router-link v-else to="/">
      <div class="nav-back">Back</div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    isHome() {
      console.log("isNotInConfig path:", this.$router.history.current["path"]);
      return (
        this.$router.history.current["path"] === "/" ||
        this.$router.history.current["path"] === "/about"
      );
    }
  },
  created() {
    console.log(this.$router);
  }
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

.nav-add,
.btn {
  background-color: #3770fc;
  padding: 1rem 6rem;
  border-radius: 50px;
  margin-right: 5rem;
  margin-top: 4.2rem;
  cursor: pointer;
}

.nav-add:hover {
  background-color: #9da3af;
  color: #f0f1f5;
}
.router-link-exact-active {
  color: #3770fc !important;
}

.nav-back {
  color: #9da3af;
  margin-right: 7rem;
  margin-top: 5rem;
}
.nav-back:hover {
  color: #3770fc;
}
</style>
