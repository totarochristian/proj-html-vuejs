<template>
  <div id="inHomeTutoring" class="p-4 d-flex flex-column justify-content-center align-items-start">
    <h2>The Trusted Name<br> for In-Home Tutoring.</h2>
    <p>Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id eis sed odio sit amet nibh vulputate cursus mauris.</p>
    <a href="#" class="ct-p text-uppercase fw-bold">Learn more</a>
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
    padding-top: 8rem!important;
    margin: 4rem 3rem 10rem 3rem!important;
    img{
      width: 100%;
      height: auto;
    }
    a{
      text-decoration: none;
      color: $buttonColor1;
    }
  }
  @media screen and (max-width: 700px){
    #inHomeTutoring{
      img{
        padding-top: 5rem;
      }
    }
  }
</style>