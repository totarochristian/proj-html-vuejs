<template>
  <div id="navBar">
    Navbar
  </div>
</template>

<script>
  import { store } from '../../../data/store';

  export default {
    name: 'NavBar',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>