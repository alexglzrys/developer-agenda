/**
 * Datos semilla para nuestra aplicación de Agenda.
 * Contiene información de cada día de la semana
 */

export const seedData = [
  {
    id: 1,
    abbvTitle: "Lun",
    fullTitle: "Lunes",
    events: [
      { details: "Hacer ejercicio", edit: false },
      { details: "Entregar libros", edit: false }
    ],
    active: true
  },
  {
    id: 2,
    abbvTitle: "Mar",
    fullTitle: "Martes",
    events: [{ details: "Ir al Gimnasio", edit: false }],
    active: false
  },
  {
    id: 3,
    abbvTitle: "Mie",
    fullTitle: "Miércoles",
    events: [{ details: "Realizar trabajo social", edit: false }],
    active: false
  },
  {
    id: 4,
    abbvTitle: "Jue",
    fullTitle: "Jueves",
    events: [],
    active: false
  },
  {
    id: 5,
    abbvTitle: "Vie",
    fullTitle: "Viernes",
    events: [{ details: "Ir al cine", edit: false }],
    active: false
  },
  {
    id: 6,
    abbvTitle: "Sab",
    fullTitle: "Sábado",
    events: [{ details: "Visitar la familia", edit: false }],
    active: false
  },
  {
    id: 7,
    abbvTitle: "Dom",
    fullTitle: "Domingo",
    events: [{ details: "Ir al parque de diversiones", edit: false }],
    active: false
  }
];
