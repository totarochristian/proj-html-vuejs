<template>
  <footer class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-center align-items-center gap-4">
      Upper
    </div>
    <div class="d-flex justify-content-center align-items-center gap-4">
      Bottom
    </div>
  </footer>
</template>

<script>
  import { store } from '../../data/store';

  export default {
    name: 'Footer',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>