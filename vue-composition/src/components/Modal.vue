<template>
  <teleport to=".modals-container">
    <div v-if="modelValue" class="modal">
      <h2>{{ title }}</h2>
      <slot></slot>
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>Username is : {{ userData.username }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { inject } from 'vue';


const userData = inject('userData')

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'No title specified',
  },
})

const emit = defineEmits(['update:modelValue', 'hideModal'])

const handleButtonClick = () => {
  emit('update:modelValue', false)
}

// const handleButtonClick = () => {
//   emit('hideModal')
// }
</script>

<!-- <script>
export default {
    emits: ['hideModal'],
    props: {
        title: {
            type: String,
            default: 'No title specified'
        }
    }
}
</script> -->

<style scoped>
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: beige;
  padding: 10px;
  color: black;
  z-index: 1;
}
</style>
