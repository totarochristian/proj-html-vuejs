<template>
  <div id="rightButtons" class="d-flex flex-column justify-content-between align-items-end gap-4">
    <div class="d-flex flex-column justify-content-center align-items-center gap-3">
      <img class="p-2 showShadow" src="/svg/svg-0.svg" alt="Circle">
      <img class="p-2 showShadow" src="/svg/svg-2.svg" alt="Shop">
    </div>
    <a href="#" id="goUp" class="d-flex flex-column justify-content-center align-items-center">
      <i class="fs-4 fa-solid fa-angle-up"></i>
      <span class="fs-5 text-uppercase">top</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'RightButtonsComponent',
    data(){
      return{
        showGoUp: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  #rightButtons{
    z-index: 1000;
    position: fixed;
    right: 0;
    bottom: 0;
    height: 35vh;
    img{
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
    .showShadow{
      box-shadow: 0 0 9.8px 0.2px rgba(0, 0, 0, 0.1);
    }
    img:nth-child(1){
      background-color: #ee2852;
    }
    img:nth-child(2){
      background-color: white;
    }
    #goUp{
      width: 70px;
      height: 70px;
      color: white;
      text-decoration: none;
      background-color: $buttonColor1;
      i,span{
        transition: all 0.2s linear;
      }
      &:hover{
        i{
          transform: translateY(70%);
        }
        span{
          opacity: 0;
        }
      }
    }
  }
</style>