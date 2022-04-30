<template>
  <Board></Board>
  <!-- UNCOMMENT TO SEE ALL COMPONENTS -->
  <!-- <UIElements></UIElements> -->
</template>

<script lang="js">
import UIElements from './UiElements.vue'
import Board from './components/Board.vue'
  export default {
    components:{
      UIElements,
      Board
    },
  }
  
</script>

<style lang="scss">
@import "./assets/sass/global.scss";
</style>
