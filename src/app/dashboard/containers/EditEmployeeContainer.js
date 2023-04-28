import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as employeeSlice from "../employee.slice"
import { useHistory, useLocation, useParams } from 'react-router';
import EditEmployee from '../components/EditEmployee';

export const EditEmployeeContainer = (props) => {
  const {id} = useParams()
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

  const employeeState = useSelector((state) => state.employee);

  const editEmployee = (employee) => {
    console.log(employee)
    return dispatch(employeeSlice.editEmployee({...employee, id}))
  }

  props = {
    ...props,
    redirect,
    editEmployee,
    initialValues : employeeState.employees.find(emp => emp.id === id)
  }

  return <EditEmployee {...props} />;
};

export default EditEmployeeContainer;
