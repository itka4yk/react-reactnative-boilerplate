import { handleActions } from 'redux-actions';
import { getSampleEmployeesAsync } from '../../actions/sample';

export interface IState {
  employees: { id: string }[];
}

const initialState: IState = {
  employees: [],
};

export default handleActions({
  [getSampleEmployeesAsync.success]: (s, a) => ({ ...s, employees: a.payload }),
}, initialState);
