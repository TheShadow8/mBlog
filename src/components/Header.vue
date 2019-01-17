<template>
  <div class="header">
    <div>{{ title }}</div>
    <div class="date">{{ date }}</div>
  </div>
</template>


<script>
export default {
  name: "main-header",
  props: ["title", "date"]
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
  display: flex;
  justify-content: space-between;
}
.date {
  margin-right: 5rem;
  font-size: 2.5rem;
  font-weight: normal;
  color: #9da3af;
}
</style>
