<template>
  <div class="about-view">
    <div class="hero-section">
      <h1>Sobre GoCity</h1>
      <p class="subtitle">Tu compañero de viaje inteligente</p>
    </div>

    <div class="how-it-works">
      <div class="step">
        <div class="step-icon">🔎</div>
        <h3>Descubre</h3>
        <p>Busca ciudades y puntos de interés.</p>
      </div>
      <div class="step">
        <div class="step-icon">🗺️</div>
        <h3>Explora</h3>
        <p>Consulta mapas, fotos e info útil.</p>
      </div>
      <div class="step">
        <div class="step-icon">🧭</div>
        <h3>Planifica</h3>
        <p>Guarda ideas y prepara tu ruta.</p>
      </div>
    </div>

    <div class="content-section">
      <div class="card">
        <div class="card-icon">🗺️</div>
        <h2>Nuestra misión</h2>
        <p>
          Hacer que descubrir ciudades sea sencillo, accesible y emocionante para todos los
          viajeros, desde principiantes hasta expertos.
        </p>
      </div>

      <div class="card">
        <div class="card-icon">✨</div>
        <h2>Qué ofrecemos</h2>
        <ul class="features-list">
          <li>Mapas interactivos con puntos de interés</li>
          <li>Fotos reales de cada destino</li>
          <li>Información actualizada de transporte</li>
          <li>Guías prácticas para tu viaje</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-icon">🌱</div>
        <h2>Nosotros</h2>
        <p>
          Un equipo de viajeros apasionados que creó GoCity para resolver sus propios problemas al
          planificar viajes. ¡Ahora queremos ayudarte a ti!
        </p>
      </div>
    </div>

    <div class="cta-section">
      <router-link to="/busqueda" class="btn-primary">Empezar a planear</router-link>
    </div>
  </div>
</template>

<style scoped>
.about-view {
  min-height: 80vh;
  background-color: #f8f9fa;
  padding: 40px 20px;
}

.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

.hero-section h1 {
  color: #5bcf00;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

h1, h2 {
  font-family: 'Audiowide', sans-serif;
}

.how-it-works {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto 30px;
}

.step {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.step h3 {
  margin: 8px 0 6px;
}

.step-icon {
  font-size: 1.8rem;
}

.content-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #5bcf00;
}

.features-list {
  padding-left: 20px;
}

.features-list li {
  margin-bottom: 10px;
}

.cta-section {
  display: flex;
  justify-content: center;
  margin: 35px 0 10px;
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
