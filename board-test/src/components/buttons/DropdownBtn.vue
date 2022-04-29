<template>
  <div :id="id + 'btn'" class="dropdown">
    <dots @click="toogleDropdown()" class="dropdown__btn"></dots>
    <div :id="id"  class="dropdown__content" :class="{'dropdown__content--show': show}">
        <a class="dropdown__option">delete</a>
    </div>
  </div>
</template>

<script lang="js">
    import dots from '@/assets/svg/dots.svg'
  export default {
    data(){
        return {
            show: false,
        }
    },
    components:{
        dots
    },
    props:{
        id: String
    },
    methods: {
        toogleDropdown(){
            this.show = !this.show
        }
    },
    mounted(){
        //close dropdown when click outside of dropdown
        document.addEventListener('click', function(event){
             
        }.bind(this))
    }
  }
  
</script>

<style lang="scss">
    .dropdown{
        &__btn{
            cursor: pointer;
            position: relative;
            display: inline-block;
        }
        &__content{
            display: none;
            position: absolute;
            background-color: white;
            min-width: 160px;
            overflow: auto;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            border-radius: 8px;
            z-index: 1;
            &--show{
                display: block;
            }
        }
        &__option{
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            cursor: pointer;
            font-family: 'Open Sans';
            font-style: normal;
            font-size: 14px;
            &:hover{
                background-color: #EDEDED;
            }
        }
    }
</style>
