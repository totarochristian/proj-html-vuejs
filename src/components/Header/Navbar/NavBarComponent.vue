<template>
  <div id="navBar" class="w-100 d-flex">
    <LogoComponent />
  </div>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
  import { store } from '../../../data/store';

  export default {
    name: 'NavBar',
    components:{
      LogoComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>