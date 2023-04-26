<template>
  <main>
    <SubjectsComponent />
    <InHomeTutoringComponent />
  </main>
</template>

<script>
  import SubjectsComponent from './Subjects/SubjectsComponent.vue';
  import InHomeTutoringComponent from './InHomeTutoringComponent.vue';

  export default {
    name: 'Main',
    components:{
      SubjectsComponent,
      InHomeTutoringComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>