<template>
  <div id="popularCoursesCarousel" class="d-flex flex-column gap-4">
    <div class="d-flex justify-content-center align-items-center gap-4">
      <div class="coursesCard d-flex flex-column gap-4" v-for="(card,index) in store.siteCreationData.main.popularCourses.data" :class="{'d-none': card.hide}">
        <div class="cardHeader">
          <img :src="'/img/'+card.image" :alt="card.title">
        </div>
        <div class="cardContent py-4 px-4 d-flex flex-column gap-4">
          <div class="d-flex gap-4 align-items-start justify-content-between">
            <div class="d-flex flex-column gap-1">
              <span class="fs-3 fw-bold">{{ card.title }}</span>
              <span class="fs-4 colorGrey">{{ card.author }}</span>
            </div>
            <span class="mt-2 fs-6 px-3 badge rounded-pill text-uppercase" :class="card.price>0 ? 'text-bg-info' : 'text-bg-warning'">{{ card.price > 0 ? '$' + card.price: 'free' }}</span>
          </div>
          <p class="fs-4">{{ card.description }}</p>
          <div class="d-flex gap-3">
            <div class="d-flex gap-2 align-items-center colorGrey">
              <i class="fa-solid fa-user"></i>
              <span>{{ card.follower }}</span>
            </div>
            <div class="d-flex gap-2 align-items-center colorGrey">
              <i class="fa-solid fa-tag"></i>
              <span class="text-uppercase">{{ card.tag }}</span>
            </div>
          </div>
        </div>
        <i class="cardHearth p-4 fs-3 fa-heart" :class="card.liked ? 'fa-solid text-danger' : 'fa-regular text-white'" @click="UpdateLike(index)"></i>
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
      },
      UpdateLike(index){
        store.siteCreationData.main.popularCourses.data[index].follower += store.siteCreationData.main.popularCourses.data[index].liked ? -1 : 1;
        store.siteCreationData.main.popularCourses.data[index].liked = !store.siteCreationData.main.popularCourses.data[index].liked;
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
    border: 1px solid lightgrey;
    position: relative;
    .cardHeader{
      width: 100%;
      max-height: 265px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .badge{
      width: 70px;
    }
    .colorGrey{
      color: grey;
    }
    .cardHearth{
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      cursor: pointer;
    }
    &:hover .cardHearth{
      display: block;
    }
  }
  #popularCoursesCarousel{
    margin-top: 5rem;
    #carouselButtons{
      margin-top: 3rem;
      i{
        cursor: pointer;
        color: $buttonColor1;
        opacity: 60%;
      }
      .active, i:hover{
        opacity: 100%;
      }
    }
  }
</style>