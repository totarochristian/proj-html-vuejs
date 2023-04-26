<template>
  <div id="categories">
    <a v-for="category in categoriesArray" :href="category.link">{{ category.name }}</a>
  </div>
</template>

<script>
  export default {
    name: 'Categories',
    props:{
      categoriesArray: Array
    }
  }
</script>

<style lang="scss" scoped>

</style>