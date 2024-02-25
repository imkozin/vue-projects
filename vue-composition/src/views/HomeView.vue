<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
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
      <input v-model="counterData.title" type="text" v-autofocus/>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
} from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'

// const counter = ref(0),
//   counterTitle = ref('My Counter')
const appTitle = 'My Amazing Counter App'

const appTitleRef = ref(null)

const counterData = reactive({
  count: 0,
  title: 'My Counter',
})


watch(
  () => counterData.count,
  (newCount, oldCount) => {
    if (newCount == 20) {
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
  nextTick(() => {
    console.log(`do smth when counter has been `);
  })
  // counter.value++
  // counterData.count++
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  // counter.value--
  // counterData.count--
  counterData.count -= amount
}



onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
  console.log(`The app is ${appTitleRef.value.offsetWidth} px wide`);
})

// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount')
// })

// onUnmounted(() => {
//   console.log('onUnmounted')
// }) 

// onActivated(() => {
//   console.log('onActivated')
// })

// onDeactivated(() => {
//   console.log('onDeactivated')
// })

// onBeforeUpdate(() => {
//   console.log('onBeforeUpdate');
// })

// onUpdated(() => {
//   console.log('onUpdated');
// })
</script>

<!--  <script>
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
  },
  mounted() {
    console.log('mounted');
  },
  unmounted() {
    console.log('unmounted');
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
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
