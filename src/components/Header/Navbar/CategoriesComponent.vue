<template>
  <div id="categories" class="px-4 h-100 d-flex gap-4 justify-content-center align-items-center flex-fill flex-wrap">
    <a v-for="category in categoriesArray" :href="category.link" class="px-3 ct-p text-uppercase">{{ category.name }}</a>
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
  @media screen and (max-width: 1604px) {
    #categories{
      visibility: hidden;
    }
  }
</style>