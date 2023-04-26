<template>
  <div id="subjects" class="d-flex justify-content-center align-items-center gap-4 flex-wrap">
    <SubjectComponent v-for="subject in store.siteCreationData.main.subjects.data" :data="subject"/>
  </div>
</template>

<script>
  import SubjectComponent from './SubjectComponent.vue';
  import { store } from '../../../data/store';

  export default {
    name: 'Subjects',
    components: {
      SubjectComponent
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
  #subjects{
    margin: 6rem 3rem;
    div{
      width: calc(100% / 6 - 1.5rem);
    }
  }
</style>