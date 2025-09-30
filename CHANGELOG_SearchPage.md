# Cambios en SearchPage.vue - Visualización de Detalles de Ciudades

## 📅 Fecha
30 de septiembre de 2025

## 🎯 Objetivo
Implementar la visualización de detalles de ciudades al pulsar un botón, mostrando:
- Nombre de la ciudad
- Ubicación (Latitud y Longitud)
- Precio promedio del viaje
- Transportes disponibles
- Imagen representativa de la ciudad

---

## 🔧 Cambios Realizados

### 1. **Modificación de la Lógica de Selección de Ciudad**

#### Antes:
```javascript
const selectedCity = ref('')

const handleClick = (city) => {
  selectedCity.value = city
  console.log(selectedCity.value)
}
```

#### Después:
```javascript
const selectedCity = ref(null)

const handleClick = (cityName) => {
  // Buscar la ciudad completa en el store
  const city = cityStore.cities.find((c) => c.name === cityName)
  selectedCity.value = city
  console.log(selectedCity.value)
}
```

**Razón:** Ahora se guarda el objeto completo de la ciudad en lugar de solo el nombre, permitiendo acceder a todos sus datos.

---

### 2. **Función para Obtener Precio Formateado**

```javascript
const getPrice = (city) => {
  if (city.price && city.price.EUR) {
    return city.price.EUR.formatted_avg
  }
  return 'No disponible'
}
```

**Datos de la API utilizados:**
- Campo: `city.price.EUR.formatted_avg`
- Ejemplo: "101,98 €" (Bruselas)
- Fallback: "No disponible" si no hay datos

---

### 3. **Función para Obtener Transportes**

```javascript
const getTransports = (city) => {
  if (city.transportation_category && city.transportation_category.length > 0) {
    return city.transportation_category.join(', ')
  }
  return 'No disponible'
}
```

**Datos de la API utilizados:**
- Campo: `city.transportation_category` (array)
- Ejemplo: `["bus"]` → "bus"
- Ejemplo: `["bus", "flixtrain"]` → "bus, flixtrain"
- Fallback: "No disponible" si no hay datos

---

### 4. **Función para Obtener Imágenes de Ciudades**

#### Primera implementación (No funcionó):
```javascript
const getCityImageUrl = (cityName) => {
  return `https://source.unsplash.com/400x400/?${encodeURIComponent(cityName)},city`
}
```

**Problema:** Los nombres de las ciudades están en español y Unsplash necesita nombres en inglés para encontrar imágenes relevantes.

#### Segunda implementación (Wikimedia Commons - Descartada):
```javascript
const getCityImageUrl = (cityName) => {
  const cityImages = {
    'Berlín': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/...',
    // ... URLs específicas para cada ciudad
  }
  return cityImages[cityName] || 'imagen_por_defecto'
}
```

**Problema:** Algunos enlaces de Wikimedia no se visualizaban correctamente.

#### Implementación final (Unsplash con traducción):
```javascript
const getCityImageUrl = (cityName) => {
  // Traducir nombres de ciudades al inglés para Unsplash
  const cityTranslations = {
    'Berlín': 'Berlin',
    'París': 'Paris',
    'Londres': 'London',
    'Hamburgo': 'Hamburg',
    'Lisboa': 'Lisbon',
    'Roma': 'Rome',
    'Milán': 'Milan',
    'Ámsterdam': 'Amsterdam',
    'Bruselas': 'Brussels',
    'Colonia': 'Cologne',
    'Stuttgart': 'Stuttgart',
    'Oporto': 'Porto',
    'Lyon': 'Lyon',
    'Turín': 'Turin',
    'Zúrich': 'Zurich',
    'Lila': 'Lille',
    'Dortmund': 'Dortmund',
    'Friburgo (Brisgovia)': 'Freiburg',
    'Marsella': 'Marseille',
    'Bristol': 'Bristol',
    'Rotterdam': 'Rotterdam',
    'Amberes': 'Antwerp',
    'Toulouse': 'Toulouse',
    'Grenoble': 'Grenoble',
    'Coímbra': 'Coimbra'
  }
  
  const englishName = cityTranslations[cityName] || cityName
  return `https://source.unsplash.com/400x400/?${encodeURIComponent(englishName)},city`
}
```

**Ventajas de Unsplash con traducción:**
- ✅ Imágenes dinámicas y variadas
- ✅ Alta calidad
- ✅ No requiere API key
- ✅ Traducción automática español → inglés
- ✅ Fallback al nombre original si no está en el diccionario
- ✅ Tamaño optimizado (400x400px)

---

### 5. **Actualización del Template**

#### Antes:
```vue
<div>
  <CityCar :city="selectedCity" />
