<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_admin.png" id="logo_admin">
    </header>
    <h1>Esta es la pagina del administrador</h1>
    {{ dbApi }}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      bqApi: null
    }
  },
  async created() {
    let response = await axios.get('http://ec2-18-191-176-140.us-east-2.compute.amazonaws.com/');
    this.bqApi= response.data;
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

  .logo_header, #logo_admin{
    height: 80px;
    width: 80px;
  }

  .btn_singoff{
    height: 30px;
    width: 100px;
  }

</style>