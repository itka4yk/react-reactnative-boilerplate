import { all } from 'redux-saga/effects';
import { sampleSaga } from "./sample.saga";

export default function* () {
  yield all([
    sampleSaga(),
  ]);
}
