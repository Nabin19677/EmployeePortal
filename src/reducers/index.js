import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '@utils/history';
import uiReducer from '@layout/duck/uiReducer';

import employeeReducer from '@app/dashboard/employee.slice';
import teamReducer from '@app/dashboard/team.slice';


const rootReducer = combineReducers({
  router: connectRouter(history),
  ui: uiReducer,
  employee : employeeReducer.reducer,
  team : teamReducer.reducer
})

export default rootReducer;
