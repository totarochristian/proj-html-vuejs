<template>
  <main>
    <SubjectsComponent />
    <InHomeTutoringComponent />
    <ReachPotentialComponent />
    <FeedbackComponent />
    <LearningPossibilities />
    <PopularCoursesComponent />
  </main>
</template>

<script>
  import SubjectsComponent from './Subjects/SubjectsComponent.vue';
  import InHomeTutoringComponent from './InHomeTutoringComponent.vue';
  import ReachPotentialComponent from './ReachPotentialComponent.vue';
  import FeedbackComponent from './FeedbackComponent.vue';
  import LearningPossibilities from './LearningPossibilitiesComponent.vue';
  import PopularCoursesComponent from './PopularCourses/PopularCoursesComponent.vue';

  export default {
    name: 'Main',
    components:{
      SubjectsComponent,
      InHomeTutoringComponent,
      ReachPotentialComponent,
      FeedbackComponent,
      LearningPossibilities,
      PopularCoursesComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>