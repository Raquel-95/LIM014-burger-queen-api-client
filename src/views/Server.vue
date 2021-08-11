<template>
  <div class="about">
    <header>
      <img alt="Vue logo" src="../assets/logo_bq.png" class="logo_header">
      <button class="btn_singoff">Cerrar sesion</button>
      <img alt="Icono Admin" src="../assets/icon_server.png" id="logo_server">
    </header>

    <h1>Esta es la pagina de pedidos.</h1>
    <div class="user_pedido">
      <p>Nombre del cliente: </p>
        <input type="text" id="name_client">
        <p>N° Mesa: </p>
        <input type="text" id="nmesa_client">
    </div>
    <p></p>
    <button id= "btn_enviarchef">ENVIAR A CHEF</button>

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