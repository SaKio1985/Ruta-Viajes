import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('cities', () => {
  const cities = ref([])
  const getCities = () => {
    const URL =
      'https://global.api.flixbus.com/cms/cities/fe1b9252-3adc-436c-bf8a-c4396bec60e6/reachable?language=es&country=ES&limit=25'

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result)
        cities.value = data.result
      })
  }

  return { cities, getCities }
})
