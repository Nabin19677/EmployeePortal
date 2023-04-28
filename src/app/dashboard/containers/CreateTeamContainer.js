import React from 'react';

// Import custom components
import { useDispatch, useSelector } from 'react-redux';

import * as teamSlice from "../team.slice"
import { useHistory } from 'react-router';
import CreateTeam from '../components/CreateTeam';

export const CreateTeamContainer = (props) => {
  const dispatch  = useDispatch();
  const history = useHistory();

  const employeeState = useSelector((state) => state.employee);

  const redirect = (url, tabKey) => {
    history.push({
      pathname: url,
      state: {
        tabState: tabKey,
      },
    });
  };


  const addTeam= (team) => {
    return dispatch(teamSlice.addTeam(team))
  }

  props = {
    ...props,
    redirect,
    addTeam,
    employeeState
  }

  return <CreateTeam {...props} />;
};

export default CreateTeamContainer;
