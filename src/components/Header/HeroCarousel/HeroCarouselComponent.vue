<template>
  <div id="heroCarousel" class="w-100 text-white position-relative">
    <img :src="'/img/'+store.siteCreationData.header.hero.data[activeIndex].backgroundImage" :alt="store.siteCreationData.header.hero.data[activeIndex].title">
    <div class="px-4 w-100 h-100 position-relative d-flex flex-column justify-content-center align-items-center text-center gap-4">
      <h1>{{ store.siteCreationData.header.hero.data[activeIndex].title }}</h1>
      <p class="fs-3">{{ store.siteCreationData.header.hero.data[activeIndex].description }}</p>
      <button class="btn btn-primary btn-lg">{{ store.siteCreationData.header.hero.data[activeIndex].action }}</button>
    </div>
    <div id="carouselButtons" class="w-100 d-flex justify-content-center align-items-center gap-3">
      <i v-for="(elem, index) in store.siteCreationData.header.hero.data" class="fs-5 fa-solid" :class="index == activeIndex ? 'fa-circle-dot active' : 'fa-circle'" @click="OpenSlide(index)"></i>
    </div>
  </div>
</template>

<script>
  import { store } from '../../../data/store';

  export default {
    name: 'HeroCarousel',
    data(){
      return {
        store,
        activeIndex: 0,
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
        this.interval = setInterval(this.NextSlide,5000);
      }
    },
    mounted(){
      this.OpenSlide(0);
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  #heroCarousel{
    margin-top: $navbarHeight;
    height: 78vh;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 100;
      filter: brightness(70%);
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
    }
    #carouselButtons{
      position: absolute;
      bottom: 2rem;
      i{
        cursor: pointer;
        color: #ffffff4d;
      }
      .active{
        color: #ffffffcc;
      }
    }
  }
</style>