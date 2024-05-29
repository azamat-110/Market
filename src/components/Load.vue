<template>
  <div class="loader">
    <div class="loader__content"></div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(186, 186, 186);


  &__content{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    border-top: 3px solid #000;
    border-bottom: 3px solid #ffffff;
    animation: loader 1s infinite linear;
  }
}

@keyframes loader {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>