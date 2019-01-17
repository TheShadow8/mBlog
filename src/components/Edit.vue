<template>
  <div class="blog-container">
    <Alert v-if="alert" v-bind:message="alert"/>
    <Header title="Edit Blog"></Header>
    <div class="form-container">
      <form class="form" v-on:submit="update">
        <input type="date" placeholder="Date" v-model="blog.date">
        
        <input type="text" placeholder="Title" v-model="blog.title">
        
        <textarea class="form-control" rows="8" v-model="blog.detail"></textarea>
        
        <button type="submit" class="btn btn-post">Save</button>
      </form>
    </div>
    <Hero></Hero>
  </div>
</template>

<script>
import Alert from "./Alert";
import Header from "./Header";
import Hero from "./Hero";

export default {
  name: "edit",
  data() {
    return {
      id: this.$route.params.id,
      blog: "",
      alert: ""
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
    update(e) {
      if (!this.blog.date || !this.blog.title || !this.blog.detail) {
        this.alert = "Please fill in all required fields";
      } else {
        let updBlog = {
          date: this.blog.date,
          title: this.blog.title,
          detail: this.blog.detail
        };
        this.$http
          .put(
            "https://mblog-416e6.firebaseio.com/data/" + this.id + ".json",
            updBlog
          )
          .then(function(response) {
            this.$router.push({
              path: "/",
              query: {
                alert: "Blog Updated"
              }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function() {
    this.fetchblog();
  },
  components: {
    Alert,
    Header,
    Hero
  }
};
</script>

<!-- Edit "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
