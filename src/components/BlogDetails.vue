<template>
  <div class="details container">
    <router-link to="/">Back</router-link>
    <h1 class="page-header mt-5">{{blog.date}}
      <span class="float-right">
        <router-link class="btn btn-primary" v-bind:to="'/edit/'+this.id">Edit</router-link>
        <button class="btn btn-danger" v-on:click="deleteblog(blog.id)">Delete</button>
      </span>
    </h1>
    <h3 class="text-sm-center">{{blog.title}}</h3>
    <div class="well mt-5">
      <p class="text-justify text-sm-center"> {{blog.detail}} </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'blogdetails',
    data() {
      return {
        id: this.$route.params.id,
        blog: ''
      }
    },
    methods: {
      fetchblog() {
        this.$http.get('https://mblog-416e6.firebaseio.com/data/' + this.id + '.json')
          .then(function (response) {
            this.blog = response.body;
          });
      },
      deleteblog() {
        this.$http.delete('https://mblog-416e6.firebaseio.com/data/' + this.id + '.json')
          .then(function (response) {
            this.$router.push({
              path: '/',
              query: {
                alert: 'Blog Deleted'
              }
            });
          });
      }
    },
    created: function () {
      this.fetchblog();
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
