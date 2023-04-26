<template>
  <div id="inHomeTutoring" class="p-4 d-flex flex-column justify-content-center align-items-start">
    <h2>The Trusted Name<br> for In-Home Tutoring.</h2>
    <p class="fs-3">Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.</p>
    <a href="#" class="fs-4 text-uppercase fw-bold">Learn more</a>
    <img src="/img/h5-img-1.jpg" alt="In-home tutoring image">
  </div>
</template>

<script>
  export default {
    name: 'InHomeTutoring'
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  #inHomeTutoring{
    margin: 2rem 3rem;
    h2{
      font-size: 3rem;
    }
    img{
      width: 100%;
      height: auto;
    }
    a{
      text-decoration: none;
      color: $buttonColor1;
    }
  }
</style>