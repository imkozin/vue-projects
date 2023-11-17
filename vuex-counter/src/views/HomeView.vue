<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CounterVue/>
    <CounterSquaredVue/>
    <ButtonsVue/>
    <ColorCodeVue/>
  </div>
</template>

<script>
import ButtonsVue from '../components/Buttons.vue'
import ColorCodeVue from '../components/ColorCode.vue'
import CounterVue from '../components/Counter.vue'
import CounterSquaredVue from '../components/CounterSquared.vue'

export default {
  name: 'HomeView',
  components: {
    CounterVue,
    CounterSquaredVue,
    ButtonsVue,
    ColorCodeVue
  },
}
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
