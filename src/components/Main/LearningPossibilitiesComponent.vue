<template>
  <div id="learningPossibilities" class="p-4 d-flex justify-content-center flex-wrap">
    <div id="learningSections" class="p-4 d-flex flex-column align-items-start">
      <span class="w-100 fw-semibold text-capitalize fs-3 p-4" :class="{'active': index == activeIndex}" @click="OpenSection(index)" v-for="(elem, index) in store.siteCreationData.main.learningPossibilities.data">{{ elem.sectiontitle }}</span>
    </div>
    <div id="learningContent" class="my-4 p-4 d-flex flex-column align-items-start flex-fill gap-4">
      <h1>{{ store.siteCreationData.main.learningPossibilities.data[activeIndex].title }}</h1>
      <p class="fs-3">{{ store.siteCreationData.main.learningPossibilities.data[activeIndex].description }}</p>
      <div id="learningOptionsContent" class="w-100 d-flex align-items-end">
        <div id="learningOptions" class="flex-fill d-flex flex-column align-items-start">
          <div class="fs-3 d-flex align-items-center gap-3 py-3" v-for="option in store.siteCreationData.main.learningPossibilities.data[activeIndex].options">
            <i class="fa-solid fa-check"></i>
            <span>{{ option }}</span>
          </div>
        </div>
        <img :src="'/img/'+store.siteCreationData.main.learningPossibilities.data[activeIndex].image" :alt="store.siteCreationData.main.learningPossibilities.data[activeIndex].title">
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../../data/store';

  export default {
    name: 'LearningPossibilities',
    data(){
      return{
        store,
        activeIndex: 0
      }
    },
    methods:{
      OpenSection(indexToOpen){
        this.activeIndex = indexToOpen;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;

  #learningPossibilities{
    padding-top: 8rem!important;
    margin: 4rem 0 10rem 0!important;
    #learningSections{
      min-width: 500px;
      span{
        border: 1px solid grey;
        border-bottom: 0;
        cursor: pointer;
        &:last-child{
          border-bottom: 1px solid grey;
        }
      }
    }
    #learningSections>span.active,#learningSections>span:hover{
      color: $buttonColor1;
      border-left: 10px solid $buttonColor1;
    }
    #learningContent{
      max-width: 1200px;
      margin-right: 8rem;
      margin-left: 1rem;
      img{
        width: 180px;
        height: 178px;
      }
      #learningOptionsContent{
        #learningOptions{
          i{
            color: $buttonColor1;
          }
        }
      }
    }
  }
</style>