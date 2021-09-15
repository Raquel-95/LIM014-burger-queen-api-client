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

axios.defaults.baseURL = 'https://nodejs-bq-api.herokuapp.com'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token"); // Setear el token directo del localstorage
// migrar al sesionstorage, se usa para guardar datos del usuario en sesion
axios.defaults.headers.common ['Content-Type'] = 'application/json'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.component('listProducts', {
  //objeto con la configuracion
props: [], // propiedad de los componentes donde podemos definir las propiedades que el comp padre le va a enviar al comp hijo
// permite que el componente padre le setee a traves de un atributo el valor al comp hijo

  // data () { // funcion que devuelve un objeto
  //   return {
  //     products
  //   }
  // },

  methods: {

  },

  template: `
  <h3>DESAYUNOS</h3>
      <el-table
        :data="products"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Item"
          width="180">
        
        </el-table-column>
        <el-table-column
          prop="price"
          label="Precio"
          width="180">
          <template slot-scope="{ row }">
            <p> $ {{ row.price }} </p>
          </template>
        </el-table-column>
      </el-table>

  <h3>ALMUERZO Y CENA</h3>
      <el-table
        :data="products"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Item"
          width="180">
        
        </el-table-column>
        <el-table-column
          prop="price"
          label="Precio"
          width="180">
          <template slot-scope="{ row }">
            <p> $ {{ row.price }} </p>
          </template>
        </el-table-column>
      </el-table>
  `
})

new Vue({ // inicializamos nuestra aplicacion
  router, // libreria 
  store, // libreria 
  axios,
  VueAxios,
  render: h => h(App) // va a hacer render en nuestro componente App 
}).$mount('#app') // y lo va a montar en nuestro elemento de nuestro index.html que tenga el id #app

//createApp(App).use(router).use(VueAxios, axios).mount('#app')