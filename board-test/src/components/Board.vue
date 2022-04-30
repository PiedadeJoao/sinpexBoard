<template>
  <div class="board" id="board">
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
      },
      closeDropdowns(){
            //close all dropdowns opened
            let elements = document.getElementsByClassName("dropdown__content")

            for(var i = 0; i < elements.length; i++){
                if(elements[i].classList.contains("dropdown__content--show"))
                    elements[i].classList.remove("dropdown__content--show")
            }
        },
    },
    computed:{
      getBoard(){
        return this.$store.getters.getBoard
      }
    },
    mounted(){
      //close dropdowns whereever user click
      board.addEventListener('click', function(){
        if(event.target.classList.contains('dropdown__option') || event.target.classList.contains('dropdown__dots-cont') || event.target.classList.contains('dots-hide') || event.target.classList.contains('dropdown__btn')){
          return
        }else{
          this.closeDropdowns()
        }
      }.bind(this))
    }
  }
  
</script>

<style lang="scss">
.board {
  padding: 24px 27px;
  font-family: "Open Sans";
  color: #000000;

  &__container {
    margin-top: 20px;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
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
