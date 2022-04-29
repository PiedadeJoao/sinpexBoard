import { createStore } from 'vuex'
export const store = createStore({
    state :{
        ola: 'ola mundo'
    },
    mutations: {
    },
    getters:{
        teste(state){
            return state.ola
        }
    },
    dispatch:{

    }
  })