<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <!-- El uso de componentes desincha el marcado y logica del componente padre. El componente hijo necesita información del día -->
      <calendar-day v-for="day in sharedState.seedData" 
        :key="day.id"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
// Importar componentes hijos
import CalendarDay from './CalendarDay.vue'

// Importar el store de almacenamiento centralizado
import {store} from '../store'

export default {
  name: 'CalendarWeek',
  // Registrar componentes hijos directos
  components: {
    CalendarDay
  },
  data() {
    return {
      // hacer referencia al estado de la tienda como una propiedad de datos compartida en el componente
      sharedState: store.state
    }
  }
}
</script>

<style lang="scss" scoped>
  #calendar-week {
    margin-bottom: 50px;
    .column {
      padding: 0 0 0 0;
    }
  }
</style>