# 🌍 Rutas Viajes

**Rutas Viajes** es una aplicación web interactiva que te permite explorar destinos de viaje por toda Europa. Descubre ciudades, visualiza su ubicación en mapas interactivos, consulta precios promedio y opciones de transporte disponibles.

## ✨ Características

- 🗺️ **Mapas interactivos** con Leaflet y OpenStreetMap
- 🏙️ **Exploración de ciudades** europeas con información detallada
- 💰 **Precios promedio** de viaje en euros
- 🚌 **Opciones de transporte** disponibles para cada destino
- 🖼️ **Imágenes dinámicas** de ciudades mediante Unsplash API
- 📱 **Diseño responsive** adaptado a móviles y tablets
- 🎨 **Interfaz moderna** con la fuente Audiowide

## 🛠️ Tecnologías

- **[Vue 3](https://vuejs.org/)** - Framework progresivo de JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[Vue Router](https://router.vuejs.org/)** - Enrutamiento oficial de Vue
- **[Pinia](https://pinia.vuejs.org/)** - Gestión de estado
- **[Leaflet](https://leafletjs.com/)** - Biblioteca de mapas interactivos
- **[@vue-leaflet/vue-leaflet](https://vue-leaflet.github.io/)** - Integración de Leaflet con Vue 3
- **[Unsplash API](https://unsplash.com/developers)** - Imágenes de alta calidad

## 📋 Requisitos previos

- **Node.js**: `^20.19.0` o `>=22.12.0`
- **pnpm**: Gestor de paquetes recomendado

## 🚀 Instalación

1. **Clona el repositorio**:

   ```sh
   git clone https://github.com/tu-usuario/rutas-viajes.git
   cd rutas-viajes
   ```

2. **Instala las dependencias**:

   ```sh
   pnpm install
   ```

3. **Configura las variables de entorno** (opcional):

   Crea un archivo `.env` basado en `.env.example`:

   ```sh
   cp .env.example .env
   ```

   Añade tu API key de Unsplash para obtener imágenes de mejor calidad:

   ```
   VITE_UNSPLASH_ACCESS_KEY=tu_api_key_aqui
   ```

## 💻 Uso

### Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```sh
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`

### Producción

Compila y minifica para producción:

```sh
pnpm build
```

Previsualiza la build de producción:

```sh
pnpm preview
```

### Linting y formato

Ejecuta ESLint para verificar el código:

```sh
pnpm lint
```

Formatea el código con Prettier:

```sh
pnpm format
```

## 📁 Estructura del proyecto

```
rutas-viajes/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── views/        # Vistas de las páginas
│   ├── router/       # Configuración de rutas
│   ├── stores/       # Stores de Pinia
│   ├── assets/       # Assets (imágenes, estilos)
│   └── main.js       # Punto de entrada
├── .env.example      # Ejemplo de variables de entorno
└── package.json      # Dependencias y scripts
```

## 🎯 Funcionalidades principales

### Búsqueda de ciudades

Explora más de 25 ciudades europeas incluyendo Berlín, París, Londres, Roma, Ámsterdam y muchas más.

### Visualización en mapa

Cada ciudad se muestra en un mapa interactivo con su ubicación exacta mediante coordenadas GPS.

### Información detallada

- Ubicación geográfica (latitud/longitud)
- Precio promedio de viaje
- Medios de transporte disponibles
- Imágenes representativas

## 🤝 Configuración IDE recomendada

- **[VSCode](https://code.visualstudio.com/)**
- **[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)** (desactiva Vetur si lo tienes instalado)

## 📄 Licencia

Este proyecto es privado y está en desarrollo.

## 🙏 Agradecimientos

- Imágenes proporcionadas por [Unsplash](https://unsplash.com/)
- Mapas de [OpenStreetMap](https://www.openstreetmap.org/)
- Iconografía de [Leaflet](https://leafletjs.com/)
