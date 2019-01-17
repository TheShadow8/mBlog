<template>
  <div class="blog-container">
    <!-- <Alert v-if="alert" v-bind:message="alert"/> -->
    <Header title="Add Blog"></Header>
    <div class="form-container">
      <form class="form" v-on:submit="addBlog">
        <input type="date" placeholder="Date" v-model="blog.date">
        
        <input type="text" placeholder="Title" v-model="blog.title">
        
        <textarea
          class="form-control"
          rows="8"
          v-model="blog.detail"
          placeholder="How about you day ? :)"
        ></textarea>
        
        <button type="submit" class="btn btn-post">Post</button>
      </form>
    </div>
    <Hero></Hero>
  </div>
</template>

<script>
import Alert from "./Alert";
// import Images from "./Images";
import Header from "./Header";
import Hero from "./Hero";
export default {
  name: "add",
  data() {
    return {
      blog: {},
      alert: ""
    };
  },
  methods: {
    getToday() {
      let y = new Date().getFullYear();
      let m = new Date().getMonth() + 1;
      let d = new Date().getDate();

      if (m < 10 && d < 10) {
        this.blog.date = y + "-0" + m + "-0" + d;
      } else if (d < 10) {
        this.blog.date = y + "-" + m + "-0" + d;
      } else if (m < 10) {
        this.blog.date = y + "-0" + m + "-" + d;
      } else {
        this.blog.date = y + "-" + m + "-" + d;
      }
    },
    addBlog(e) {
      if (!this.blog.date || !this.blog.title || !this.blog.detail) {
        this.alert = "Please fill in all required fields";
      } else {
        let newblog = {
          date: this.blog.date,
          title: this.blog.title,
          detail: this.blog.detail
        };
        this.$http
          .post("https://mblog-416e6.firebaseio.com/data.json", newblog)
          .then(function(response) {
            this.$router.push({
              path: "/",
              query: {
                alert: "Blog Posted"
              }
            });
          });
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created: function() {
    this.getToday();
    console.log("aaaa", this.$router);
  },
  components: {
    Alert,
    Header,
    Hero
  }
};
</script>


<style>
</style>
