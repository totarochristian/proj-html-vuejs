<template>
  <div class="subject p-4 d-flex flex-wrap justify-content-center align-items-center">
    <img :src="'/img/'+data.image" :alt="data.name">
    <p class="fw-bold">{{ data.name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Subject',
    props:{
      data: Object
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  .subject{
    min-width: 200px;
    background-color: $subjectsBackground;
    cursor: pointer;
    img{
      width: 100%;
      height: auto;
      transition: all 0.3s linear;
      padding: 3rem!important;
    }
    &:hover img{
      transform: translateY(-10px);
    }
  }
</style>