import axios from "axios"

export default {
  state: {
    todos: [],
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
  },
  mutations: {
    setTodos(state, todos) {
      return (state.todos = todos)
    },
    newTodo(state, todo) {
      state.todos.unshift(todo)
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id)
    },
    updateTodo(state, updated) {
      const index = state.todos.findIndex(t => t.id === updated.id)

      if(index !== -1) {
        state.todos.splice(index, 1, updated)
      }
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      commit('setTodos', res.data)
    },
    async addTodo({ commit }, title) {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { title, completed: false }
      )

      commit('newTodo', res.data)
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
      // Get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      )

      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      )

      commit('setTodos', res.data)
    },
    async updateTodo({ commit }, updated) {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updated.id}`, updated
      )

      console.log(res.data);

      commit('updateTodo', res.data)
    },
  },
}