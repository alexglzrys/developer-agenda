<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <span class="has-text-centered details">{{ event.details }}</span> 
      <div class="has-text-centered icons"><i class="fa fa-pencil-square edit-icon"></i> 
        <i class="fa fa-trash-o delete-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  // Este componente necesita información desde el exterior (datos del evento a proyectar, así como el día)
  props: ['event', 'day'],
  computed: {
    // Retornar un color de fondo aleatorio para cada evento
    getEventBackgroundColor() {
      const colors = ['#85D6FF', '#FF9999', '#99FF99', 'gold', '#A9EE']
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`
    }
  }
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