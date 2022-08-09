import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex).use(axios);

export default new Vuex.Store (
    {
        stete: {
            users: []
        },
        mutations: {
            SET_USERS (state, response){
                state.users = response;
            }
        },
        actions: {
            async postRegister (contex, payload) {
                let resp = await axios.post (`https://62efbfad57311485d1278ded.mockapi.io/api/products/user`, payload)
                let response = {
                    name: resp.data.name,
                    email: resp.data.email,
                    password: resp.data.password,
                    edad: resp.data.edad

                }
                contex.commit('SET_USERS', response);
            },
        },
        getters : {
            showUsers (state) {
                let usuarios = state.users; 
                console.log(usuarios);
                return usuarios;
            }
        }, 
        modules : {}
    });