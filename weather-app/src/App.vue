<template>
  <div class="wrapper">
    <h1>Weather App</h1>
    <p>Find out weather in {{ city == '' ? " your city" : city}}</p>
    <input v-model="city" type="text" placeholder="Enter city name">
    <button v-if="city" @click="getWeather()">Get Info</button>
    <button disabled v-else>Enter city</button>
    <p class="error">{{ error }}</p>
    <div v-if="info !== null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeelsLike }}</p>
      <p>{{ showMaxTemp }}</p>
      <p>{{ showMinTemp }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      city: '',
      error: '',
      info: null
    }
  },
  computed: {
    showTemp() {
      return "Temperature: " + this.info.main.temp
    },
    showFeelsLike() {
      return "Feels like: " + this.info.main.feels_like
    },
    showMinTemp() {
      return "Min Temperature: " + this.info.main.temp_min
    },
    showMaxTemp() {
      return "Max Temperature: " + this.info.main.temp_max
    }
  },
  methods: {
    getWeather() {
      if(this.city.trim().length < 2) {
        this.error = 'City name is too short'
        return false
      }

      this.error = ''

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=084ef774bcff8445e50d6f2f3004f0a4`).then(res => this.info = res.data)
    }
  }
}
</script>

<style>
.wrapper {
  width: 900px;
  height: 500px;
  border-radius: 50px;
  padding: 20px;
  background-color: #1f0f24;
  text-align: center;
  color: #fff;
}

.error {
  color: #d03939;
}
.wrapper h1 {
  margin-top: 50px;
}

.wrapper p {
  margin-top: 20px;
}

.wrapper input {
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}

.wrapper input:focus {
  border-bottom-color: #6e2d7d;
}

.wrapper button {
  background: #e3bc4b;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  transition: transform 500ms ease;
  cursor: pointer;
}

.wrapper button:disabled {
  background: #746027;
  cursor: not-allowed;
}

.wrapper button:hover {
  transform: scale(1.1) translateY(-5px);
}
</style>
