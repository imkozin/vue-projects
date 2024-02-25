<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show Modal</button>

    <teleport to=".modals-container">
        <div class="modal" v-if="showModal">
          <h2>This is a Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            similique!
          </p>
          <button @click="showModal = false">Hide Modal</button>
        </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

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
