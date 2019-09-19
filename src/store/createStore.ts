import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers';
import sagas from '../sagas';

const loggerActionColors = {
  success: 'green',
  failed: 'red',
  started: 'blue',
};

const sagaMiddleware = createSagaMiddleware();

declare var process: any;

const devMiddlewares = process.env.NODE_ENV === 'development'
  ? [createLogger({
    collapsed: true,
    duration: true,
    colors: {
      title: (action: any) => loggerActionColors[action.type.split('.')[1]],
    },
  })]
  : [];

export default (history) => {
  const store = createStore(
    createRootReducer(history),
    applyMiddleware(routerMiddleware(history), sagaMiddleware, ...devMiddlewares),
  );
  sagaMiddleware.run(sagas);
  return store;
};
