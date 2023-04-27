<template>
  <div id="popularCoursesCarousel" class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-center align-items-center gap-4">
      <div class="coursesCard d-flex flex-column gap-4" v-for="(card,index) in store.siteCreationData.main.popularCourses.data" :class="{'d-none': card.hide}">
        <div class="cardHeader">
          <img :src="'/img/'+card.image" :alt="card.title">
        </div>
        <div class="cardContent">
          {{ index + 1 }}
        </div>
      </div>
    </div>
    <div id="carouselButtons" class="w-100 d-flex justify-content-center align-items-center gap-3">
      <i v-for="num in Math.trunc(store.siteCreationData.main.popularCourses.data.length / 3)" class="fs-5 fa-solid fa-circle" :class="startIndex >= (num-1)*3 && startIndex <= (num - 1)*3 + 2 ? 'active' : ''" @click="OpenSlide((num-1)*3)"></i>
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
        this.NextSlide();
        this.interval = setInterval(this.NextSlide,4000);
      }
    },
    mounted(){
      this.interval = setInterval(this.NextSlide,4000);
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
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
  #carouselButtons{
    i{
      cursor: pointer;
      color: $buttonColor1;
      opacity: 60%;
    }
    .active, i:hover{
      opacity: 100%;
    }
  }
</style>