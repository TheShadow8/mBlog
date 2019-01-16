<template>
  <div class="blogs container">
    <Alert v-if="alert" v-bind:message="alert"/>
    <h1 class="page-header">All blogs</h1>
    <!-- <input class="form-control" placeholder="Enter Last Name" v-model="filterInput"> -->
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blog in blogs" :key="blog.id">
          <td>{{blog.title}}</td>
          <td>{{blog.date}}</td>
          <td>
            <router-link class="btn btn-default" v-bind:to="'/blog/'+blog.id">View</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "blogs",
  data() {
    return {
      blogs: [],
      alert: "",
      filterInput: ""
    };
  },
  methods: {
    fetchblogs() {
      this.$http
        .get("https://mblog-416e6.firebaseio.com/data.json")
        .then(function(data) {
          return data.json();
        })
        .then(function(data) {
          var blogsArray = [];
          for (let key in data) {
            data[key].id = key;
            blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
        });
    }
    //   filterBy(list, value) {
    //     value = value.charAt(0).toUpperCase() + value.slice(1);
    //     return list.filter(function (blog) {
    //       return blog.date.indexOf(value) > -1;
    //     });
    //   }
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchblogs();
  },
  updated: function() {
    this.fetchblogs();
  },
  components: {
    Alert
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
