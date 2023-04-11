export default {
  cart(state) {
    return state.cart;
  },
  cartTotal(_, getters) {
    return getters.cart.total.toFixed(2);
  },
};
