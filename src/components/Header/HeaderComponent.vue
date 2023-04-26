<template>
  <header>
    <NavBarComponent />
    <HeroCarouselComponent />
  </header>
</template>

<script>
  import NavBarComponent from './Navbar/NavBarComponent.vue';
  import HeroCarouselComponent from './HeroCarousel/HeroCarouselComponent.vue';

  export default {
    name: 'Header',
    components:{
      NavBarComponent,
      HeroCarouselComponent
    }
  }
</script>

<style lang="scss" scoped>
</style>