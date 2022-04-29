<template>
  <button class="addButton" :class="{ 'addButton--bigger': text }">
    <plus />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script lang="js">
    import plus from '@/assets/svg/plus.svg'
  export default {
    components:{
        plus
    },
    props:{
        text: String
    }
  }
  
</script>

<style lang="scss">
.addButton {
  padding: 10px;
  background: #ededed;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: #333333;
  
  span{
    margin-left: 9px;
  }
  &:hover{
    background-color: #D9D9D9;
  }
  &--bigger{
    padding: 12px 20px;
    background: #D9D9D9;
    &:hover{
      background-color: #D1D1D1;
    }
  }
}
</style>
