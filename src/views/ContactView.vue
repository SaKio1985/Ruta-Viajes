<template>
  <div class="contact-view">
    <div class="hero-section">
      <h1>Contáctanos</h1>
      <p class="subtitle">¿Tienes preguntas o sugerencias? ¡Estamos aquí para ayudarte!</p>
    </div>

    <div class="content-section">
      <div class="contact-card">
        <div class="contact-info">
          <div class="info-item">
            <div class="icon">📧</div>
            <div>
              <h3>Correo electrónico</h3>
              <p>hola@gocity.com</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">📱</div>
            <div>
              <h3>Redes sociales</h3>
              <p>@gocity_app (en todas las plataformas)</p>
            </div>
          </div>

          <div class="info-item">
            <div class="icon">📍</div>
            <div>
              <h3>Sede</h3>
              <p>Madrid, España (trabajamos remotamente en Europa)</p>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <h2>Envíanos un mensaje</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" v-model="form.name" required />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>

            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>

            <button type="submit" class="submit-btn">Enviar mensaje</button>
          </form>
        </div>
      </div>

      <div v-if="showSuccess" class="success-message">
        ¡Gracias por tu mensaje! Te responderemos pronto.
      </div>
      <div class="cta-section">
        <router-link to="/busqueda" class="btn-primary">Explorar ciudades</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const showSuccess = ref(false)

const submitForm = () => {
  // En una app real, aquí enviarías los datos a un backend
  console.log('Formulario enviado:', form.value)

  // Limpiar formulario
  form.value = { name: '', email: '', message: '' }
  showSuccess.value = true

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-view {
  min-height: 80vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(135deg, #e9f9de 0%, #5bcf00 100%);
  padding: 40px 20px;
  border-radius: 16px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.hero-section h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.icon {
  font-size: 1.5rem;
  color: #5bcf00;
}

.contact-form {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.submit-btn {
  background: #5bcf00;
  color: #ffffff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: filter 0.2s;
}

.submit-btn:hover {
  filter: brightness(0.95);
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .contact-card {
    grid-template-columns: 1fr;
  }
}

h1,
h2 {
  font-family: 'Audiowide', sans-serif;
}

.cta-section {
  display: flex;
  justify-content: center;
  margin: 30px 0 0;
}

.btn-primary {
  background-color: #5bcf00;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  font-family: 'Audiowide', sans-serif;
  font-size: 1rem;
}

.btn-primary:hover {
  filter: brightness(0.95);
}
</style>
