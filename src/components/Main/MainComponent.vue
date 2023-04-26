<template>
  <main>
    <SubjectsComponent />
    <InHomeTutoringComponent />
    <ReachPotentialComponent />
  </main>
</template>

<script>
  import SubjectsComponent from './Subjects/SubjectsComponent.vue';
  import InHomeTutoringComponent from './InHomeTutoringComponent.vue';
  import ReachPotentialComponent from './ReachPotentialComponent.vue';

  export default {
    name: 'Main',
    components:{
      SubjectsComponent,
      InHomeTutoringComponent,
      ReachPotentialComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>