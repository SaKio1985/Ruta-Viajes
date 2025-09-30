# 🖼️ Configuración de Unsplash API

## 📋 Requisitos Previos

Para obtener imágenes de alta calidad desde Unsplash, necesitas una API key gratuita.

---

## 🚀 Pasos de Configuración

### 1. Crear una cuenta en Unsplash Developers

1. Ve a [Unsplash Developers](https://unsplash.com/developers)
2. Haz clic en **"Register as a developer"**
3. Completa el registro con tu cuenta de Unsplash

### 2. Crear una nueva aplicación

1. Una vez registrado, ve a [Your Apps](https://unsplash.com/oauth/applications)
2. Haz clic en **"New Application"**
3. Acepta los términos de uso
4. Completa el formulario:
   - **Application name:** Rutas Viajes (o el nombre que prefieras)
   - **Description:** Aplicación para mostrar imágenes de ciudades europeas
5. Haz clic en **"Create Application"**

### 3. Obtener tu Access Key

Una vez creada la aplicación, verás:

- **Application ID:** (ID numérico)
- **Access Key:** (cadena alfanumérica larga)
- **Secret Key:** (NO la necesitas para este proyecto)

**⚠️ IMPORTANTE:** Copia solo el **Access Key**

### 4. Configurar el archivo .env

1. En la raíz del proyecto, crea un archivo llamado `.env`
2. Añade la siguiente línea:

```env
VITE_UNSPLASH_ACCESS_KEY=tu_access_key_aqui
```

**Ejemplo:**

```env
VITE_UNSPLASH_ACCESS_KEY=bkT0juAZqO89zKToAekAaQhRFMy6jmFPpf_J2eRmu2a
```

### 5. Reiniciar el servidor de desarrollo

Si el servidor ya está corriendo, debes reiniciarlo para que cargue las nuevas variables de entorno:

```bash
# Detener el servidor (Ctrl + C)
# Iniciar de nuevo
npm run dev
```

---

## 🔒 Seguridad

### ✅ Buenas prácticas implementadas:

1. **`.env` está en `.gitignore`**
   - Tu API key NO se subirá a Git
   - Mantiene tus credenciales seguras

2. **`.env.example` como plantilla**
   - Otros desarrolladores saben qué variables necesitan
   - No contiene valores reales

3. **Uso de `import.meta.env`**
   - Vite maneja las variables de entorno de forma segura
   - Solo las variables con prefijo `VITE_` son accesibles en el cliente

### ⚠️ NUNCA hagas esto:

```javascript
// ❌ MAL - Hardcodear la API key
const accessKey = 'bkT0juAZqO89zKToAekAaQhRFMy6jmFPpf_J2eRmu2a'

// ✅ BIEN - Usar variables de entorno
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
```

---

## 🧪 Verificar que funciona

1. Abre la aplicación en el navegador
2. Ve a la página de búsqueda
3. Haz clic en cualquier ciudad
4. Deberías ver una imagen de alta calidad de Unsplash

### Cómo saber si está usando la API oficial:

- **Con API key:** Las imágenes son diferentes cada vez que recargas (aleatorias)
- **Sin API key:** Usa `source.unsplash.com` como fallback

---

## 📊 Límites de la API

### Plan gratuito (Demo):

- **50 requests por hora**
- Suficiente para desarrollo y pruebas
- Perfecto para este proyecto

### Si necesitas más:

- Puedes solicitar un plan de producción en Unsplash
- Límite aumenta a 5,000 requests por hora

---

## 🐛 Solución de Problemas

### Las imágenes no cargan

1. **Verifica que el archivo `.env` existe**

   ```bash
   # En la raíz del proyecto
   ls -la .env
   ```

2. **Verifica que la variable está correcta**
   - Debe empezar con `VITE_`
   - No debe tener espacios
   - No debe tener comillas

3. **Reinicia el servidor**

   ```bash
   npm run dev
   ```

4. **Verifica en la consola del navegador**
   - Abre DevTools (F12)
   - Busca errores relacionados con Unsplash

### Error 401 (Unauthorized)

- Tu Access Key es incorrecta
- Verifica que copiaste la clave completa
- Asegúrate de no haber copiado espacios extra

### Error 403 (Forbidden)

- Has excedido el límite de requests
- Espera una hora o usa el fallback sin API key

---

## 🔄 Modo Fallback (Sin API Key)

Si no quieres configurar la API key, la aplicación funciona perfectamente:

- Usa `source.unsplash.com` automáticamente
- Imágenes estáticas pero funcionales
- Sin límites de requests
- Menos control sobre las imágenes

---

## 📝 Archivos Relacionados

```
rutas-viajes/
├── .env                    # Tu API key (NO subir a Git)
├── .env.example            # Plantilla para otros
├── .gitignore              # Asegura que .env no se suba
├── src/
│   └── views/
│       └── SearchPage.vue  # Usa la API de Unsplash
└── SETUP_UNSPLASH.md       # Este archivo
```

---

## 🎯 Resumen

1. ✅ Crear cuenta en Unsplash Developers
2. ✅ Crear una aplicación
3. ✅ Copiar el Access Key
4. ✅ Crear archivo `.env` con la key
5. ✅ Reiniciar el servidor
6. ✅ ¡Disfrutar de imágenes de alta calidad!

---

**¿Necesitas ayuda?** Consulta la [documentación oficial de Unsplash API](https://unsplash.com/documentation)
