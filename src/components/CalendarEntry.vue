<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input type="text" placeholder="Nuevo Evento" />
      <p class="calendar-entry-day">Día del evento: <span class="bold">{{ titleOfActiveDay }}</span></p>
      <a class="button is-primary is-small is-outlined">Registrar</a>
    </div>
  </div>
</template>

<script>
// Importamos el store, ya que este componente necesita tener acceso a el, sea para consultar o despachar eventos que muten la información almacenada
import {store} from '../store'

export default {
  name: 'CalendarEntry',
  computed: {
    // Obtenemos el titulo completo del dia activo
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle
    }
  }
}
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #FFF;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #CCC;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>