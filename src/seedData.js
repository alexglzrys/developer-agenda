/**
 * Datos semilla para nuestra aplicación de Agenda.
 * Contiene información de cada día de la semana
 */

export const seedData = [
  {
    id: 1,
    abbvTitle: 'Lun',
    fullTitle: 'Lunes',
    events: [
      { details: 'Get Groceries', edit: false },
      { details: 'Carpool', edit: false }
    ],
    active: true
  },
  {
    id: 2,
    abbvTitle: 'Mar',
    fullTitle: 'Martes',
    events: [
      { details: 'Yoga/Gym', edit: false }
    ],
    active: false
  },
  {
    id: 3,
    abbvTitle: 'Mie',
    fullTitle: 'Miércoles',
    events: [
      { details: 'Work social', edit: false }
    ],
    active: false
  },
  {
    id: 4,
    abbvTitle: 'Jue',
    fullTitle: 'Jueves',
    events: [],
    active: false
  },
  {
    id: 5,
    abbvTitle: 'Vie',
    fullTitle: 'Viernes',
    events: [
      { details: 'Friday dinner/drinks', edit: false }
    ],
    active: false
  },
  {
    id: 6,
    abbvTitle: 'Sab',
    fullTitle: 'Sábado',
    events: [
      { details: 'Chill with the parents', edit: false }
    ],
    active: false
  },
  {
    id: 7,
    abbvTitle: 'Dom',
    fullTitle: 'Domingo',
    events: [
      { details: 'Netflix/Chill', edit: false }
    ],
    active: false
  }
]
