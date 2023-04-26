<template>
  <button ref="buttonComponent" class="text-uppercase" :class="'color'+colorType+' size'+sizeType">{{ textContent }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props:{
      textContent: String,
      colorType: Number,
      sizeType: Number
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../assets/styles/partial/variables' as *;
  button{
    outline: 0;
    border: 0;
  }
  .color1{
    background-color: $buttonColor1;
    color: white;
    &:hover{
      background-color: $buttonColor1Hover;
    }
  }
  .size1{
    font-size: 1rem;
    padding: 1.5rem 3.5rem;
    font-weight: bold;
  }
</style>