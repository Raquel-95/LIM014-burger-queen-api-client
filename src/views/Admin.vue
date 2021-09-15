<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <el-button v-on:click="logout" type="info" round>Cerrar sesion</el-button>
      <img alt="Icono Admin" src="../assets/icon_admin.png" id="logo_admin">
    </header>
    <el-row>
      <el-button v-on:click="toggleShowUsers" type="warning" round>TRABAJADORES</el-button>
      <el-button v-on:click="toggleShowProducts" type="warning" round>PRODUCTOS</el-button>
    </el-row>

    <span v-show=showProducts> 
      <h3>PRODUCTOS</h3>
      <el-button type="success" class="el-icon-circle-plus-outline" v-on:click="toggleAddProduct">Agregar producto </el-button>
      
      <!-- Formulario para agregar un producto -->
      
     <el-form ref="form" :model="form" label-width="120px" v-show="showFormProd">
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
        <el-button type="primary" v-on:click="onSubmitProduct">Crear</el-button>
        <el-button>Cancelar</el-button>
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
      <el-button type="success" class="el-icon-circle-plus-outline" v-on:click="toggleAddUser" >Agregar usuario</el-button>

      <!-- Formulario para agregar un producto -->
      
     <el-form ref="form" :model="form" label-width="120px" v-show="showFormUser">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.roles">
          <el-checkbox label="Admin" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmitUser">Crear</el-button>
        <el-button>Cancelar</el-button>
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
            prop="roles.admin">
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
       if(localStorage.getItem("token") == null) {
         this.$router.push('/')
        }

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
        showFormProd: false,
        showFormUser: false,
        form: {
          name: '',
          price: '',
          type: '',
          email: '',
          password: '',
          roles : {
            admin : ''
          }
        },
      }
    },
    methods: {
      handleEdit(index, row) {
        
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$confirm('¿Estas seguro que quieres eliminar esto?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Eliminado'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Cancelado'
          });          
        });
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
      toggleAddProduct () {
        this.showFormProd = !this.showFormProd
      },
      toggleAddUser () {
        this.showFormUser = !this.showFormUser
      },
      async onSubmitProduct() {
          try {
          // console.log(this.form)
          let newProduct = await productsServices.createProduct(this.form);
          this.products.push(newProduct)
          this.form = "";
        } catch (error) {
          console.log('error: ', error)
        }
      },
      async onSubmitUser() {
          try {
            console.log(this.form)
          let newUser = await userService.createUser(this.form);
          this.users.push(newUser)
          this.form = "";
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


</style>