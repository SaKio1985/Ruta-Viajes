<script setup>
import FlixBusFooter from './components/FlixBusFooter.vue'
import Header from './components/Header.vue'
import { useCityStore } from './stores/cities'
import { onMounted } from 'vue'

const cityStore = useCityStore()
onMounted(() => {
  cityStore.getCities()
})
</script>

<template>
  <div class="app-layout">
    <Header />
    <main class="main-content">
      <router-view />
      <!-- ← Aquí se renderiza la página actual (HomePage.vue, SearchPage.vue, etc.) -->
    </main>
    <FlixBusFooter />
  </div>
</template>

<style scoped>
.app-header {
  background-color: #5bcf00; /* Verde FlixBus */
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Audiowide', sans-serif;
  font-size: 35px;
  font-weight: 400;
}

button {
  background-color: var(--dark-moss-green);
  width: 400px;
  height: 100px;
  font-family: 'Audiowide', sans-serif;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  border-radius: 10px;
  border: none;
}
</style>
