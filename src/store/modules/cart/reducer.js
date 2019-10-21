export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS': {
      return [...state, action.product];
    }
    case '@cart/REMOVE': {
      const productIndex = state.findIndex(product => product.id === action.id);

      if (productIndex >= 0) {
        const newState = [...state];

        newState.splice(productIndex, 1);
        return newState;
      }

      return state;
    }
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      const productIndex = state.findIndex(product => product.id === action.id);

      if (productIndex >= 0) {
        const newState = [...state];

        newState[productIndex].amount = action.amount;
        return newState;
      }

      return state;
    }
    default:
      return state;
  }
}
