<script setup>
import { ref, onMounted, watch } from 'vue'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

// ⚠️ IMPORTANTE: Corrección de íconos para Vite + Vue 3
import { Icon } from 'leaflet'

// Eliminar la configuración predeterminada que causa el error
delete Icon.Default.prototype._getIconUrl

// Reasignar las rutas correctas a los íconos
Icon.Default.mergeOptions({
  iconRetinaUrl: import.meta.env.BASE_URL + 'leaflet/marker-icon-2x.png',
  iconUrl: import.meta.env.BASE_URL + 'leaflet/marker-icon.png',
  shadowUrl: import.meta.env.BASE_URL + 'leaflet/marker-shadow.png',
})

// Props
const props = defineProps({
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
})

// Estado del mapa
const zoom = ref(13)
const center = ref([props.latitude, props.longitude])

// Actualizar centro si cambian las coordenadas
watch(
  () => [props.latitude, props.longitude],
  ([lat, lng]) => {
    center.value = [lat, lng]
  },
)

onMounted(() => {
  // Opcional: acceder al mapa real si necesitas funcionalidades avanzadas
})
</script>

<template>
  <div style="height: 400px; width: 100%">
    <l-map ref="map" :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <!-- Marcador en la ubicación seleccionada -->
      <l-marker v-if="latitude && longitude" :lat-lng="[latitude, longitude]"></l-marker>
    </l-map>
  </div>
</template>

<style scoped>
.leaflet-container {
  background: #f5f5f5;
}
</style>
