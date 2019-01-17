<template>
  <div class="blog-container">
    <!-- <router-link to="/">Back</router-link> -->
    <Header :title="blog.title" :date="blog.date"></Header>
    <div class="blog-detail-container">
      <div class="blog-detail">
        <p>{{blog.detail}}</p>
      </div>
    </div>
    <Hero></Hero>
  </div>
</template>



<script>
import Header from "./Header";
import Hero from "./Hero";

export default {
  name: "blogdetails",
  data() {
    return {
      id: this.$route.params.id,
      blog: ""
    };
  },
  methods: {
    fetchblog() {
      this.$http
        .get("https://mblog-416e6.firebaseio.com/data/" + this.id + ".json")
        .then(function(response) {
          this.blog = response.body;
        });
    },
    deleteblog() {
      this.$http
        .delete("https://mblog-416e6.firebaseio.com/data/" + this.id + ".json")
        .then(function(response) {
          this.$router.push({
            path: "/",
            query: {
              alert: "Blog Deleted"
            }
          });
        });
    }
  },
  created: function() {
    this.fetchblog();
  },
  components: {
    Header,
    Hero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.blog-detail-container {
  display: flex;
  justify-content: center;
  grid-row: 2/-1;
}
.blog-detail {
  width: 88%;
  height: 90%;
  border: solid 1px #dee2eb;
  border-radius: 5px;
  padding-left: 2rem;
  padding-top: 1rem;
}
</style>
