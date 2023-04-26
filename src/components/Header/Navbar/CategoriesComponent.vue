<template>
  <div id="categories" class="px-4 w-100 h-100 d-flex gap-4 justify-content-center align-items-center">
    <a v-for="category in categoriesArray" :href="category.link" class="px-3 fs-4 text-uppercase">{{ category.name }}</a>
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
  @use '../../../assets/styles/partial/variables' as *;
  
  #categories{
    a{
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      &:hover{
        color: $whiteColorHover;
      }
    }
  }
</style>