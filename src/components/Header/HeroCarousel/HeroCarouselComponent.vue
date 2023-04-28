<template>
  <div id="heroCarousel" class="w-100 text-white position-relative">
    <img :src="'/img/'+store.siteCreationData.header.hero.data[activeIndex].backgroundImage" :alt="store.siteCreationData.header.hero.data[activeIndex].title">
    <div class="px-4 w-100 h-100 position-relative d-flex flex-column justify-content-center align-items-center text-center gap-4">
      <h1>{{ store.siteCreationData.header.hero.data[activeIndex].title }}</h1>
      <p>{{ store.siteCreationData.header.hero.data[activeIndex].description }}</p>
      <ButtonComponent :textContent="store.siteCreationData.header.hero.data[activeIndex].action" :colorType="1" :sizeType="1" />
    </div>
    <div id="carouselButtons" class="w-100 d-flex justify-content-center align-items-center gap-3">
      <i v-for="(elem, index) in store.siteCreationData.header.hero.data" class="fs-5 fa-solid" :class="index == activeIndex ? 'fa-circle-dot active' : 'fa-circle'" @click="OpenSlide(index)"></i>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '../../general/ButtonComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'HeroCarousel',
    components: {
      ButtonComponent
    },
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
        this.interval = setInterval(this.NextSlide,6000);
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
    height: 90vh;
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
        color: $whiteColorCarouselNotActiveButton;
      }
      .active, i:hover{
        color: $whiteColorHover;
      }
    }
  }
  @media screen and (max-width: 767px){
    #heroCarousel{
      height: 100vh;
      p{
        padding: 0 2rem;
      }
    }
  }
</style>