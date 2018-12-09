import Vue from 'vue';
import Vuex from 'vuex';
import Nav from './nav';
import Config from './config';
import JobSearch from './job-search';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Nav,
    Config,
    JobSearch,
  }
});

