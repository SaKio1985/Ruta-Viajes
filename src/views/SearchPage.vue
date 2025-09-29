<script setup>
import CityCar from '@/components/CityCar.vue'
import { useCityStore } from '@/stores/cities'
import { ref } from 'vue'
import { onMounted } from 'vue'

const cityStore = useCityStore()
const citiesNames = ref([])
console.log(citiesNames.value)
const selectedCity = ref('')

onMounted(() => {
  /*   cityStore.getCities() */
  citiesNames.value = cityStore.cities.map((city) => city.name)
})

const handleClick = (city) => {
  selectedCity.value = city
  console.log(selectedCity.value)
}
</script>

<template>
  <div class="container">
    <h2>Elige tu ciudad</h2>
    <div class="cities-container">
      <button v-for="city in citiesNames" :key="city" @click="handleClick(city)">{{ city }}</button>
    </div>
    <div>
      <CityCar :city="selectedCity" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--pistachio);
  font-family: 'Audiowide', sans-serif;
  font-size: 13px;
}
.cities-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 30px;
  background-color: var(--pistachio);
}

button {
  background-color: var(--dark-moss-green);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: var(--pistachio);
  cursor: pointer;
}

button:hover {
  background-color: var(--dark-moss-green);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
</style>
