export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD': {
      const product = {
        ...action.product,
        amount: 1,
      };
      return [...state, product];
    }
    default:
      return state;
  }
}
