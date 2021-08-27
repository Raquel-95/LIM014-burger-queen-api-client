<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button v-on:click="logout" class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_admin.png" id="logo_admin">
    </header>
    <el-row>
      <el-button v-on:click="toggleShowUsers" type="warning" round>TRABAJADORES</el-button>
      <el-button v-on:click="toggleShowProducts" type="warning" round>PRODUCTOS</el-button>
    </el-row>

    <span v-show=showProducts> 
      <h3>PRODUCTOS</h3>
      <el-button type="success" class="el-icon-circle-plus-outline">Agregar producto </el-button>
      
      <!-- Formulario para agregar un producto -->
      
     <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
       <el-form-item label="Type">
        <el-input v-model="form.type"></el-input>
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
            prop="type">
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

      <!-- Formulario para agregar un producto -->
      
     <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
       <el-form-item label="Rol">
        <el-input v-model="form.roles"></el-input>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.admin">
          <el-checkbox label="Admin" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
      <!--  -->

      <el-table
          :data="users.filter(data => !search || data.email.toLowerCase().includes(search.toLowerCase()))"
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
      let users = await userService.getUsers()
      this.users = users;
    },
    data() {
      return {
        products: [],
        users: [],
        search: '',
        showProducts: false,
        showUsers: true,
        form: {
          name: '',
          price: '',
          type: '',
          admin: ''
        },
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
        this.showProducts = !this.showProducts
        this.showUsers = !this.showProducts
      },
      toggleShowUsers() {
        this.showUsers = !this.showUsers
        this.showProducts = !this.showUsers
      },
      async onSubmit() {
          try {
          await productsServices.createProduct((this.form.name, this.form.price, this.form.type));
        } catch (error) {
          console.log('error: ', error)
        }
      },
       async logout(){
          localStorage.removeItem('token')
          this.$router.push('/')
      },
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