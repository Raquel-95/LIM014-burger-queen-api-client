//import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import ProductsComponent from './views/Products.vue';


axios.defaults.baseURL = 'https://nodejs-bq-api.herokuapp.com'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token"); // Setear el token directo del localstorage
// migrar al sesionstorage, se usa para guardar datos del usuario en sesion
axios.defaults.headers.common ['Content-Type'] = 'application/json'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

// Vue.component('choose-product', ProductsComponent);
new Vue({ // inicializamos nuestra aplicacion
  router, // libreria 
  store, // libreria 
  axios,
  VueAxios,
  render: h => h(App) // va a hacer render en nuestro componente App 
}).$mount('#app') // y lo va a montar en nuestro elemento de nuestro index.html que tenga el id #app

//createApp(App).use(router).use(VueAxios, axios).mount('#app')