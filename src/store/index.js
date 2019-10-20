import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// eslint-disable-next-line no-console
const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhancer);

export default store;
