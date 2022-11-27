import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombre: 'Maria Itzel Marroquin Ramírez',
  },
  getters: {
  },
  mutations: {
    cambiaNombre(state) {
      const nombres = ['Pepe', 'Juan', 'Luis', 'Memo', 'Ale'];
      state.nombre = nombres[Math.floor(Math.random() * 5)];
    },
  },
  actions: {
  },
  modules: {
  },
});
