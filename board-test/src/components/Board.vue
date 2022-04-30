<template>
  <div class="board">
    <h2>Board</h2>
    <div class="board__container">
      <boardCol
        class="board__column"
        v-for="(column, index) in getBoard"
        :key="index"
        :text="column.title"
        :cards="column.rows"
        :cardId="String(index)"
      ></boardCol>
      <addButton class="board__btn" @click.native="addColumn()"></addButton>
    </div>
  </div>
</template>

<script lang="js">
import boardCol from './BoardCol.vue'
import addButton from '@/components/buttons/AddButton.vue'
  export default {
    components:{
      boardCol,
      addButton
    },
    props:{
    },
    methods:{
      addColumn(){
        this.$store.commit('addColumn')
      }
    },
    computed:{
      getBoard(){
        return this.$store.getters.getBoard
      }
    },
  }
  
</script>

<style lang="scss">
.board {
  padding: 24px 27px;
  font-family: "Open Sans";
  color: #000000;

  &__container {
    margin-top: 20px;
    //overflow-x: scroll;
    display: flex;
  }
  &__column {
    &:not(:first-child) {
      margin-left: 14px;
    }
  }
  &__btn {
    height: 33px;
    margin-left: 15px;
  }
}
</style>
