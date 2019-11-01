<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <!-- Si el evento no se esta editando, mostrar la UI con detalles del evento -->
      <template v-if="!event.edit">
        <span class="has-text-centered details">{{ event.details }}</span> 
        <div class="has-text-centered icons">
          <!-- Editar un evento requiere indicar el día en que fue registrado así como los detalles asociados-->
          <i class="fa fa-pencil-square edit-icon" @click="editEvent(day.id, event.details)"></i> 
          <i class="fa fa-trash-o delete-icon"></i>
        </div>
      </template>
      
      <!-- Si el evento esta en modo edición, mostrar la UI para editar el evento -->
      <template v-if="event.edit">
        <!-- El placeholder debe mostrar los detalles originales del evento -->
        <input type="text" :placeholder="event.details">
        <div class="has-text-centered icons">
          <i class="fa fa-check"></i>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// Importamos el store, ya que este componente necesita establecer comunicación con el para consultar información o mutarla
import {store} from '../store'

export default {
  name: 'CalendarEvent',
  // Este componente necesita información desde el exterior (datos del evento a proyectar, así como el día en el que se encuentra registrado)
  props: ['event', 'day'],
  computed: {
    // Retornar un color de fondo aleatorio para cada evento
    getEventBackgroundColor() {
      const colors = ['#85D6FF', '#FF9999', '#99FF99', 'gold', '#A9EE']
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`
    }
  },
  methods: {
    editEvent(dayId, eventDetails) {
      // Despachador que invoca una mutación en el store para permitir editar el evento
      store.editEvent(dayId, eventDetails)
    }
  },
}
</script>

<style lang="scss" scoped>
  .day-event {
    margin-top: 6px;
    margin-bottom: 6px;
    display: block;
    color: #4C4C4C;
    padding: 5px;

    .details {
      display: block;
    }

    input {
      background: none;
      border: 0;
      border-bottom: 1px solid #FFF;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }
</style>