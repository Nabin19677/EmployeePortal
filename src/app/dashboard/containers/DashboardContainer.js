import React from 'react';

// Import custom components
import Dashboard from '@app/dashboard/components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import * as employeeSlice from "../employee.slice"

export const DashboardContainer = (props) => {
  const dispatch  = useDispatch();
  const employeeState = useSelector((state) => state.employee);
  const teamState = useSelector((state) => state.team);

  const deleteEmployee = (id) => {
    return dispatch(employeeSlice.deleteEmployee({ id}))
  }

  props = {
    ...props,
    employeeState,
    teamState,
    deleteEmployee
  }
  return <Dashboard {...props} />;
};

export default DashboardContainer;
