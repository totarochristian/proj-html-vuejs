<template>
  <div id="popularCoursesCarousel" class="d-flex justify-content-center align-items-center gap-4">
    <div class="coursesCard d-flex flex-column gap-4" v-for="(card,index) in store.siteCreationData.main.popularCourses.data" :class="{'d-none': card.hide}">
      <div class="cardHeader">
        <img :src="'/img/'+card.image" :alt="card.title">
      </div>
      <div class="cardContent">
        {{ index + 1 }}
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
        interval: 0
      }
    },
    methods:{
      NextSlide(){
        let length = store.siteCreationData.main.popularCourses.data.length;
        this.startIndex = this.startIndex + 3 < length ? this.startIndex + 1 : 0;
        store.siteCreationData.main.popularCourses.data.forEach((elem, index) => {
          elem.hide = index < this.startIndex || index > this.startIndex + 2;
        });
      },
      OpenSlide(indexToOpen){
        if(this.interval)
          clearInterval(this.interval);
        this.startIndex = indexToOpen - 1;
        this.interval = setInterval(this.NextSlide,4000);
      }
    },
    mounted(){
      this.OpenSlide(0);
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