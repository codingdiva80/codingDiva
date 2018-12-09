import { SET_JOB_SEARCH } from '@/store/mutation-types';

const state = {
  isSearching: false,
  searchCriteria: '',
  searchLocation: '',
}

const getters = {
  getSearch(){ return state;}
}

const mutations = {
  [SET_JOB_SEARCH](state, {
    isSearching, searchCriteria, searchLocation
  }){
    state.isSearching = isSearching,
    state.searchCriteria = searchCriteria,
    state.searchLocation = searchLocation
  }
}

export default {
  state,
  getters,
  mutations
}