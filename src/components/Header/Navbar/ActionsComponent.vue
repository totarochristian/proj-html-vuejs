<template>
  <div id="actions" class="px-4 w-100 h-100 d-flex gap-4 justify-content-center align-items-center">
    <i id="searchIcon" class="fa-solid fa-magnifying-glass px-2 fs-4"></i>
    <i class="fa-solid fa-bag-shopping position-relative px-2 fs-4">
      <span class="shopElements bg-primary">0</span>
    </i>
    <i class="fa-solid fa-bars px-2 fs-4"></i>
  </div>
</template>

<script>
  export default {
    name: 'Actions'
  }
</script>

<style lang="scss" scoped>
  @use '../../../assets/styles/partial/variables' as *;
  
  #actions{
    #searchIcon{
      transform: rotateY(180deg);
    }
    .shopElements{
      font-size: 0.6rem;
      padding: 0.4rem;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: 0;
    }
    i{
      cursor: pointer;
      &:hover{
        color: $whiteColorHover;
      }
    }
  }
</style>