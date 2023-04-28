<template>
  <div id="pricingPlans" class="m-4 p-4 d-flex justify-content-center align-items-center flex-column gap-4">
    <h2 class="text-capitalize">pricing plans</h2>
    <p class="text-center">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci</p>
    <PricingTableComponent />
  </div>
</template>

<script>
  import PricingTableComponent from './PricingTableComponent.vue';

  export default {
    name: 'PricingPlans',
    components:{
      PricingTableComponent
    }
  }
</script>

<style lang="scss" scoped>
  #pricingPlans{
    background-image: url('/img/background-pattern.jpg');
    background-position: middle center;
    padding-top: 9rem!important;
    margin: 18rem 0 10rem 0!important;
  }
  @media screen and (max-width: 1000px){
    #pricingPlans{
      display: none!important;
    }
  }
</style>