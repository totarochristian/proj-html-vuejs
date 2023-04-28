<template>
  <div id="logo" class="px-4 h-100">
    <img src="/img/logo-light.png" alt="Logo">
  </div>
</template>

<script>
  export default {
    name: 'Logo'
  }
</script>

<style lang="scss" scoped>
  #logo{
    img{
      height: 100%;
      width: auto;
    }
  }
  @media screen and (max-width: 1000px){
    #logo{
      img{
        height: 8vh!important;
        width: auto;
      }
    }
  }
  @media screen and (max-width: 400px){
    #logo{
      img{
        height: 6vh!important;
        width: auto;
      }
    }
  }
</style>