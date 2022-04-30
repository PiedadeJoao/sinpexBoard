<template>
    <div class="board-column">
      <div class="board-column__head">
        <div class="board-column__input-container">
          <input @keypress="resizeInput(true)" type="text" :id="cardId + 'input'" :value="text"  class="board-column__input" :class="{'board-column__input--disabled': !writable}"/>
          <div :id="cardId + 'input-size'" class="board-column__size-input">{{text}}</div>
          <pencil @click="edit()" class="board-column__pencil"/>
        </div>
        <dropdownBtn :id="cardId"></dropdownBtn>
      </div>
      <div class="board-column__container">
        <activity class="board-column__activity" v-for="(row, index) in cards" :key="index" 
        :percentage="row.percentage" :title="row.title" :subtitle="row.subtitle">
        </activity>
        <addButton @click.native="createTask()" v-if="cardId == 0" class="board-column__btn" :text="'Create Case'"></addButton>
      </div>
    </div>
</template>

<script lang="js">
import addButton from '@/components/buttons/AddButton.vue'
import activity from '@/components/Activity.vue'
import dropdownBtn from '@/components/buttons/DropdownBtn.vue'
import pencil from '@/assets/svg/pencil.svg'
  export default {
    data(){
        return {
          writable: false,
        }
    },
    components:{
      addButton,
      activity,
      dropdownBtn,
      pencil
    },
    props:{
      text: String,
      cards: Array,
      cardId: String
    },

    methods:{
      createTask(){
        console.log("entrei")
        this.$store.commit('createTask', this.cardId)
      },
      changeName(value){
        this.$store.commit('setName', {index: this.cardId, newName: value})
      },
      resizeInput(change) {
        var input = document.getElementById(this.cardId + 'input');
        var inputSize = document.getElementById(this.cardId + 'input-size');

        //change name
        if(change)
          this.changeName(input.value)

        //update size
        input.style.width = inputSize.offsetWidth + 10 + "px";
      },
      edit(){
        this.writable = !this.writable
        if(this.writable){
          document.getElementById(this.cardId + 'input').focus();
          document.getElementById(this.cardId + 'input').select();
        }
      }
    },

    mounted(){
      this.resizeInput(false);
    },
  }
  
</script>

<style lang="scss">
  .board-column{
    width: 300px;
    min-width: 300px;
    background: #F1F1F1;
    position: relative;
    border-radius: 8px;

    &__head{
      position: absolute;
      left: 0;
      top: 0;
      padding: 22px 16px;
      min-height: 52px;
      width: 100%;
      border-radius: 8px 8px 0px 0px;
      background: #F1F1F1;
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__container{
      height: 750px;
      padding: 0 5px;
      margin-top: 70px;
      margin-bottom: 10px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll; 
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__activity{
      margin-top: 5px;
    }

    &__btn{
      width: 100%;
      margin-top: 12px;
    }
    
    &__input{
      background-color: transparent;
      border: none;
      font-size: 14px;
      max-width: 230px;
      font-family: 'Open Sans';
      text-overflow: ellipsis;
      text-transform: uppercase;
      &--disabled{
        pointer-events: none;
      }
    }
    &__size-input{
      font-size: 14px;
      font-family: 'Open Sans';
      display: inline-block;
      visibility: hidden;
      height: 0px;
      position: absolute;
      text-transform: uppercase;
    }
    &__pencil{
      cursor: pointer;
    }
  }
</style>
