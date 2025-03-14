const store = {
  state: {
    cart: [],
    shop: [],
  },

  getState() {
    return this.state;
  },

  dispatch(action) {
    this.state = reducer(this.state, action);
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'Add to cart':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'Remove from cart':
      return { ...state, cart: [...state.cart.slice(1, 4)] };

    default:
      return state;
  }
}

function addToCart(product) {
  return { type: 'Add to cart', payload: product };
}
function removeFromCart(product) {
  return { type: 'Remove from cart', payload: product };
}

// store.dispatch('apple')
// store.dispatch('orange')
store.dispatch(addToCart('potato'));
store.dispatch(addToCart('apple'));
store.dispatch(removeFromCart('apple'));
store.dispatch(addToCart('tomato'));
// console.log(store.state)
console.log(store.getState());
