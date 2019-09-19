import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sampleReducer from './sample.reducer';

export default (history: any) => combineReducers({
  router: connectRouter(history),
  sample: sampleReducer,
});
