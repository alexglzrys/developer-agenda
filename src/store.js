/**
 * Para hacer referencia a los datos semilla en nuestros componentes, lo haremos en la tienda centralizada de nuestra aplicación.
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
} 