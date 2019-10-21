import { select, call, put, all, takeLatest } from 'redux-saga/effects';

import { updateAmount, addToCartSuccess } from './actions';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const productData = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(productData));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
