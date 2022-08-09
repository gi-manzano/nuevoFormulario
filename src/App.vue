<template>
  <div id="app">
    <img  class=" logo-small" alt="Vue logo" src="./assets/logo.jpg">

    <formulario-page  class="mb-5"/>
    <tabla-page />

  

  </div>
</template>

<script>
import FormularioPage from './components/FormularioPage.vue'
import TablaPage from './components/TablaPage.vue'

export default {
  name: 'App',
  components: {
    FormularioPage,
    TablaPage
   
  },
  data () {
    return {
      
    }
  },
  methods: {
        // addUsuarioTabla(usuario) {
        //     console.log(usuario);
        //     const nuevoUsuario = {...usuario};
        //     this.usuarios.push(nuevoUsuario);
        // }
        

    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: aquamarine;
  
}
.logo-small {
  width: 80px;
}
</style>

