<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_bq.png">
     <form @submit.prevent="login">
      <p>USER</p>
      <input type="text" v-model="usuario" placeholder="Correo Electronico" class="input_user" id="user_singup">
      <p>PASSWORD</p>
      <input type="password" placeholder="Contraseña" v-model="clave" class="input_user" id="user_password">
      <p></p>
      <button type="submit" id="btn_login"> Iniciar sesion </button>
    </form>
  </div>
</template>

<script>
import {userService} from '../services/UsersService'

export default {
  name: 'Home',
  data(){
    return {
      usuario: '',
      clave: ''
    }
  },
  methods: {
    async login()
    {
      try {
        let token = await userService.login(this.usuario, this.clave);
        this.$router.push('/admin')
        console.log(token);
      } catch (error) {
        console.log('error: ', error)
      }
    },

  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 100px;
}

.input_user{
  background: rgba(238, 31, 51, 0.69);
  height: 30px;
  width: 300px;
}

#btn_login{
  background: #FDC30E;
  border-radius: 10px;
  height: 40px;
  width: 150px;
}

img{
  height: 350px;
  width: 350px;
  margin-left: 150px;
}

form {
  margin-top: 50px;
  margin-right: 200px;
}

</style>
