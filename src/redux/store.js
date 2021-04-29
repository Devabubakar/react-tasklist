import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

import { persistStore } from 'redux-persist';
import persistedReducer from './root.reducer';



const store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

export default (persistor, store);
