<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Blog</h1>
    <form v-on:submit="addBlog">
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


      <button type="submit " class="btn btn-primary ">Post</button>
    </form>
  </div>
</template>

<script>
  import Alert from './Alert'
  export default {
    name: 'add',
    data() {
      return {
        blog: {},
        alert: ''
      }
    },
    methods: {
      getToday() {
        let y = new Date().getFullYear();
        let m = new Date().getMonth() + 1;
        let d = new Date().getDate();

        if (m < 10 && d < 10) {
          this.blog.date = y + '-0' + m + '-0' + d;
        } else if (d < 10) {
          this.blog.date = y + '-' + m + '-0' + d;
        } else if (m < 10) {
          this.blog.date = y + '-0' + m + '-' + d;
        } else {
          this.blog.date = y + '-' + m + '-' + d;
        }

      },
      addBlog(e) {
        if (!this.blog.date || !this.blog.title || !this.blog.detail) {
          this.alert = 'Please fill in all required fields';
        } else {
          let newblog = {
            date: this.blog.date,
            title: this.blog.title,
            detail: this.blog.detail
          }
          this.$http.post('https://mblog-416e6.firebaseio.com/data.json',
              newblog)
            .then(function (response) {
              this.$router.push({
                path: '/',
                query: {
                  alert: 'Blog Posted'
                }
              });
            });
          e.preventDefault();
        }
        e.preventDefault();
      }
    },
    created: function () {

      this.getToday()

    },
    components: {
      Alert
    }
  }

</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>


</style>
