/**
 * Para hacer referencia a los datos semilla en nuestros componentes, lo haremos en la tienda centralizada de nuestra aplicación.
 * 
 * Administración del estado
 * 
 * El patrón de la tienda que configuramos aqui funciona bastante bien para nuestra aplicación al permitirnos compartir datos entre componentes y consultar y actualizar nuestros datos semilla. 
 * Empleamos una buena convención al mantener centralizadas todas las acciones de nuestra tienda, y que nuestros componentes envien eventos a la tienda para despachar dichas acciones (mutaciones).
 */

import { seedData } from './seedData'

// Ahora los datos semilla forman parte del estado de nuestra app
export const store = {
  state: {
    seedData
  },
  // Todas las acciones que mutan el estado siempre deben estar definidas dentro del store (centralizadas para evitar sobre-escribir su logica)

  // La activación de estas acciones, depende de los eventos despachados en los componentes
  getActiveDay() {
    // Devolvemos el primer objeto dia (elemento del array) activo 
    return this.state.seedData.find(day => day.active)
  },
  setActiveDay(dayId) {
    // Mapeamos todo el estado (arreglo) de nuestra app. 
    // Establecemos la propiedad active a true si el id del objeto actual coincide con el id del dia seleccionado, en caso contrario, dicha propiedad la seteamos en false
    this.state.seedData.map(dayObj => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
    })
  },
  submitEvent(eventDetails) {
    // Obtener el objeto dia activo para inyectarle un nuevo evento
    const activeDay = this.getActiveDay()
    // Generar la estructura del objeeto evento
    const event = {
      details: eventDetails,
      edit: false,
    }
    // Agregarlo al array de eventos de dicho dia seleccionado
    activeDay.events.push(event)
  },
  editEvent(dayId, eventDetails) {
    // El objetivo es permitir que el usuario cambie el valor booleano de edición del evento de falso a verdadero.

    // Impedir que se edite mas de un evento a la vez
    this.resetEditOfAllEvents()

    // Localizamos el evento a editar.
    const eventObj = this.getEventObj(dayId, eventDetails)
    // Establecer el evento en modo edición (esto cambia la UI a modo editar)
    eventObj.edit = true;
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    // Localizamos el evento a actualizar
    const eventObj = this.getEventObj(dayId, originalEventDetails)
    // Establecer los nuevos detalles del evento
    eventObj.details = newEventDetails
    // Desactivar el modo edición (esto cambia la UI a modo ver detalles del evento)
    eventObj.edit = false
  },
  deleteEvent(dayId, eventDetails) {
    // localizo el dia en que se encuentra registrado el evento a eliminar
    const dayObj = this.state.seedData.find(day => day.id === dayId)
    // obtengo el indice que ocupa el evento a eliminar en el arreglo de eventos
    // Idealmente sería mejor buscar por el identificador del evento, sin embargo, los eventos carecen de esta información y debemos proceder a buscarlos por su detalle (texto)
    const eventIndextoRemove = dayObj.events.findIndex(event => event.details === eventDetails)
    // Elimino el evento (retiro del arreglo)
    dayObj.events.splice(eventIndextoRemove, 1)

  },
  resetEditOfAllEvents() {
    // Solo permitimos la edición de un evento a la vez, por tanto es necesario establecer en false el modo de edición de todos los eventos antes de comenzar a editar uno en particular
    this.state.seedData.map(dayObj => {
      dayObj.events.map(event => {
        event.edit = false
      })
    })
  },
  getEventObj(dayId, eventDetails) {
    // Metodo auxiliar para localizar eventos. evita codigo D.R.Y (edit | update)

    // Buscar el día en que se encuentra registrado el evento a localizar
    const dayObj = this.state.seedData.find(day => day.id === dayId)
    // Buscar el evento especifico a localizar
    const eventObj = dayObj.events.find(event => event.details === eventDetails)
    // Retornar el evento localizado
    return eventObj
  },
} 