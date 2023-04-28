import React from 'react';
import { Table, Button, Space, Tooltip } from 'antd';
import { PlusOutlined, FileSearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const Employees = (props) => {
  const {
    redirect,
    employeeState: { employees },
    deleteEmployee
  } = props;
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Full Name',
      dataIndex: 'firstName',
      render: (text, record) => {
        return <div>{[record.firstName, record.lastName, record.middleName].join(' ')}</div>;
      },
    },
    {
      title: 'Current Team',
      dataIndex: 'team',
      render: (text, record) => {
        return <div>{record.team || "Available"}</div>;
      },
    },
    {
      title: 'Mobile Number',
      dataIndex: 'phone',

    },
    {
      title: 'Email Address',
      dataIndex: 'email',

    },
    {
      title: 'Designation',
      dataIndex: 'jobPosition',

    },
    {
      title: 'Billable Hours',
      dataIndex: 'billableHours',
      render: (text, record) => {
        return <div>{record.billableHours} hours/week</div>;
      },
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      align: 'center',
      render: (text, record) => {
        return (
          <span>
             <Space wrap size={6}>
            <Tooltip placement="top" title="View Detail">
              <Button
                type="default"
                shape="circle"
                icon={<FileSearchOutlined />}
                style={{ color: 'rgba(29, 68, 134, 1)' }}
                onClick={(e) => {
                 
                  
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="Edit">
              <Button
                type="default"
                shape="circle"
                icon={<EditOutlined />}
                style={{ color: 'rgba(29, 68, 134, 1)' }}
                onClick={(e) => {
                  redirect('/employee/edit/'+record.id);
                }}
              />
            </Tooltip>
            <Tooltip placement="top" title="Delete">
              <Button
                type="default"
                shape="circle"
                icon={<DeleteOutlined />}
                style={{ color: 'rgb(255, 99, 71)' }}
                onClick={(e) => {
                  deleteEmployee(record.id)
                }}
              />
            </Tooltip>
          </Space>
          </span>
        );
      },
    },


  ];

  return (
    <>
      <div className="flex">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            redirect('/employee');
          }}
        >
          Add Employee
        </Button>
      </div>

      <div className="mt-2">
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={employees}
          pagination={false}
          bordered={false}
        />
      </div>
    </>
  );
};

export default Employees;
