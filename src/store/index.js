import { createStore } from 'vuex';

import auth from './modules/auth';
import cart from './modules/cart';
import products from './modules/products';

export const store = createStore({
  modules: {
    auth,
    cart,
    products,
  },
});
