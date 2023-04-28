import DashboardContainer from './containers/DashboardContainer';

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Authorization from '@routes/Authorization';
import NotFound from '@app/exception/components/NotFound';
import CreateEmployeeContainer from './containers/CreateEmployeeContainer';
import EditEmployeeContainer from './containers/EditEmployeeContainer';
import CreateTeamContainer from './containers/CreateTeamContainer';

export const Dashboard = ({ match }) => {
  return (
    <Fragment>
      <Switch>
        <Authorization exact path={`${match.url}`} component={DashboardContainer} />
        <Route exact path={`${match.url}employee`} component={CreateEmployeeContainer} />
        <Route exact path={`${match.url}employee/edit/:id`} component={EditEmployeeContainer} />
        <Route exact path={`${match.url}team`} component={CreateTeamContainer} />
        <Route exact path={`${match.url}team/edit/:id`} component={EditEmployeeContainer} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default Dashboard;
