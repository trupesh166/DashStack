import React from 'react'
import { DSCard, DSTable } from '../../../components'
import { Tag, Tooltip } from 'antd';

const data = [
  {
    key: "1",
    title: "Physical Security",
    description: "Implementing surveillance cameras in public spaces.",
    date: "11/01/2024",
    time: "3:45 PM",
  },
  {
    key: "2",
    title: "Cybersecurity",
    description: "Securing critical infrastructure, government systems.",
    date: "12/01/2024",
    time: "6:40 AM",
  },
];

export const SecurityProtocols = () => {

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      // ellipsis: {
      //   showTitle: false,
      // },
      // render: (description) => (
      //   <Tooltip placement="topLeft" title={description}>
      //     {description}
      //   </Tooltip>
      // ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (time) => (
        <Tag
          color='default'
          bordered={false}
          style={{ borderRadius: "80px", padding: "8px 15px" }}
        >
          {time}
        </Tag>
      ),
      align: "center",
    },
  ]

  return (
    <>
      <DSCard
        title="Security Protocols"
      />

      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </>
  )
}