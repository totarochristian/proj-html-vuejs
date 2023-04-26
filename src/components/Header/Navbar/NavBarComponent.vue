<template>
  <div id="navbar" class="w-100 p-4 text-white d-flex justify-content-center align-items-center">
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
    height: 100px;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>