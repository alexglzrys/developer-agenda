/**
 * Para hacer referencia a los datos semilla en nuestros componentes, lo haremos en la tienda centralizada de nuestra aplicación.
 */

import { seedData } from './seedData'

// Ahora los datos semilla forman parte del estado de nuestra app
export const store = {
  state: {
    seedData
  }
} 