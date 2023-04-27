<template>
  <main>
    <SubjectsComponent />
    <InHomeTutoringComponent />
    <ReachPotentialComponent />
    <FeedbackComponent />
    <LearningPossibilities />
  </main>
</template>

<script>
  import SubjectsComponent from './Subjects/SubjectsComponent.vue';
  import InHomeTutoringComponent from './InHomeTutoringComponent.vue';
  import ReachPotentialComponent from './ReachPotentialComponent.vue';
  import FeedbackComponent from './FeedbackComponent.vue';
  import LearningPossibilities from './LearningPossibilitiesComponent.vue';

  export default {
    name: 'Main',
    components:{
      SubjectsComponent,
      InHomeTutoringComponent,
      ReachPotentialComponent,
      FeedbackComponent,
      LearningPossibilities
    }
  }
</script>

<style lang="scss" scoped>

</style>