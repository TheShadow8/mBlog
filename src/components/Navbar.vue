<template>
  <nav class="navbar" :key="this.$route.fullPath">
    <div class="nav-left">
      <router-link to="/" id="logo">
        <img class="logo" :src="'/static/images/favicon.png'">
      </router-link>

      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <router-link v-if="isHome()" to="/add">
      <div class="nav-add-symbol" id="nav-add-symbol">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 40 40">
          <path
            id="Path_25"
            data-name="Path 25"
            d="M50,32.857H32.857V50H27.143V32.857H10V27.143H27.143V10h5.714V27.143H50Z"
            transform="translate(-10 -10)"
            fill="#f0f1f5"
          ></path>
        </svg>
      </div>
    </router-link>

    <router-link id="nav-add" v-if="isHome()" to="/add">
      <div class="nav-add">Add</div>
    </router-link>
    <router-link v-else to="/">
      <div class="nav-back" id="nav-back">Back</div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    isHome() {
      return (
        this.$router.history.current["path"] === "/" ||
        this.$router.history.current["path"] === "/about"
      );
    }
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
.nav-add-symbol {
  display: none;
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
