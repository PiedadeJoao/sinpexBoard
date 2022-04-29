<template>
    <section class="UIelements">
        <addButton :text="'Create Case'"></addButton>
        <hr/>
        <hr/>
        <addButton></addButton>
        <hr/>
        <hr/>
        <activity :percentage="'20'" :title="'Case 1'" :subtitle="'Updated 3 days ago'"></activity>
        <dropdownBtn id="drop1"></dropdownBtn>
        <hr/>
        <hr/>
        <boardCol :text="'TODO'" :cards="columns" :btn="true" :cardId="'0'"></boardCol>
    </section>
</template>

<script lang="js">
import addButton from './components/buttons/AddButton.vue'
import activity from './components/Activity.vue'
import dropdownBtn from './components/buttons/DropdownBtn.vue'
import boardCol from './components/BoardCol.vue'

  export default {
    components:{
        addButton,
        activity,
        dropdownBtn,
        boardCol
    },
    data(){
        return {
            columns: [{
                title: 'Case 1',
                percentage: "20",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 1',
                percentage: "30",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 2',
                percentage: "20",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 2',
                percentage: "60",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 3',
                percentage: "20",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 3',
                percentage: "70",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 4',
                percentage: "20",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 3',
                percentage: "80",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 3',
                percentage: "70",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 4',
                percentage: "20",
                subtitle: 'Updated 3 days ago'
            },
            {
                title: 'Case 3',
                percentage: "80",
                subtitle: 'Updated 3 days ago'
            },],
        }
    },
  }
  
</script>

<style lang="scss">
    .UIelements{
        border: 5px solid grey;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
