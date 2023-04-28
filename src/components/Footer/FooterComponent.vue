<template>
  <footer class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-between align-items-center gap-4">
      <div>
        Sections
      </div>
      <div>
        Image
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center gap-4">
      <div>
        copyright
      </div>
      <div>
        follow
      </div>
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