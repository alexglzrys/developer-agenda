<template>
  <div id="app">
    <!-- Al dividir nuestra aplicación en componentes, ayuda a adelgazar la lógica y marcado HTML en el componente principal -->
    <calendar-week />
    <calendar-entry />
  </div>
</template>

<script>
// Importar los componentes hijos directos de App.vue
import CalendarWeek from './components/CalendarWeek.vue'
import CalendarEntry from './components/CalendarEntry.vue'

export default {
  // Asignar un nombre a este componente
  name: 'App',
  // Registrar los componentes hijos
  components: {
    CalendarWeek,
    CalendarEntry,
  },
}
</script>

<!-- Declarar los estilos globales de la app -->
<style lang="scss">
  html, body {
    height: 100%;
  }
</style>

<!-- Declarar los estilos de este componente -->
<style lang="scss" scoped>
  #app {
    height: inherit;
    background: #6e6e6e;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }
</style>
