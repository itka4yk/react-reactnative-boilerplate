import { takeEvery } from 'redux-saga/effects';
import { getSampleEmployees, getSampleEmployeesAsync } from "../actions/sample";
import Api from "../services/api.service";
import { bindAsyncActions } from "../helpers/bindAsyncActions";

export function* sampleSaga() {
  yield takeEvery(getSampleEmployees, bindAsyncActions(getSampleEmployeesAsync)(Api.getSampleEmployees));
}
