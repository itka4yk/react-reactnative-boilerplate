import { createActions, createAction } from 'redux-actions';

export const createActionFactory = (namespace: string) => ({
  create: (type: string) => createAction(`${namespace}/${type}`),
  createAsync: (prefix: string) => createActions({
    success: payload => payload,
    started: payload => payload,
    failed: error => error,
  }, {
    prefix: `${namespace}/${prefix}`,
    namespace: '.',
  }),
});
