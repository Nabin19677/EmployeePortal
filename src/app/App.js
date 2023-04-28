import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { notification, message } from 'antd';

// Import custom components
import PrivateRoute from '@routes/PrivateRoute';
import PublicRoute from '@routes/PublicRoute';

const AsyncAppLayout = loadable(() => import('@layout/main'));

const AsyncNotFound = loadable(() => import('./exception/containers/NotFoundContainer'));
const AsyncForbidden = loadable(() => import('./exception/containers/ForbiddenContainer'));
const AsyncInternalServer = loadable(() =>
  import('./exception/containers/InternalServerContainer')
);


const AsyncDashboard = loadable(() => import('./dashboard/index'));


const App = () => {
  notification.config({ maxCount: 1, duration: 3 });
  message.config({ maxCount: 1, duration: 3 });
  return (
    <Fragment>
      <Switch>
        <PublicRoute path="/" layout={AsyncAppLayout} component={AsyncDashboard} />

        <PrivateRoute path="/403" layout={AsyncAppLayout} component={AsyncForbidden} />
        <Route path="/500" component={AsyncInternalServer} />
        <Route path="/404" component={AsyncNotFound} />
        <Route component={AsyncNotFound} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(App);
