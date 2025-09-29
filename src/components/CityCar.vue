<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  city: String,
})
</script>

<template>
  <div class="city-card">
    <h3>{{ props.city }}</h3>
  </div>
</template>
<style scoped></style>
