<template>
  <div id="app">

    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div class="container">
        <router-link class="navbar-brand" to="/">mBlog</router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mr-2">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about">About</router-link>
            </li>
          </ul>
          <ul class="navbar-nav navbar-right">
            <li class="nav-item">
              <router-link class="btn btn-primary" to="/add">Add Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  import Alert from './components/Alert'
  export default {
    name: 'App'
  }

</script>

<style>


</style>
