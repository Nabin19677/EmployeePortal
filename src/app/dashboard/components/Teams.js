import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import QRCode from 'react-qr-code';

export const Teams = (props) => {
  const {
    redirect,
    teamState: { teams },
  } = props;

  console.log(teams);
  const columns = [
    {
      title: 'Team Name',
      dataIndex: 'teamName',
    },
    {
      title: 'QR Details',
      dataIndex: '#',
      render: (_, record) => {
        return (
            <QRCode  style={{  width : 50 , height : 50 }}
              value={JSON.stringify({ teamName: record.teamName, password: record.teamPassword })}
            />
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
            redirect('/team');
          }}
        >
          Add Team
        </Button>
      </div>{' '}
      <div className="mt-2">
        {' '}
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={teams}
          pagination={false}
          bordered={false}
        />
      </div>
    </>
  );
};

export default Teams;
