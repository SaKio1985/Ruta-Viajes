<script setup>
import { useCityStore } from '@/stores/cities'
import { ref } from 'vue'
import { onMounted } from 'vue'
import MapDisplay from '@/components/MapDisplay.vue'

const cityStore = useCityStore()
const citiesNames = ref([])
console.log(citiesNames.value)
const selectedCity = ref(null)
const cityImages = ref({})

// Correcciones de nombres para los botones
const cityNameCorrections = {
  Lila: 'Lille',
}

onMounted(() => {
  /*   cityStore.getCities() */
  citiesNames.value = cityStore.cities.map((city) => {
    // Corregir nombres si es necesario
    return cityNameCorrections[city.name] || city.name
  })
})

const handleClick = async (cityName) => {
  // Buscar el nombre original si fue corregido
  const originalName =
    Object.keys(cityNameCorrections).find((key) => cityNameCorrections[key] === cityName) ||
    cityName

  // Buscar la ciudad completa en el store usando el nombre original
  const city = cityStore.cities.find((c) => c.name === originalName)

  // Pero mostrar el nombre corregido
  if (city) {
    selectedCity.value = { ...city, name: cityName }
  }

  // Precargar la imagen si no está en caché
  if (!cityImages.value[cityName]) {
    const imageUrl = await fetchCityImage(cityName)
    cityImages.value[cityName] = imageUrl
  }
}

const cityTranslations = {
  Berlín: 'Berlin Germany city monuments',
  París: 'Paris France city monuments',
  Londres: 'London England city monuments',
  Hamburgo: 'Hamburg Germany city monuments',
  Lisboa: 'Lisbon Portugal city monuments',
  Roma: 'Rome Italy city monuments',
  Milán: 'Milan Italy city monuments',
  Ámsterdam: 'Amsterdam Netherlands city monuments',
  Bruselas: 'Brussels Belgium city monuments',
  Colonia: 'Cologne Germany city monuments',
  Stuttgart: 'Stuttgart Germany tower',
  Oporto: 'Porto Portugal city monuments',
  Lyon: 'Lyon France city monuments',
  Turín: 'Turin Italy city monuments',
  Zúrich: 'Zurich Switzerland city monuments',
  Lille: 'Lille France city monuments',
  Dortmund: 'Dortmund Germany city monuments',
  Friburgo: 'Freiburg Germany city monuments',
  Marsella: 'Marseille France city monuments',
  Bristol: 'Bristol England city monuments',
  Rotterdam: 'Rotterdam Netherlands city monuments',
  Amberes: 'Antwerp Belgium city monuments',
  Toulouse: 'Toulouse France city monuments',
  Grenoble: 'Grenoble France Alps',
  Coímbra: 'Coimbra Portugal city monuments',
}

const fetchCityImage = async (cityName) => {
  const searchQuery = cityTranslations[cityName] || `${cityName} city`
  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    // Fallback a source.unsplash.com si no hay API key
    return `https://source.unsplash.com/400x400/?${encodeURIComponent(searchQuery)}`
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(searchQuery)}&client_id=${accessKey}&orientation=squarish`,
    )
    const data = await response.json()
    return (
      data.urls?.small || `https://source.unsplash.com/400x400/?${encodeURIComponent(searchQuery)}`
    )
  } catch (error) {
    console.error('Error fetching Unsplash image:', error)
    return `https://source.unsplash.com/400x400/?${encodeURIComponent(searchQuery)}`
  }
}

const getCityImageUrl = (cityName) => {
  // Devolver la imagen del caché o una imagen por defecto
  return (
    cityImages.value[cityName] ||
    'https://via.placeholder.com/400x400/5bcf00/ffffff?text=Cargando...'
  )
}

const getTransports = (city) => {
  if (city.transportation_category && city.transportation_category.length > 0) {
    return city.transportation_category.join(', ')
  }
  return 'No disponible'
}

const getPrice = (city) => {
  if (city.price && city.price.EUR) {
    return city.price.EUR.formatted_avg
  }
  return 'No disponible'
}
</script>

<template>
  <div class="container">
    <h2>Elige tu ciudad</h2>
    <div class="cities-container">
      <button v-for="city in citiesNames" :key="city" @click="handleClick(city)">{{ city }}</button>
    </div>
    <div v-if="selectedCity" class="city-details">
      <div class="city-info">
        <div class="city-image">
          <img :src="getCityImageUrl(selectedCity.name)" :alt="selectedCity.name" />
        </div>
        <div class="details-text">
          <h3>{{ selectedCity.name }}</h3>
          <p>
            <strong>Ubicación:</strong> Lat: {{ selectedCity.location?.lat || 'N/A' }} Long:
            {{ selectedCity.location?.lon || 'N/A' }}
          </p>
          <p><strong>Precio promedio:</strong> {{ getPrice(selectedCity) }}</p>
          <p><strong>Transportes:</strong> {{ getTransports(selectedCity) }}</p>
        </div>
      </div>
      <MapDisplay :latitude="selectedCity.location?.lat" :longitude="selectedCity.location?.lon" />
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
  height: 80vh;
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

.city-details {
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 20px;
}

.city-info {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--dark-moss-green);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.city-image {
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid var(--dark-moss-green);
}

.city-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.details-text {
  flex: 1;
  color: var(--dark-moss-green);
}

.details-text h3 {
  margin: 0 0 15px 0;
  font-size: 24px;
  color: var(--dark-moss-green);
}

.details-text p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.6;
}

.details-text strong {
  color: var(--dark-moss-green);
}
</style>
