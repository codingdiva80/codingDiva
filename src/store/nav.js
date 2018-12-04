import {
  SET_NAV,
} from '@/store/mutation-types';

const state = {
  current_nav : getDefaultNav(),
}

const getters = {
  getNav(){ return state.current_nav; }
}

const mutations = {
  [SET_NAV](state, { url }){
    state.current_nav = url;
  }
}

function getDefaultNav(){
  const urlArray = window.location.href.split('/');
  if(!urlArray[3]){ return 'home'; }
  return urlArray[3];
}

export default {
  state,
  mutations,
  getters
}