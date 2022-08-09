<template>
    <section class="container table-page card app">
      <h1 class="text-center">Lista de Usuarios: </h1>
        <table class="table table-striped">
            <thead class="thead-light">
                <tr>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                </tr>
            </thead>
            <br>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td> {{user.name}} </td> 
                    <td> {{user.email}}</td>
                    <td> {{user.password}}</td>
                    <td> {{ user.edad}}</td> 
                    <br>
                    
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <br/>
                <td> <button class="btn btn-warning" @click="deleteRegistro(user)">Eliminar</button> </td>
              </tr>
            </tfoot>
            <br>
        </table>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

    name: 'tablaPage',
    props: {
    },
    data () {
      return { }
    },
    methods: {
    // show () {console.log (this.showUsers)}
    },
    computed : {
      ...mapGetters ({
        users: 'showUsers'
      })
    },
}
</script>

<style scoped>
.table {
  background-color: rgb(219, 149, 207);
}


</style>