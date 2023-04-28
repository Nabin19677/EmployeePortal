import React from 'react';

// Import custom components
import CreateEmployee from '../components/CreateEmployee';
import { useDispatch, useSelector } from 'react-redux';

import * as employeeSlice from "../employee.slice"
import { useHistory } from 'react-router';

export const CreateEmployeeContainer = (props) => {
  const dispatch  = useDispatch();
  const history = useHistory();

  const redirect = (url, tabKey) => {
    history.push({
      pathname: url,
      state: {
        tabState: tabKey,
      },
    });
  };

  const employees = useSelector((state) => state.employee);



  const addEmployee = (employee) => {
    return dispatch(employeeSlice.addEmployee(employee))
  }

  props = {
    ...props,
    redirect,
    addEmployee
  }

  return <CreateEmployee {...props} />;
};

export default CreateEmployeeContainer;
