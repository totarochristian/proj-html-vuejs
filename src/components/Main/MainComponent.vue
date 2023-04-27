<template>
  <main>
    <SubjectsComponent />
    <InHomeTutoringComponent />
    <ReachPotentialComponent />
    <FeedbackComponent />
    <LearningPossibilities />
    <PopularCoursesComponent />
    <PricingPlansComponent />
  </main>
</template>

<script>
  import SubjectsComponent from './Subjects/SubjectsComponent.vue';
  import InHomeTutoringComponent from './InHomeTutoringComponent.vue';
  import ReachPotentialComponent from './ReachPotentialComponent.vue';
  import FeedbackComponent from './FeedbackComponent.vue';
  import LearningPossibilities from './LearningPossibilitiesComponent.vue';
  import PopularCoursesComponent from './PopularCourses/PopularCoursesComponent.vue';
  import PricingPlansComponent from './PricingPlans/PricingPlansComponent.vue';

  export default {
    name: 'Main',
    components:{
      SubjectsComponent,
      InHomeTutoringComponent,
      ReachPotentialComponent,
      FeedbackComponent,
      LearningPossibilities,
      PopularCoursesComponent,
      PricingPlansComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>