import React from 'react';
import { Row, Col, Card, Layout, PageHeader, Tabs, Spin, Form } from 'antd';
import NumberCards from './NumberCards';
import ProjectTable from './ProjectTable';
import { useHistory } from 'react-router';
import { useState } from 'react';
import Teams from './Teams';
import Employees from './Employees';

const Dashboard = (props) => {
  const history = useHistory();
  const stateFromLink = history?.location?.state;
  const tabKeyValue = stateFromLink?.tabState || 'WAITING_FOR_APPROVAL';
  const [currentTabKey, setCurrentTabKey] = useState(tabKeyValue);

  const redirect = (url, searchQuery = '') => {
    history.push({
      pathname: url,
      state: {
        tabState: currentTabKey,
      },
    });
  };

  const handleTabChange = (e) => {};

  let tabProps = {
    ...props,
    redirect
  };

  const tabs = [
    { key: 'TEAMS', tab: 'Teams', component: <Teams {...tabProps} /> },
    { key: 'EMPLOYEES', tab: 'Employees', component: <Employees {...tabProps} /> },
  ];

  return (
    <div className="container-fluid no-breadcrumb page-dashboard">
      <h4 className="article-title">Managed Users</h4>
      <div key="1">
        {' '}
        <NumberCards {...props} />{' '}
      </div>
      {/* <div key="2">
      {' '}
      <ProjectTable />{' '}
    </div> */}

      <Tabs
        defaultActiveKey={currentTabKey}
        tabPosition="top"
        animated={true}
        onChange={handleTabChange}
        destroyInactiveTabPane
        type="card"
      >
        {tabs?.map((retailAccountTabs, index) => (
          <Tabs.TabPane key={retailAccountTabs?.key} tab={retailAccountTabs?.tab}>
            {retailAccountTabs?.component}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Dashboard;
