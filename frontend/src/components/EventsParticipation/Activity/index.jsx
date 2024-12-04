import React from 'react'
import { DSCard, DSTable } from '../..';
import { Avatar } from 'antd';

export const Activity = () => {

  const data = [
    {
      key: "1",
      name: "Brooklyn Simmons",
      description: "Event and recreational activities.",
      time: "2:45 PM",
      date: "10/02/2024",
      title: "Holi Festival"
    },
    {
      key: "2",
      name: "Esther Howard",
      description: "Securing critica government systems.",
      time: "2:45 PM",
      date: "10/02/2024",
      title: "Ganesh Chaturthi"
    },
  ];

  const columns = [
    {
      title: "Participator Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} width="40" style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Activity Time",
      dataIndex: "time",
      key: "time",
      align: "center"
    },
    {
      title: "Activity Date",
      dataIndex: "date",
      key: "date",
      align: "center"
    },
    {
      title: "Activity Name",
      dataIndex: "title",
      key: "title",
    },
  ];

  return (
    <DSCard
      title="Events Participation"
    >

      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />

    </DSCard>
  )
}