<template>
    <div class="board-column">
      <div class="board-column__head">
        <div class="board-column__input-container">
          <input @keypress="resizeInput(true)" type="text" :id="cardId + 'input'" :value="text"  class="board-column__input" :class="{'board-column__input--disabled': !writable}"/>
          <div :id="cardId + 'input-size'" class="board-column__size-input">{{text}}</div>
          <pencil @click="edit()" class="board-column__pencil"/>
        </div>
        <dropdownBtn :empty="cards.length == 0 ? true : false" :id="cardId"></dropdownBtn>
      </div>
      <div class="board-column__container" :id="'col-' + cardId" @drop="onDrop($event, cardId)" @dragenter.prevent @dragover.prevent>
        <activity class="board-column__activity" v-for="(row, index) in cards" :key="index" 
          :percentage="row.percentage" :title="row.title" :subtitle="row.subtitle" :id="String(cardId + '-' + index)"
          draggable="true"
          @dragstart="startDrag($event, String(cardId + '-' + index), cardId, index)"
          >
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
      startDrag (event, id, colId, index) {
        event.dataTransfer.dropEffect = 'move'
        event.dataTransfer.effectAllowed = 'move'
        event.dataTransfer.setData('itemID', id)
        event.dataTransfer.setData('colId', colId)
        event.dataTransfer.setData('indexRow', index)
  		},
      getPositionOfList(x, y, index){
        let elements = document.getElementById('col-' + index).children;

        if(elements.length == 0)
          return 0
        
        let cordinatesCountY = 'x' 

        let indexToSwitch = 0

        for(var i  = 0; i < elements.length; i++){
          let h5 = elements[i].children[0]
          let cordinates = h5.getBoundingClientRect();
          
          if(cordinatesCountY == 'x'){
            cordinatesCountY = y - cordinates.bottom
            continue
          }
          if(cordinatesCountY > Math.abs(y - cordinates.bottom)){
            cordinatesCountY = y - cordinates.bottom
            indexToSwitch = i
          }
        }
        //check if add to top or bottom of element clicked
        if(cordinatesCountY < 0)
          return indexToSwitch - 1
        else
          return indexToSwitch
      },
  		onDrop (event, list) {
  			const itemID = event.dataTransfer.getData('itemID')
        const indexRow = event.dataTransfer.getData('indexRow')
  			const colId = event.dataTransfer.getData('colId')

        let indexToSetCard = this.getPositionOfList(event.x, event.y, list)
        //update state
        this.$store.commit('updateListsAfterDrop', {indexRow: indexRow, colId: colId, listIndex: list, indexToSetCard: indexToSetCard})
  		},
      createTask(){
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

        //update size && ellipsis when overflow
        input.style.width = inputSize.offsetWidth + 20 + "px";
        if(inputSize.offsetWidth + 14 >= 210)
          input.classList.add('board-column__input--overflow')
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
      text-transform: uppercase;
      
      &--overflow{
        text-overflow: ellipsis;
      }
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
