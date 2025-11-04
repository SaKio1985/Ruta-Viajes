<template>
  <footer class="minimal-footer">
    <div class="footer-content">
      <div class="links">
        <router-link to="/about">Sobre nosotros</router-link>
        <router-link to="/contact">Contacto</router-link>
        <router-link to="/404">Página de error</router-link>
      </div>
      <div class="copyright">© 2025 GoCity</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'GoCityFooter',
}
</script>

<style scoped>
.minimal-footer {
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  margin-top: auto;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 0 20px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 8px;
}

.links a {
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.links a:hover {
  text-decoration: underline;
}

.cookie-link {
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
}

.cookie-link img {
  vertical-align: middle;
}

.copyright {
  color: #333;
  font-size: 14px;
  margin: 0;
}

/* Ajusta el tamaño del icono si es necesario */
.cookie-link img {
  width: 16px;
  height: 16px;
}
</style>
