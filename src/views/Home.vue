<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_bq.png">
     <form action="">
      <p>USER</p>
      <input type="text" placeholder="Correo Electronico" class="input_user" id="user_singup">
      <p>PASSWORD</p>
      <input type="text" placeholder="Contraseña" class="input_user" id="user_password">
      <p></p>
      <button type="submit" id="btn_login"> Iniciar sesion </button>
    </form>
   
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-content: center;
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
}

</style>
