<template>
  <div class="blog-container">
    <Header title="About"></Header>
    <div class="about">
      <div>Just a blog - simple and lovely :)</div>
      <div class="line">
        <small class="small">by</small> Minh Do
      </div>
    </div>
    <Hero></Hero>
  </div>
</template>

<script>
import Alert from "./Alert";
import Header from "./Header";
import Hero from "./Hero";

export default {
  name: "about",

  components: {
    Header,
    Hero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.about {
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.line {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}
.small {
  padding: 0 1rem;
}
.line::before {
  content: "";
  display: table;
  height: 1px;
  width: 18rem;
  background: #9da3af;
}
</style>
