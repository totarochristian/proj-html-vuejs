<template>
  <div id="actions">
    <i id="searchIcon" class="fa-solid fa-magnifying-glass"></i>
    <i class="fa-solid fa-bag-shopping position-relative">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </i>
    <i class="fa-solid fa-bars"></i>
  </div>
</template>

<script>
  export default {
    name: 'Actions'
  }
</script>

<style lang="scss" scoped>
  #actions{
    #searchIcon{
      transform: rotateY(180deg);
    }
  }
</style>