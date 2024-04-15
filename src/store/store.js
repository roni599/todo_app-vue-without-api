import { createStore } from 'vuex';

const store = createStore({
    state: {
        bookList: ['A', 'B', 'C']
    },
    getters:{
        totalBook(state){
            return state.bookList.length
        }
    },
    mutations: {
        ADD_BOOK(state, data) {
            state.bookList.push(data);
        },
        DELETE_BOOK(state, index) {
            state.bookList.splice(index, 1);
        },
        UPDATE_BOOK(state, data) {
            state.bookList[data.index] = data.newItem
        }
    },
    actions: {
        addBook({ commit }, data) {
            commit('ADD_BOOK', data);
        },
        deleteBook({ commit }, index) {
            commit('DELETE_BOOK', index);
        },
        updateBook({ commit }, data) {
            commit('UPDATE_BOOK', data)
        }
    }
});

export default store;