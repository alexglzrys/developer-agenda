<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <!-- v-model se utiliza para crear un enlace de datos bidireccional entre la entrada del formulario (control) y una propiedad de datos (modelo) del componente - basicamente a medida que uno cambia, el otro se actualiza -->
      <input type="text" v-model="inputEntry" placeholder="Nuevo Evento" />
      <p class="calendar-entry-day">Día del evento: <span class="bold">{{ titleOfActiveDay }}</span></p>
      <!-- cuando se hace click, se ejecuta un metodo que recibe como parametro la propiedad de datos inputEntry que contiene los detalles del evento (lo que el usuario ingresó en la caja de texto) -->
      <a class="button is-primary is-small is-outlined" @click="submitEvent(inputEntry)">Registrar</a>
    </div>
    <!-- Mostrar feedback de error al usuario al tratar de enviar un evento vacío -->
    <p v-if="error" style="color: red; font-size: 13px">
      Ingresa los detalles del evento!
    </p>
  </div>
</template>

<script>
// Importamos el store, ya que este componente necesita tener acceso a el, sea para consultar o despachar eventos que muten la información almacenada
import {store} from '../store'

export default {
  name: 'CalendarEntry',
  data() {
    return {
      inputEntry: '',
      error: false,
    }
  },
  methods: {
    submitEvent(eventDetails) {
      // Evitar que se registre un evento con detalles vacíos
      if (eventDetails === '') return this.error = true

      // Despacharemos una mutación definida en el store, la cual recibe los detalles del evento para registrarlo en el dia previamente seleccionado
      store.submitEvent(eventDetails)
      this.inputEntry = ''
      // Reseteamos el error (en caso de haberse registrado uno antes del proceso exitoso)
      this.error = false
    }
  },
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