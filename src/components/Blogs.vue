<template>
  <div class="blog-container">
    <!-- <Alert v-if="alert" v-bind:message="alert"/> -->
    <Header title="My Blogs"></Header>
    <table class="blog-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr class="blog-content" v-for="blog in blogs" :key="blog.id">
          <td>
            <router-link class="blog-title" v-bind:to="'/blog/'+blog.id">{{blog.title}}</router-link>
          </td>
          <td class="blog-options">
            {{blog.date}}
            <div class="blog-icon">
              <router-link v-bind:to="'/edit/'+blog.id">
                <svg xmlns="http://www.w3.org/2000/svg" width="27.217" viewBox="0 0 27.217 27.427">
                  <g id="pencil" transform="translate(-0.783 -0.617)">
                    <line
                      id="Line_6"
                      data-name="Line 6"
                      x2="5"
                      y2="5"
                      transform="translate(19.328 4.5)"
                      fill="none"
                      stroke="#9da3af"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></line>
                    <line
                      id="Line_7"
                      data-name="Line 7"
                      x2="5"
                      y2="5"
                      transform="translate(3 20.828)"
                      fill="none"
                      stroke="#9da3af"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></line>
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M9.436,25.589,2,26.828l1.239-7.436L20.077,2.554a2.478,2.478,0,0,1,3.5,0l2.692,2.692a2.478,2.478,0,0,1,0,3.5Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#9da3af"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
              </router-link>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <g id="trash-simple" transform="translate(-3 -1)">
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M30.8,18V35.32a1.817,1.817,0,0,1-1.891,1.732H11.891A1.817,1.817,0,0,1,10,35.32V18"
                    transform="translate(-3.402 -9.052)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    y2="9.526"
                    transform="translate(17 12.838)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    y2="9.526"
                    transform="translate(12.357 12.838)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <line
                    id="Line_4"
                    data-name="Line 4"
                    y2="9.526"
                    transform="translate(21.643 12.838)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M22,6.33V2h8.66V6.33"
                    transform="translate(-9.33 0)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></path>
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x1="26"
                    transform="translate(4 6.33)"
                    fill="none"
                    stroke="#9da3af"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    stroke-width="2"
                  ></line>
                </g>
              </svg>-->
            </div>
          </td>

          <!-- <td>
            <router-link class="btn btn-default" v-bind:to="'/blog/'+blog.id">View
          </td>-->
        </tr>
      </tbody>
    </table>
    <Hero></Hero>
  </div>
</template>

<script>
import Alert from "./Alert";
import Header from "./Header";
import Hero from "./Hero";

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
    Alert,
    Header,
    Hero
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
th,
td {
  border-bottom: 1px solid #dee2eb;
}

th {
  padding-bottom: 1.5rem;
}
td {
  text-align: center;
  padding: 1.5rem;
}

.blog-title:hover {
  color: #3770fc;
}
.blog-table {
  grid-row: 2/3;
}
.blog-options {
  position: relative;
}

.blog-icon {
  position: absolute;
  top: 1.3rem;
  right: 1.3rem;
}

.blog-icon > * {
  margin-right: 1rem;
}
</style>
