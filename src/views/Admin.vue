<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_admin.png" id="logo_admin">
    </header>
    <el-row>
      <el-button v-on:click="toggleShowUsers" type="warning" round>TRABAJADORES</el-button>
      <el-button v-on:click="toggleShowProducts" type="warning" round>PRODUCTOS</el-button>
    </el-row>

    <span v-show=showProducts> 
      <h3>PRODUCTOS</h3>
      <el-button type="success" class="el-icon-circle-plus-outline">Agregar producto </el-button>
      
      <!-- Formulario para agregar un usuario -->
      
     <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
       <el-form-item label="Imagen">
        <el-input v-model="form.imagen"></el-input>
      </el-form-item>
       <el-form-item label="Type">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Desayuno" name="type"></el-checkbox>
          <el-checkbox label="Almuerzo y cena" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
      <!--  -->

      <el-table
          :data="products.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 80%">
          <el-table-column
            label="Producto"
            prop="name">
          </el-table-column>
          <el-table-column
            label="Categoria"
            prop="">
          </el-table-column>
          <el-table-column
            label="Precio"
            prop="price">
            <template slot-scope="{ row }">
              <p> $ {{ row.price }} </p>
            </template>
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" >
              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
     </span>

  <span v-show=showUsers> 
      <h3>TRABAJADORES</h3>
      <el-button type="success" class="el-icon-circle-plus-outline">Agregar usuario</el-button>
      <el-table
          :data="users.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 80%">
          <el-table-column
            label="Trabajador"
            prop="email">
          </el-table-column>
          <el-table-column
            label="Cargo"
            prop="roles">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header">

              <el-input
                v-model="search"
                size="mini"
                placeholder="Type to search"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
     </span>

  </div>
</template>

<script>
import {productsServices} from '../services/ProductService'
import {userService} from '../services/UsersService'


 export default {
   async mounted()
    {
      let products = await productsServices.getProducts()
      this.products = products;
      console.log("productosss")
      console.log(products);
      let users = await userService.getUsers()
      this.users = users;
    },
    data() {
      return {
        products: [{"dateEntry":"2021-06-30T15:58:32.280Z","_id":"60dc98708c7e500022cebb19","name":"arroz con pollito","price":8,"createdAt":"2021-06-30T16:14:40.463Z","updatedAt":"2021-06-30T16:14:40.463Z","__v":0}],
        users: [],
        search: '',
        showProducts: false,
        showUsers: true,
        form: {
          name: '',
          price: '',
          imagen: '',
          type: '',
          typeCheck: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toggleShowProducts() {
        console.log("click en productos")
        this.showProducts = !this.showProducts
        this.showUsers = !this.showProducts
        console.log(this.showProducts);
      },
      toggleShowUsers() {
        console.log("click en usuario")
        this.showUsers = !this.showUsers
        this.showProducts = !this.showUsers
        console.log(this.showUsers);
      },
      onSubmit() {
        console.log('submit!');
      }
    },
  }
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-around;
    background: rgba(253, 195, 14, 0.27);
    align-items: center;
  }

  .logo_header, #logo_admin{
    height: 80px;
    width: 80px;
  }

  .btn_singoff{
    height: 30px;
    width: 100px;
  }

</style>