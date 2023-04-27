<template>
  <button ref="buttonComponent" class="text-uppercase" :class="'color'+colorType+' size'+sizeType+' border'+borderType">{{ textContent }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props:{
      textContent: String,
      colorType: Number,
      sizeType: Number,
      borderType: Number
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  button{
    outline: 0;
    border: 0;
    transition: all 0.3s linear;
  }
  .color1{
    background-color: $buttonColor1;
    color: white;
    &:hover{
      background-color: $buttonColor1Hover;
    }
  }
  .color2{
    background-color: white;
    color: grey;
    &:hover{
      background-color: $buttonColor1;
      color: white;
    }
  }
  .size1{
    font-size: 1rem;
    padding: 1.5rem 3.5rem;
    font-weight: bold;
  }
  .border0{
    border: 0;
  }
  .border1{
    border: 1px solid lightgrey;
  }
</style>