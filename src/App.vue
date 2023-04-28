<template>
  <div class="w-100 h-100">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    <RightButtonsComponent />
  </div>
</template>

<script>
  import HeaderComponent from './components/Header/HeaderComponent.vue';
  import MainComponent from './components/Main/MainComponent.vue';
  import FooterComponent from './components/Footer/FooterComponent.vue';
  import RightButtonsComponent from './components/general/RightButtonsComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent,
      RightButtonsComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
