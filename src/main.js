import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // Por defecto, la instancia principal de Vue (raiz) se le asigna el nombre de Root
  name: 'Agenda',
  render: h => h(App),
}).$mount('#app')
