<template>
  <footer class="bg-dark text-white d-flex flex-column gap-4">
    <div class="d-flex justify-content-between align-items-center gap-4">
      <div class="d-flex justify-content-between align-items-center gap-4">
        <div id="generalInfo" class="d-flex flex-column align-items-start justify-content-center gap-4">
          <img :src="'/img/' + store.siteCreationData.footer.upper.general.image" alt="Logo">
          <p>{{ store.siteCreationData.footer.upper.general.description }}</p>
          <div class="d-flex align-items-center gap-3">
            <i class="fa-solid fa-phone-volume"></i>
            <span>{{ store.siteCreationData.footer.upper.general.phone }}</span>
          </div>
          <div class="d-flex align-items-center gap-3">
            <i class="fa-regular fa-clock"></i>
            <span>{{ store.siteCreationData.footer.upper.general.hours }}</span>
          </div>
        </div>
        <div id="popularCoursesInfo">
          
        </div>
        <div id="supportInfo">
          
        </div>
      </div>
      <div id="flexibleLearnings">

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