<template>
  <div id="navBar" class="w-100 d-flex">
    <LogoComponent />
    <CategoriesComponent :categoriesArray="store.siteCreationData.header.navbar.categories"/>
  </div>
</template>

<script>
  import LogoComponent from './LogoComponent.vue';
  import CategoriesComponent from './CategoriesComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'NavBar',
    components:{
      LogoComponent,
      CategoriesComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #navBar{
    background-color: black;
  }
</style>