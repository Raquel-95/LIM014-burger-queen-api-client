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
      let token = await userService.login(this.usuario, this.clave);
      this.$router.push('/admin')
      console.log(token);
      console.log(userService.token);
      // let payload = {
      //   email: this.usuario,
      //   password: this.clave
      // };
      // await this.$http.post('/auth',payload) // consultas en un archivo aparte.
      // .then(response => {
      //   // console.log(response);
      //   localStorage.setItem('token', response.data.token)
      //   this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token; // defaults para definir el valor por defecto, definimos la cabecera 'Authorization' con un valor por defecto. 
      //   this.$router.push('/admin')
      // })
      // .catch(error => {
      //   console.log('paso algo malo');
      //   console.log(error);
      //   // let data = error.response.data; // la respuesta json que devuelve el error se almacena en error.response.data
      //   // M.toast({html: data.message }) // para ver el mensaje de error que me esta devolviendo
      // });
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
