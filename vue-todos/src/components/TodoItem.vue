<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input type="checkbox" @change="todo.completed = !todo.completed" />
      <strong>{{ index+1 }}</strong>
      {{ todo.title | upperCase}}
    </span>
    <button class="rm" @click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number
  },
  filters: {
    upperCase(value) {
        console.log(value);
        return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