</div>
```

#### Después:
```vue
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
</div>
```

**Características:**
- Condicional `v-if` para mostrar solo cuando hay ciudad seleccionada
- Imagen a la izquierda, detalles a la derecha
- Uso de optional chaining (`?.`) para evitar errores

---

### 6. **Estilos CSS Añadidos**

```css
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
  width: 120px;
  height: 120px;
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
```

---

### 7. **Limpieza de Imports**

#### Eliminado:
```javascript
import CityCar from '@/components/CityCar.vue'
```

**Razón:** El componente `CityCar` ya no se utiliza, se reemplazó con la tarjeta de detalles inline.

---

## 📊 Estructura de Datos de la API

### URL de la API:
```
https://global.api.flixbus.com/cms/cities/fe1b9252-3adc-436c-bf8a-c4396bec60e6/reachable?language=es&country=ES&limit=25
```

### Campos utilizados:
```javascript
{
  "name": "Bruselas",
  "location": {
    "lat": 50.850338,
    "lon": 4.3517103
  },
  "price": {
    "EUR": {
      "avg": 101.98,
      "formatted_avg": "101,98 €",
      "formatted_max": "140,98 €",
      "formatted_min": "84,98 €",
      "max": 140.98,
      "min": 84.98
    }
  },
  "transportation_category": ["bus"]
}
```

---

## 🌆 Ciudades con Traducción Configurada

Diccionario de traducción español → inglés + país para búsqueda en Unsplash:

| Español | Búsqueda en Unsplash | País |
|---------|---------------------|------|
| Berlín | Berlin Germany | 🇩🇪 Alemania |
| París | Paris France | 🇫🇷 Francia |
| Londres | London England | 🇬🇧 Inglaterra |
| Hamburgo | Hamburg Germany | 🇩🇪 Alemania |
| Lisboa | Lisbon Portugal | 🇵🇹 Portugal |
| Roma | Rome Italy | 🇮🇹 Italia |
| Milán | Milan Italy | 🇮🇹 Italia |
| Ámsterdam | Amsterdam Netherlands | 🇳🇱 Países Bajos |
| Bruselas | Brussels Belgium | 🇧🇪 Bélgica |
| Colonia | Cologne Germany | 🇩🇪 Alemania |
| Stuttgart | Stuttgart Germany | 🇩🇪 Alemania |
| Oporto | Porto Portugal | 🇵🇹 Portugal |
| Lyon | Lyon France | 🇫🇷 Francia |
| Turín | Turin Italy | 🇮🇹 Italia |
| Zúrich | Zurich Switzerland city architecture | 🇨🇭 Suiza |
| Lille | Lille France | 🇫🇷 Francia |
| Dortmund | Dortmund Germany | 🇩🇪 Alemania |
| Friburgo (Brisgovia) | Freiburg Germany | 🇩🇪 Alemania |
| Marsella | Marseille France | 🇫🇷 Francia |
| Bristol | Bristol England | 🇬🇧 Inglaterra |
| Rotterdam | Rotterdam Netherlands | 🇳🇱 Países Bajos |
| Amberes | Antwerp Belgium | 🇧🇪 Bélgica |
| Toulouse | Toulouse France | 🇫🇷 Francia |
| Grenoble | Grenoble France Alps | 🇫🇷 Francia (Alpes) |
| Coímbra | Coimbra Portugal | 🇵🇹 Portugal |

**Total:** 25 ciudades con traducción + país para mayor precisión

---

## ✅ Resultado Final

Al pulsar un botón de ciudad (ej: Bruselas), se muestra:

```
┌─────────────────────────────────────────┐
│  [Imagen]    Bruselas                   │
│             Ubicación: Lat: 50.85       │
│             Long: 4.35                  │
│             Precio promedio: 101,98 €   │
│             Transportes: bus            │
└─────────────────────────────────────────┘
```

---

## 🐛 Problemas Resueltos

### Problema 1: Precio y transportes no mostraban datos reales
**Solución:** Usar los campos correctos de la API (`price.EUR.formatted_avg` y `transportation_category`)

### Problema 2: Imágenes no se visualizaban (Primera iteración)
**Causa:** Los nombres de las ciudades estaban en español y Unsplash no encontraba imágenes relevantes
**Solución intentada:** Cambiar a Wikimedia Commons con URLs específicas

### Problema 3: Algunos enlaces de Wikimedia no se visualizaban
**Causa:** URLs rotas o problemas de CORS con algunos enlaces de Wikimedia
**Solución final:** Volver a Unsplash pero con traducción automática de nombres español → inglés

### Problema 4: Error de sintaxis en template
**Solución:** Añadir el `<div class="cities-container">` faltante

### Problema 5: Imágenes incorrectas para algunas ciudades (Rotterdam)
**Causa:** Búsquedas genéricas devolvían imágenes no relacionadas con la ciudad
**Solución:** Implementar búsquedas específicas con términos adicionales (ej: "Rotterdam Netherlands architecture")

### Problema 6: Nombres incorrectos en botones (Lila en lugar de Lille)
**Causa:** La API de Flixbus devuelve algunos nombres en español incorrecto ("Lila" en lugar de "Lille")
**Solución:** Implementar diccionario de correcciones de nombres (`cityNameCorrections`)

### Problema 7: Imágenes incorrectas para Zúrich (señales de tráfico)
**Causa:** Búsqueda genérica "Zurich Switzerland" devolvía imágenes de señales de tráfico
**Solución:** Añadir términos específicos "Zurich Switzerland city architecture"

---

## 📝 Notas Técnicas

- **Vue 3 Composition API** utilizada con `<script setup>`
- **Optional chaining** (`?.`) para evitar errores con datos faltantes
- **Fallbacks** implementados para todos los campos
- **Responsive design** con max-width de 600px
- **Imágenes optimizadas** a 400x400px desde Unsplash
- **Diccionario de traducción** para convertir nombres español → inglés + país
- **Búsqueda dinámica** en Unsplash con "Ciudad País" para mayor precisión
- **Todas las ciudades incluyen el país** para evitar ambigüedades
- **Corrección de nombres** para botones (ej: "Lila" → "Lille")
- **Sistema de caché reactivo** para imágenes

---

## 🔐 Configuración de API Keys

### Unsplash API (Opcional pero Recomendado)

Para usar la API oficial de Unsplash y obtener imágenes de mejor calidad:

1. **Registrarse en Unsplash Developers:**
   - Ir a: https://unsplash.com/developers
   - Crear una aplicación
   - Obtener el Access Key

2. **Configurar variables de entorno:**
   - Crear archivo `.env` en la raíz del proyecto
   - Añadir: `VITE_UNSPLASH_ACCESS_KEY=tu_access_key_aqui`

3. **Archivos de configuración:**
   ```
   .env                 # Tu API key (NO subir a Git)
   .env.example         # Plantilla para otros desarrolladores
   .gitignore           # Asegura que .env no se suba
   ```

**Ventajas de usar la API oficial:**
- ✅ Imágenes de mayor calidad
- ✅ Más control sobre los resultados
- ✅ Estadísticas de uso
- ✅ Sin limitaciones de rate limit (dentro de tu plan)

**Sin API key:**
- El sistema usa automáticamente `source.unsplash.com` como fallback
- Funciona perfectamente pero con menos control

---

## 🔮 Mejoras Futuras Posibles

1. Implementar lazy loading para las imágenes
2. Añadir animaciones de transición al mostrar la tarjeta
3. Añadir más detalles como descripción, actividades, etc.
4. ~~Implementar caché de imágenes~~ ✅ **Implementado**
5. ~~Usar Unsplash API oficial con access key~~ ✅ **Implementado**

---

## 📊 Resumen de Iteraciones

### Iteración 1: Implementación básica
- ✅ Mostrar detalles al pulsar botón
- ✅ Usar datos de la API de Flixbus
- ❌ Imágenes con Unsplash (nombres en español)

### Iteración 2: Intento con Wikimedia
- ✅ URLs específicas para cada ciudad
- ❌ Algunos enlaces no funcionaban
- ❌ Mantenimiento manual de URLs

### Iteración 3: Unsplash con traducción
- ✅ Unsplash con traducción automática
- ✅ Diccionario español → inglés
- ✅ Imágenes dinámicas y funcionales
- ✅ Fácil mantenimiento

### Iteración 4: API oficial de Unsplash (Actual)
- ✅ Integración con API oficial de Unsplash
- ✅ Variables de entorno para API keys
- ✅ Sistema de caché de imágenes
- ✅ Fallback automático si no hay API key
- ✅ Manejo de errores robusto

---

## 🎯 Estado Actual

**Funcionalidad:** ✅ Completamente operativa

**Características implementadas:**
- ✅ Visualización de detalles de ciudad
- ✅ Imágenes dinámicas desde Unsplash API oficial
- ✅ Traducción automática de nombres
- ✅ Datos reales de precio y transporte
- ✅ Diseño responsive y atractivo
- ✅ Manejo de errores con fallbacks
- ✅ Sistema de caché de imágenes
- ✅ Variables de entorno seguras (.env)

**Última actualización:** 30 de septiembre de 2025
