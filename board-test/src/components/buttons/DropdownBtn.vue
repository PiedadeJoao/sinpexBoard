<template>
  <div class="dropdown">
    <dots @click="toogleDropdown()" class="dropdown__btn"></dots>
    <div :id="'drop' + id" class="dropdown__content">
      <a
        @click="deleteColumn()"
        class="dropdown__option"
        :title="!empty ? 'you cannot delete columns with tasks' : ''"
        :class="{ 'dropdown__option--disabled': !empty }"
        >delete</a
      >
    </div>
  </div>
</template>

<script lang="js">
    import dots from '@/assets/svg/dots.svg'
  export default {
      data(){
        return {
          
        }
    },
    components:{
        dots
    },
    props:{
        id: String,
        empty: Boolean
    },
    methods: {
        closeDropdowns(){
            //close all dropdowns opened
            let elements = document.getElementsByClassName("dropdown__content")

            for(var i = 0; i < elements.length; i++){
                if(elements[i].classList.contains("dropdown__content--show") && i != this.id)
                    elements[i].classList.remove("dropdown__content--show")
            }
        },
        toogleDropdown(){
            document.getElementById('drop' + this.id).classList.toggle("dropdown__content--show")
            this.closeDropdowns()
        },
        deleteColumn(){
            if(!this.empty)
                return
            //validar se tem tarefas
            this.show = false
            this.$store.commit("deleteColumn", this.id)
        },
    },
  }
  
</script>

<style lang="scss">
.dropdown {
  &__btn {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }
  &__content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    z-index: 1;
    &--show {
      display: block;
    }
  }
  &__option {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-family: "Open Sans";
    font-style: normal;
    font-size: 14px;
    &:hover {
      background-color: #ededed;
    }
    &--disabled {
      &:hover {
        background-color: white;
      }
      opacity: 0.4;
    }
  }
}
</style>
