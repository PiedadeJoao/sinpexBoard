<template>
  <div class="activity">
    <h5 class="activity__title">{{title}}</h5>
    <div class="activity__progress-bar">
      <span :style="'width: ' + percentage + '%'"></span>
    </div>
    <label class="activity__subtitle">{{subtitle}}</label>
  </div>
</template>

<script lang="js">
  export default {
    components:{
    },
    props:{
        percentage: String,
        title: String,
        subtitle: String
    }
  }
  
</script>

<style lang="scss">
.activity {
  padding: 14px 20px;
  background: #ffffff;
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  cursor: pointer;

  &:hover{
      background: #D9D9D9;
  }
  &__title {
    color: rgba(81, 81, 81, 1);
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }
  &__progress-bar {
    margin-top: 8px;
    position: relative;
    width: 200px;
    background: rgba(188, 188, 188, 0.2);
    border-radius: 38px;
    height: 6px;
    span {
      position: absolute;
      left: 0;
      height: 100%;
      top: 0;
      background-color: #42555A;
      border-radius: 38px;
    }
  }
  &__subtitle {
    margin-top: 10px;
    font-family: "Avenir";
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    color: #323232;
  }
}
</style>
