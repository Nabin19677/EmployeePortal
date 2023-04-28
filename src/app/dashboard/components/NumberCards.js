import React from 'react';
import {
  BankOutlined,
  TeamOutlined
} from '@ant-design/icons';

const Section = (props) => (
  <div className="row">
    <div className="col-xl-3 mb-4">
      <div className="number-card-v1">
        <div className="card-top">
          <BankOutlined />
        </div>
        <div className="card-info">
          <span>Teams</span>
        </div>
        <div className="card-bottom">
          <span>35</span>
        </div>
      </div>
    </div>

    <div className="col-xl-3 mb-4">
      <div className="number-card-v1">
        <div className="card-top">
          <span>
            {props.employeeState.employees.length}
          </span>
        </div>
        <div className="card-info">
          <span>Employees</span>
        </div>
        <div className="card-bottom">
          <TeamOutlined />
        </div>
      </div>
    </div>

  

  </div>
);

export default Section;
