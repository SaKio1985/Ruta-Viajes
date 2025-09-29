<script>
// ✅ Importamos la imagen desde src/assets
import bannerImage from '@/assets/flixbus-urban.jpg'
import { useRouter } from 'vue-router'

export default {
  name: 'HeroBanner',
  setup() {
    // 👇 Inyectamos el router
    const router = useRouter()

    return {
      bannerImage,
      isButtonClicked: false,
      handleClick() {
        this.isButtonClicked = true
        // 👇 Redirigimos después de un pequeño delay (para que se vea la animación)
        setTimeout(() => {
          router.push({ name: 'busqueda' })
        }, 300) // 300ms = duración aproximada de la animación
      },
      resetAnimation() {
        this.isButtonClicked = false
      },
    }
  },
}
</script>

<template>
  <div class="hero-banner">
    <!-- Contenedor principal con imagen de fondo -->
    <div class="hero-background" :style="{ backgroundImage: `url(${bannerImage})` }">
      <!-- Capa de oscurecimiento para mejorar contraste -->
      <div class="overlay"></div>

      <!-- Contenido centrado -->
      <div class="hero-content">
        <!-- Título principal -->
        <h1>Viaja barato en autobús</h1>

        <!-- Texto descriptivo -->
        <p>
          FlixBus es una compañía alemana fundada en 2013 que ofrece servicios de transporte
          interurbano en autobús de bajo costo, operando en Europa, Norteamérica, Brasil y Chile,
          con una red de más de 2.500 destinos en 40+ países. Su modelo de negocio se basa en
          colaboraciones con empresas locales de autobuses (sin poseer flota propia), enfatizando
          viajes asequibles, cómodos, sostenibles y tecnológicamente avanzados mediante una app y
          reservas en línea, con un enfoque en precios dinámicos y comodidades como WiFi y
          seguimiento en tiempo real.
        </p>

        <!-- ✅ BOTÓN "BUSCAR CIUDAD" (reemplaza "Buscar rutas") -->
        <button
          class="city-search-button"
          :class="{ clicked: isButtonClicked }"
          @click="handleClick"
          @animationend="resetAnimation"
        >
          Buscar ciudad
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-banner {
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.hero-background {
  height: 650px; /* Altura generosa para contenido */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Capa oscura semi-transparente */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Contenido encima del overlay */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 900px;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 0 40px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

/* ✅ ESTILO DEL BOTÓN "BUSCAR CIUDAD" */
.city-search-button {
  background-color: var(--dark-moss-green, #2c8a0e);
  color: white;
  width: 400px;
  height: 100px;
  font-family: 'Audiowide', sans-serif;
  font-size: 30px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
  will-change: transform;
}

.city-search-button:hover {
  background-color: var(--dark-moss-green, #22700b);
}

/* ✅ ANIMACIÓN AL HACER CLIC */
.city-search-button.clicked {
  animation: pulse 0.6s ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: scale(1);
  }
}

/* RESPONSIVO: En pantallas pequeñas, hacemos el botón más adaptable */
@media (max-width: 768px) {
  .hero-background {
    height: 500px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .city-search-button {
    width: 90%;
    max-width: 400px;
    height: 80px;
    font-size: 24px;
  }

  .notification {
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }
}
</style>
