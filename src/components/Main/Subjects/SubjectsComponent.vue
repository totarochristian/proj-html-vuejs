<template>
  <div id="subjects" class="d-flex justify-content-center align-items-center gap-4">
    <SubjectComponent v-for="subject in store.siteCreationData.main.subjects" :data="subject"/>
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

</style>