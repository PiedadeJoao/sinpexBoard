import { createStore } from 'vuex'
export const store = createStore({
    //dummy content
    state: {
        board: [
            {
                title: 'todo', rows: [{
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
                }]
            },
            {
                title: 'in progress',
                rows: [{
                    title: 'Case 3',
                    percentage: "70",
                    subtitle: 'Updated 3 days ago'
                },]
            },
            {
                title: 'done',
                rows: [{
                    title: 'Case 4',
                    percentage: "80",
                    subtitle: 'Updated 3 days ago'
                },]
            },
            {
                title: 'archived',
                rows: [{
                    title: 'Case 5',
                    percentage: "90",
                    subtitle: 'Updated 3 days ago'
                },]
            }
        ]
    },
    mutations: {
        setName(state, obj){
            state.board[obj.index].title =  obj.newName
        },
        addColumn(state){
            const newColumn = {title:'...', rows: []}
            state.board.push(newColumn)
        },
        deleteColumn(state, index){
            state.board.splice(index, 1)
        },
        createTask(state, index){
            const newRow = {title:'New Case', percentage: "0",subtitle: 'Created right now'}
            state.board[index].rows.push(newRow)
        }
    },
    getters: {
        getBoard(state) {
            return state.board
        }
    }
})