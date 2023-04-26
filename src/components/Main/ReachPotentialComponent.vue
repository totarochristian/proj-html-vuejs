<template>
  <div id="reachPotential" class="d-flex justify-content-center align-items-end gap-4">
    <img src="/img/h5-img-2.jpg" alt="Image of the world">
    <div id="reachPotentialContent" class="ps-4">
      <h2>Empowering Children to Reach Their Potential.</h2>
      <p class="fs-3">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate.</p>
      <div class="d-flex justify-content-between align-items-center gap-4">
        <div class="results fs-4 fw-bold d-flex flex-column">
          <span>168</span>
          <span class="text-capitalize">User stories</span>
        </div>
        <div class="results fs-4 fw-bold d-flex flex-column">
          <span>347</span>
          <span class="text-capitalize">Events</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReachPotential'
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  #reachPotential{
    margin: 6rem 3rem;
    img{
      width: 50%;
      height: auto;
      max-width: 650px;
    }
    #reachPotentialContent{
      max-width: 600px;
      margin: 2rem;
      h2{
        font-size: 3.5rem;
      }
      .results{
        color: $buttonColor1;
        span:first-child{
          font-size: 3rem;
        }
      }
    }
  }
  @media screen and (max-width: 1173px) {
    #reachPotential{
      flex-wrap: wrap;
      img{
        width: 100%;
      }
    }
  }
</style>