<template>
  <div id="learningPossibilities" class="p-4">
    <div id="learningSections" class="p-4 col-3 d-flex flex-column align-items-start">
      <span class="w-100 text-capitalize fs-4 p-4" :class="{'active': index == activeIndex}" v-for="(elem, index) in store.siteCreationData.main.learningPossibilities.data">{{ elem.sectiontitle }}</span>
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
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;

  #learningPossibilities{
    #learningSections{
      span{
        border: 1px solid grey;
        border-bottom: 0;
        &:last-child{
          border-bottom: 1px solid grey;
        }
      }
    }
    #learningSections>span.active,#learningSections>span:hover{
      color: $buttonColor1;
      border-left: 10px solid $buttonColor1;
    }
  }
</style>