<template>
  <header>Board</header>

  <main>{{nome}}</main>
  
</template>

<script lang="js">
  export default {
    computed: {
      nome(){
        return this.$store.getters.teste
      }
    }
  }
  
</script>

<style>
</style>
