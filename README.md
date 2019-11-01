# App Agenda del Programador

Es una aplicación de agenda semanal que permite registrar, consultar, editar y eliminar eventos organizados por día. Cada evento corresponde a una tarea/actividad (to-do) donde el usuario puede o no dar un seguimiento en particular.

## Resumen Técnico

- Es posible instalar Node.js usando herramientas como nvm o n. El uso de un paquete como estos nos permite mantener una versión múltiple de Node.js en nuestro entorno de desarrollo.
- **Linter:** Permite asegurar la calidad del código, es decir, verifica que esté libre de errores y se adhiera a ciertos estándares/prácticas (estilo de escritura) de código.
- **Babel:** Es un transpilador de JavaScript que convierte la sintaxis ES6 a una sintaxis ES5 (anterior) para que cualquier navegador la entienda.
- **$mount( ):** Logra el mismo resultado que la propiedad *el* para montar una applicación de Vue. Sin embargo, proporciona mayor flexibilidad al permitirnos llamarlo cuando queramos, incluso después de que la instancia de Vue haya sido creada.
- **render**: La función de renderización de Vue es una alternativa a las plantillas y es básicamente lo que Vue hace bajo el capó, es decir, todo lo que escribimos dentro de la propiedad template, se convierte a una render function. En este sentido, cuando asociamos un Single File Component a la instancia raiz de la aplicación, previamente debe compilarse y posteriormente renderizarse, es por ello que se declara en render y no en la propiedad *el*.
- **Los componentes de un solo archivo** en Vue son posibles gracias a herramientas de compilación como Webpack. Estas herramientas funcionan junto con los paquetes vue-loader o vueify respectivamente para compilar componentes .vue en módulos JavaScript simples que pueden entender en los navegadores.
- **Cuando se trata de arquitectura basada en componentes**, los niveles de granularidad (jerarquia de organización) dependen de cómo deseamos encapsular estas piezas individuales en la interfaz. Los diferentes equipos/desarrolladores tienen diferentes formas de diseñar componentes, pero el objetivo subyacente es la mantenibilidad y/o reutilización.
- Dado que cada componente tiene su propio alcance aislado, los componentes secundarios nunca deberían hacer referencia a los datos de los componentes principales (padres). **Para que un componente hijo acceda a los datos de un padre, los datos deben fluir del padre al hijo con la ayuda de accesorios.** Este diseño simplifica enormemente la comprensión del flujo de datos de una aplicación, ya que los componentes secundarios nunca podrán mutar el estado primario directamente.
- Dado que los accesorios solo pueden fluir en una sola dirección (padre a hijo), **los componentes hijos solo pueden comunicarse directamente con un padre a través de eventos personalizados.** Los eventos personalizados de Vue funcionan activando eventos dentro de un componente particular emit(nameOfEvent), y escuchando ese evento en otro componente, on(nameOfEvent). Los datos también se pueden pasar a través de estos eventos.
- La comunicación entre componentes hermanos es más difícil, para ello se hace uso de **Global Event Bus, Manager Simple State, Vuex**.
- **Estado:** Básicamente significa datos. La administración del estado a menudo se refiere a la administración de datos a nivel de aplicación.
- Los nombres de archivo para componentes de un solo archivo deben ser **kebab-case (calendar-entry.vue)** o **PascalCase (CalendarEntry.vue)**.



## Conclusiones
Mientras construíamos nuestra aplicación de calendario, aprendimos y aplicamos una metodología para construir aplicaciones Vue simples. Como resumen, estos pasos son:

1. **Crear una versión estática de la aplicación.**
El punto de partida de nuestra aplicación fue una implementación estática de la aplicación (un solo archivo HTML con referencia a su hoja de estilos CSS). Este siempre es un gran comienzo para construir cualquier aplicación Vue.

2. **Dividir la aplicación en componentes.**
Trazamos la estructura de componentes de nuestra aplicación examinando la funcionalidad UI de la aplicación. Luego, utilizamos los componentes de archivo único de Vue (SFC) y el principio de responsabilidad única para desglosar los componentes, de modo que cada uno tuviera una funcionalidad viable mínima (HTML/CSS/JS).

3. **Codificación del Estado inicial de cada componente y determinar el flujo de datos padre-hijo.**
Al determinar en qué componente debe vivir cada parte del estado; Pasamos y referenciamos accesorios de componentes de nivel superior hasta sus hijos (props).

4. **Crear acciones de Estado (y los despachadores de eventos en cada uno de los componentes).**
Para que nuestra aplicación sea interactiva, creamos y centralizamos todas las acciones del Estado dentro de la tienda de aplicaciones (Store). Luego creamos nuestros oyentes de eventos (listeners) en cada uno de los componentes para despachar acciones a la tienda, misma que actualiza reactivamente nuestra aplicación.

### Construir Boleirplate proyecto Vue
Mediante el CLI 3/4 de Vue
```
vue create nombre-proyecto
* default (babel, eslint)
```
Es importante señalar que los preprocesadores de CSS / HTML no se instalan por defecto con esta configuración, por tanto, hay que instalarlos por separado.

#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
