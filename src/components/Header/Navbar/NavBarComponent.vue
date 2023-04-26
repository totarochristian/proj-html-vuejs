<template>
  <div id="navbar" class="w-100 p-4 text-white d-flex justify-content-between align-items-center flex-wrap">
    <LogoComponent />
    <CategoriesComponent :categoriesArray="store.siteCreationData.header.navbar.categories"/>
    <ActionsComponent />
  </div>
</template>

<script>
  import LogoComponent from './LogoComponent.vue';
  import CategoriesComponent from './CategoriesComponent.vue';
  import ActionsComponent from './ActionsComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'Navbar',
    components:{
      LogoComponent,
      CategoriesComponent,
      ActionsComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #navbar{
    min-height: $navbarHeight;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  @media screen and (max-width: 1604px) {
    #navbar{
      flex-direction: column;
      padding-top: 4rem!important;
    }
  }
</style>