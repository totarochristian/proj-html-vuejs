<template>
  <div class="w-100 h-100">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<script>
  import HeaderComponent from './components/Header/HeaderComponent.vue';
  import MainComponent from './components/Main/MainComponent.vue';
  import FooterComponent from './components/Footer/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
