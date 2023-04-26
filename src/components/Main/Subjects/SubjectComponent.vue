<template>
  <div class="subject p-4 d-flex flex-wrap justify-content-center align-items-center">
    <img class="p-3" :src="'/img/'+data.image" :alt="data.name">
    <p class="fs-5 fw-bold">{{ data.name }}</p>
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
    width: 160px;
    height: 200px;
    background-color: $subjectsBackground;
    img{
      width: 100%;
      height: auto;
    }
  }
</style>