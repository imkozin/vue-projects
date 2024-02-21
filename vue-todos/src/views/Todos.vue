
import { filter } from 'vue/types/umd';

import { filter } from 'vue/types/umd';

import { computed } from 'vue';

import { filter } from 'vue/types/umd';
<template>
  <div id="app">
    <h2>ToDo Application</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      :todos="filteredTodos"
      v-else-if="filteredTodos.length"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  computed: {
    filteredTodos() {
        if (this.filter === 'all') {
            return this.todos
        }

        if (this.filter === 'completed') {
            return this.todos.filter(t => t.completed)
        }

        if (this. filter === 'not-completed') {
            return this.todos.filter(t => !t.completed)
        }
    }
  },
//   watch: {
//     filter(value) {
//         console.log(value);
//     }
//   },
  components: {
    TodoList,
    AddTodo,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 1000)
      })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
  },
}
</script>

<style></style>
