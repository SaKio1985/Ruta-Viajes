<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>¡Ups! La ciudad que buscas no está en nuestro mapa</p>

      <div class="map-illustration">
        <div class="map-pin">📍</div>
        <div class="map-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <p class="suggestion">¿Quieres explorar una ciudad real?</p>

      <router-link to="/" class="home-btn"> Volver al inicio </router-link>

      <div class="city-suggestions">
        <h3>Destinos populares:</h3>
        <div class="suggestions-grid">
          <router-link :to="{ name: 'busqueda', query: { q: 'paris' } }" class="suggestion-card">
            <span>Paris</span>
            <img
              src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Paris"
              loading="lazy"
            />
          </router-link>

          <router-link :to="{ name: 'busqueda', query: { q: 'berlin' } }" class="suggestion-card">
            <span>Berlín</span>
            <img
              src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Berlin"
              loading="lazy"
            />
          </router-link>

          <router-link :to="{ name: 'busqueda', query: { q: 'roma' } }" class="suggestion-card">
            <span>Roma</span>
            <img
              src="https://images.pexels.com/photos/2082102/pexels-photo-2082102.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Rome"
              loading="lazy"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
  padding: 40px 20px;
  display: flex;
  align-items: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 8rem;
  color: #5bcf00;
  margin: 0;
  line-height: 1;
}

p {
  font-size: 1.5rem;
  color: #6c757d;
  margin: 15px 0 40px;
}

.map-illustration {
  position: relative;
  height: 200px;
  margin: 30px auto;
  width: 200px;
}

.map-pin {
  font-size: 4rem;
  color: #5bcf00;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.map-dots {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
}

.map-dots span {
  width: 12px;
  height: 12px;
  background: #5bcf00;
  border-radius: 50%;
}

.home-btn {
  display: inline-block;
  background: #5bcf00;
  color: #ffffff;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition:
    filter 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
  margin: 20px 0;
}

.home-btn:hover {
  filter: brightness(0.95);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.city-suggestions {
  margin-top: 50px;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.suggestion-card {
  display: block;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;
}

.suggestion-card:hover {
  transform: translateY(-5px);
}

.suggestion-card img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}

.suggestion-card span {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px;
  font-size: 0.9rem;
  text-align: center;
}

h1 {
  font-family: 'Audiowide', sans-serif;
}
</style>
