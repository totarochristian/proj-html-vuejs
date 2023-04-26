<template>
  <div class="subject p-4 d-flex flex-wrap justify-content-center align-items-center">
    <img class="p-3" :src="'/img/'+data.image" :alt="data.name">
    <p class="fs-3 fw-bold">{{ data.name }}</p>
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
    min-width: 160px;
    min-height: 200px;
    background-color: $subjectsBackground;
    cursor: pointer;
    img{
      width: 100%;
      height: auto;
      transition: all 0.3s linear;
    }
    &:hover img{
      transform: translateY(-10px);
    }
  }
</style>