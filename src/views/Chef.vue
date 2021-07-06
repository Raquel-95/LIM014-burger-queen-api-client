<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_chef.png" id="logo_chef">
    </header>
    <h1>Esta es la pagina del chef </h1>
  </div>
</template>
<script>

</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-around;
    background: rgba(253, 195, 14, 0.27);
    align-items: center;
  }

  .logo_header, #logo_chef{
    height: 80px;
    width: 80px;
  }

  .btn_singoff{
    height: 30px;
    width: 100px;
  }

</style>