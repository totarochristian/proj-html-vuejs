<template>
  <div id="popularCoursesCarousel" class="d-flex justify-content-center align-items-center gap-4">
    <div class="coursesCard d-flex flex-column gap-4" v-for="(card,index) in store.siteCreationData.main.popularCourses.data" :class="{'d-none': index < startIndex || index > endIndex}">
      <div class="cardHeader">
        <img :src="'/img/'+card.image" :alt="card.title">
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';

  export default {
    name: 'PopularCoursesCarousel',
    data(){
      return{
        store,
        startIndex: 0,
        endIndex: 2
      }
    }
  }
</script>

<style lang="scss" scoped>
  .coursesCard{
    max-width: 413px;
    .cardHeader{
      width: 100%;
      max-height: 265px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>