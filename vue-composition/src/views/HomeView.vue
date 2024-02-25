<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'

// const counter = ref(0),
//   counterTitle = ref('My Counter')
const appTitle = 'My Amazing Counter App'

const counterData = reactive({
  count: 0,
  title: 'My Counter',
})

watch(() => counterData.count, (newCount, oldCount) => {
   if(newCount == 20) {
    alert('You reached 20')
   }
  }
)

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

const increaseCounter = (amount, e) => {
  console.log(e)
  // counter.value++
  // counterData.count++
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  // counter.value--
  // counterData.count--
  counterData.count -= amount
}
</script>

<!-- <script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myCompProp() {
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('new message')
    }
  }
}
</script> 
-->

<!-- <script >
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
}
</script> -->

<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script> -->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>
