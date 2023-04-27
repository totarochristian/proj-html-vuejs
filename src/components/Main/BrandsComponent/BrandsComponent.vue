<template>
  <div id="brands" class="w-100 p-4 d-flex justify-content-center align-items-center gap-4 flex-wrap">
    <BrandComponent :brandData="brand" v-for="brand in store.siteCreationData.main.brands.data" />
  </div>
</template>

<script>
  import BrandComponent from './BrandComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'BrandsComponent',
    components:{
      BrandComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #brands{
    padding-top: 8rem!important;
    margin: 4rem 0 10rem 0!important;
    div{
      width: calc(100% / 4 - 2rem);
    }
  }
</style>