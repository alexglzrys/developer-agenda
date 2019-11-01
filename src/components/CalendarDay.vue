<template>
  <!-- Registramos un listener @click para detectar la interacción del usuario al hacer click en un día en particular -->
  <div class="day column" @click="setActiveDay(day.id)">
    <div class="day-banner has-text-white has-text-centered">{{ day.abbvTitle }}</div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <!-- Como no existe un identificador unico para cada evento, hacemos uso del indice del array de eventos para identificar a cada componente -->
      <calendar-event v-for="(event, index) in day.events" 
        :key="index"
        :event="event"
        :day="day" 
      />
    </div>
  </div>
</template>

<script>
// Importar componentes hijos
import CalendarEvent from './CalendarEvent.vue'

// Importamos el store, ya que este componente necesita acceder a el para consultar información o mutarla a través del despacho de eventos
import {store} from '../store'

export default {
  name: 'CalendarDay',
  // Este componente necesita información desde el exterior (datos del dia a mostrar)
  props: ['day'],
  // Registrar componentes hijos
  components: {
    CalendarEvent
  },
  methods: {
    setActiveDay(dayId) {
      // Mutamos el state para establecer el dia clickeado como activo
      store.setActiveDay(dayId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .day {
    background-color: #4A4A4A;
    color: #FFF;
    border-left: 1px solid #8F8F8F;
    border-bottom: 1px solid #8F8F8F;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: darken(#4A4A4A,3%);
    }

    .day-banner {
      background-color: #333333;
      color: #FFF;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 600;
    }

    .day-details {
      padding: 10px;
    }

    &:last-child {
      border-right: 1px solid #8F8F8F;
    }
  }
</style>