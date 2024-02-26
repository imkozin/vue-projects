<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">Show dark modals?
        <input type="checkbox" v-model="showDarkModals"
      /></label>
    </div>

    <button @click="showModal = true">Show Modal</button>

    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My Modal Title"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        similique!
      </p>
    </component>
  </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
import { ref } from 'vue'


const showDarkModals = ref(false)

const showModal = ref(false)
</script>
