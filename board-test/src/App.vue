<template>
  <header>Board</header>

  <main>{{nome}}</main>
  <UIElements></UIElements>
</template>

<script lang="js">
import UIElements from './UiElements.vue'
  export default {
    components:{
      UIElements
    },
    computed: {
      nome(){
        return this.$store.getters.teste
      }
    }
  }
  
</script>

<style lang="scss">
  @import './assets/sass/global.scss';
</style>
