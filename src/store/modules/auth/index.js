import authActions from './actions';
import authGetters from './getters';
import authMutations from './mutations';

export default {
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};
