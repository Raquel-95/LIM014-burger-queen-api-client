<template>
  <div class="about">
    <img alt="Icono Admin" src="../assets/icon_admin.png">
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