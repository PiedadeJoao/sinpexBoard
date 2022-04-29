<template>
    <section class="UIelements">
        <addButton></addButton>
    </section>
</template>

<script lang="js">
import addButton from './components/buttons/AddButton.vue'
  export default {
    components:{
        addButton
    },
  }
  
</script>

<style style="scss">
    .UIelements{
        border: 5px solid grey;
        padding: 40px;
    }
</style>
