<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push({ name: 'home' })
}
</script>
<template>
  <header class="app-header">
    <button class="logo-button" @click="goToHome">FLIXBUS</button>
  </header>
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
  height: 10vh;
}
.logo-button {
  background: none;
  border: none;
  color: white;
  font-family: 'Audiowide', sans-serif;
  font-size: 35px;
  font-weight: 400;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: left;
}

.logo-button:hover {
  text-decoration: underline;
}
</style>
