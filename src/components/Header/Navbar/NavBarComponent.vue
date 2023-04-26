<template>
  <div id="navbar" class="w-100 d-flex">
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
  #navbar{
    background-color: black;
  }
</style>