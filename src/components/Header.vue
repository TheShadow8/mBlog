<template>
  <div class="header">{{ title }}</div>
</template>


<script>
export default {
  name: "header",
  props: ["title"]
};
</script>

<style>
.header {
  grid-row: 1/2;
  margin-left: 5rem;
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: #232440;
}
</style>
