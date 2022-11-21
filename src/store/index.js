import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        title: "Go to work",
        completed: false
      },
      {
        title: "Gym after work",
        completed: false
      },
    ]

  },
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },
  mutations: {
    new_todo(state, todoItem) {
        state.todos.push({
          title: todoItem,
          completed: false
        });
    },
    deleteTodo(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1)
    },
    toggle_todo(state, todoItem) {
      todoItem.completed = !todoItem.completed
    }
  },
  actions: {
    addNewTodo({commit}, todoItem) {
      commit('new_todo', todoItem);
    },
    deleteBtn({commit}, todoItem) {
      commit('deleteTodo', todoItem);
    },
    toggleTodo({commit}, todoItem) {
      commit('toggle_todo', todoItem)
    }
  },
  modules: {
  }
})
