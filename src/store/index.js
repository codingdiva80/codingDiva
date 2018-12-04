import Vue from 'vue';
import Vuex from 'vuex';
import Nav from './nav';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Nav
  }
});

