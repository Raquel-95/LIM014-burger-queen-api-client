import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({ // inicializamos nuestra aplicacion
  router, // libreria 
  store, // libreria 
  render: h => h(App) // va a hacer render en nuestro componente App 
}).$mount('#app') // y lo va a montar en nuestro elemento de nuestro index.html que tenga el id #app
