<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit Blog</h1>
    <form v-on:submit="update">
      <div class="well">
        <div class="form-group">
          <label>Date</label>
          <input type="date" class="form-control" placeholder="Date" v-model="blog.date">
        </div>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title" v-model="blog.title">
        </div>
      </div>
      <div class="well mt-5">
        <h4>Blog Info</h4>
        <div class="form-group">
          <textarea class="form-control" rows="5" v-model="blog.detail"> </textarea>
        </div>
      </div>


      <button type="submit " class="btn btn-primary ">Update</button>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'edit',
    data() {
      return {
        id: this.$route.params.id,
        blog: '',
        alert: ''

      }
    },
    methods: {
      fetchblog() {
        this.$http.get('https://mblog-416e6.firebaseio.com/data/' + this.id + '.json')
          .then(function (response) {
            this.blog = response.body;
          });
      },
      update(e) {
        if (!this.blog.date || !this.blog.title || !this.blog.detail) {
          this.alert = 'Please fill in all required fields';
        } else {
          let updBlog = {
            date: this.blog.date,
            title: this.blog.title,
            detail: this.blog.detail
          }
          this.$http.put('https://mblog-416e6.firebaseio.com/data/' + this.id + '.json', updBlog)
            .then(function (response) {
              this.$router.push({
                path: '/',
                query: {
                  alert: 'Blog Updated'
                }
              });
            });
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    created: function () {
      this.fetchblog();
    },
    components: {
      Alert
    }
  }

</script>

<!-- Edit "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
