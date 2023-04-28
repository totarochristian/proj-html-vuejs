<template>
  <footer class="bg-dark text-white d-flex flex-column gap-4">
    <div class="d-flex justify-content-between align-items-center gap-4">
      <div class="d-flex justify-content-between align-items-center gap-4">
        <div id="generalInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
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
        <div id="popularCoursesInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
          <h3>{{ store.siteCreationData.footer.upper.popularCourses.title }}</h3>
          <div class="d-flex flex-column align-items-start justify-content-center gap-3">
            <div class="d-flex flex-column align-items-start justify-content-center gap-1" v-for="info in store.siteCreationData.footer.upper.popularCourses.data">
              <a :href="info.titleLink">{{ info.title }}</a>
              <a :href="info.authorLink">{{ info.author }}</a>
            </div>
          </div>
        </div>
        <div id="supportInfo" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
          <h3>{{ store.siteCreationData.footer.upper.support.title }}</h3>
          <div class="d-flex flex-column align-items-start justify-content-center gap-3">
            <a :href="info.link" v-for="info in store.siteCreationData.footer.upper.support.data">{{ info.title }}</a>
          </div>
        </div>
      </div>
      <div id="flexibleLearnings" class="col-3 d-flex flex-column align-items-start justify-content-center gap-4">
        <h3>{{ store.siteCreationData.footer.upper.flexibleLearning.title }}</h3>
        <img :src="'/img/' + store.siteCreationData.footer.upper.flexibleLearning.image" alt="World image">
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