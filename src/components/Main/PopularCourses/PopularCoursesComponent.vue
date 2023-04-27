<template>
  <div id="popularOnlineCourses" class="m-4 p-4 d-flex justify-content-center align-items-center flex-column gap-4">
    <h2 class="fs-1 text-capitalize">Popular online courses</h2>
    <p class="fs-3 col-xl-6 text-center">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit</p>
    <PopularCoursesCarouselComponent />
  </div>
</template>

<script>
  import PopularCoursesCarouselComponent from './PopularCoursesCarouselComponent.vue';

  export default {
    name: 'PopularCourses',
    components:{
      PopularCoursesCarouselComponent
    }
  }
</script>

<style lang="scss" scoped>
  #popularOnlineCourses{
    background-image: url('/img/background-pattern.jpg');
    background-position: bottom center;
    padding-top: 8rem!important;
    margin: 4rem 0 10rem 0!important;
  }
</style>