export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD': {
      const product = {
        ...action.product,
        amount: 1,
      };
      return [...state, product];
    }
    case '@cart/REMOVE': {
      const stateCopy = [...state];
      const productIndex = stateCopy.findIndex(
        product => product.id === action.id
      );
      if (productIndex >= 0) {
        stateCopy.splice(productIndex, 1);
      }
      return stateCopy;
    }
    default:
      return state;
  }
}
