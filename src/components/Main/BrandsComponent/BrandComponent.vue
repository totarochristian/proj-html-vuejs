<template>
  <div class="brand">
    <img :src="'/img/'+brandData.normal">
    <img :src="'/img/'+brandData.hover">
  </div>
</template>

<script>
  export default {
    name: 'BrandComponent',
    props:{
      brandData: Object
    }
  }
</script>

<style lang="scss" scoped>
  .brand{
    img{
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    &:hover img:first-child{ display: none; }
    &:hover img:last-child{ display: block; }
    img:last-child{ display: none; }
  }
</style>