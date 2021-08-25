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

axios.defaults.baseURL = 'https://rociovalentin.herokuapp.com'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({ // inicializamos nuestra aplicacion
  router, // libreria 
  store, // libreria 
  axios,
  VueAxios,
  render: h => h(App) // va a hacer render en nuestro componente App 
}).$mount('#app') // y lo va a montar en nuestro elemento de nuestro index.html que tenga el id #app

//createApp(App).use(router).use(VueAxios, axios).mount('#app')