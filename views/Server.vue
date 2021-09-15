<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button v-on:click="logout" class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_server.png" id="logo_server">
    </header>
    
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

    <div class="user_pedido">
      <p>Nombre del cliente: </p>
        <input type="text" id="name_client">
        <p>N° Mesa: </p>
        <input type="text" id="nmesa_client">
    </div>
    <button id= "btn_enviarchef">ENVIAR A CHEF</button>
  </div>
</template>

<script>

import {productsServices} from '../services/ProductService'
  export default {
    async mounted()
    {
      let products = await productsServices.getProducts()
      this.products = products;
    },
    data(){
      return {
        products: {}
      }
    },
    methods: {
      async logout(){
          localStorage.removeItem('token')
          this.$router.push('/')
      },
    }
  }
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-around;
    background: rgba(253, 195, 14, 0.27);
    align-items: center;
  }

  .logo_header, #logo_server{
    height: 80px;
    width: 80px;
  }

  .btn_singoff{
    height: 30px;
    width: 100px;
  }

  .user_pedido{
    display: flex;
    justify-content: center;
  }

  #name_client{
    background: #FDC30E;
    border-color: #FDC30E;
    height: 35px;
    width: 300px;
  }

  #nmesa_client{
    background: #FDC30E;
    border-color: #FDC30E;
    height: 35px;
    width: 50px; 
  }

  #btn_enviarchef {
    background:#FDC30E;
    border-color: #FDC30E;
    border-radius: 10px;
    height: 40px;
    width: 180px;
    font-size: 18px;
    color: white;
  }
</style>