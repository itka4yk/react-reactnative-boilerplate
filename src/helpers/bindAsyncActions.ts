import { put } from 'redux-saga/effects';

interface IArgs {
  payload?: any;
}

export const bindAsyncActions = asyncAction => actionHandler => function* (args: IArgs | any = {}, {
  successPayloadMapper = p => p,
  failurePayloadMapper = e => e,
  startedPayloadMapper = (p?: any) => p,
} = {}) {
  try {
    yield put(asyncAction.started(startedPayloadMapper()));
    const result = yield actionHandler(args.payload || args);
    yield put(asyncAction.success(successPayloadMapper(result)));
    return { result };
  } catch (error) {
    yield put(asyncAction.failed(failurePayloadMapper(error)));
    return { error };
  }
};
