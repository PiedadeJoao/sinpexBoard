<template>
    <div class="board-column">
      <div class="board-column__head">
        <div class="board-column__input-container">
          <input @keypress="resizeInput()" type="text" :id="cardId + 'input'" v-model="textChanged"  class="board-column__input" :class="{'board-column__input--disabled': !writable}"/>
          <div :id="cardId + 'input-size'" class="board-column__size-input">{{textChanged}}</div>
          <pencil @click="edit()" class="board-column__pencil"/>
        </div>
        <dropdownBtn :id="'drop' + cardId"></dropdownBtn>
      </div>
      <div class="board-column__container">
        <activity class="board-column__activity" v-for="(el, index) in cards" :key="index" 
        :percentage="el.percentage" :title="el.title" :subtitle="el.subtitle">
        </activity>
        <addButton class="board-column__btn" :text="'Create Case'"></addButton>
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
          textChanged: 'default'
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
      btn: Boolean,
      cardId: String
    },

    methods:{
      resizeInput() {
        var input = document.getElementById(this.cardId + 'input');
        var inputSize = document.getElementById(this.cardId + 'input-size');
        console.log("inputSize: ", inputSize.width)
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
      this.textChanged = this.text
      this.resizeInput();
    },

    created(){

    }
  }
  
</script>

<style lang="scss">
  .board-column{
    width: 300px;
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
    }
    &__pencil{
      cursor: pointer;
    }
  }
</style>
