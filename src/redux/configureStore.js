import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './index';
// import rootSaga from '../sagas';

export default () => {
  const middleware = [];

  // const sagaMiddleware = createSagaMiddleware();
  // middleware.push(sagaMiddleware);

  if (__DEV__) {
    const loggerMiddleware = createLogger();
    middleware.push(loggerMiddleware);
  }
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // sagaMiddleware.run(rootSaga);

  return store;
};
