<template>
  <div id="feedback" class="w-100 text-white position-relative">
    <img id="backgroundImage" :src="'/img/'+store.siteCreationData.main.feedback.backgroundImage" alt="World image">
    <div class="px-4 w-100 h-100 position-relative d-flex flex-column justify-content-center align-items-center text-center gap-4">
      <img :src="'/img/'+store.siteCreationData.main.feedback.data[activeIndex].image" :alt="store.siteCreationData.main.feedback.data[activeIndex].surname + ' ' + store.siteCreationData.main.feedback.data[activeIndex].name">
      <p class="fs-3">{{ store.siteCreationData.main.feedback.data[activeIndex].feedback }}</p>
      <div class="d-flex flex-column justify-content-center align-items-center gap-3">
        <span class="fs-2 fw-bold">{{ store.siteCreationData.main.feedback.data[activeIndex].name + ' ' + store.siteCreationData.main.feedback.data[activeIndex].surname}}</span>
        <span class="fs-5 fw-semibold text-uppercase">{{ store.siteCreationData.main.feedback.data[activeIndex].role }}</span>
      </div>
      <div id="feedbackButtons" class="w-100 d-flex justify-content-center align-items-center gap-3">
        <i v-for="(elem, index) in store.siteCreationData.main.feedback.data" class="fs-5 fa-solid fa-circle" :class="{'active': index == activeIndex}" @click="OpenSlide(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../data/store';

  export default {
    name: 'Feedback',
    data(){
      return {
        store,
        activeIndex: 1,
        interval: null
      }
    },
    methods:{
      NextSlide(){
        this.activeIndex = this.activeIndex + 1 < store.siteCreationData.header.hero.data.length ? this.activeIndex + 1 : 0;
      },
      OpenSlide(indexToOpen){
        if(this.interval)
          clearInterval(this.interval);
        this.activeIndex = indexToOpen;
        this.interval = setInterval(this.NextSlide,4000);
      }
    },
    mounted(){
      this.OpenSlide(0);
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  #feedback{
    height: 100vh;
    #backgroundImage{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 100;
      filter: brightness(90%);
    }
    div{
      z-index: 200;
      h1{
        font-size: 4rem;
      }
      p{
        padding-left: 3rem;
        padding-right: 3rem;
      }
      img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
    #feedbackButtons{
      margin-top: 2rem;
      i{
        cursor: pointer;
        color: $whiteColorCarouselNotActiveButton;
      }
      .active, i:hover{
        color: $whiteColorHover;
      }
    }
  }
  @media screen and (max-width: 767px){
    #feedback{
      height: 100vh;
      h1{
        font-size: 3rem!important;
      }
      p{
        padding: 0 2rem;
      }
    }
  }
</style>