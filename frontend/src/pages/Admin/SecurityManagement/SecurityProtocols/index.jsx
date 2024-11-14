import { Space } from "antd";
import { DSButton, DSCard, DSTable } from "../../../../components";
import Icons from "../../../../constants/Icons";

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
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Edit}
          className="clr-success"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="clr-cult"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Trash}
          className="clr-primary"
        />
      </Space>
    ),
  },
];

export const SecurityProtocols = () => {
  return (
    <DSCard title="Security Protocols">
      <DSTable
        dataSource={data}
        tableColumn={columns}
        pagination={false}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
      />
    </DSCard>
  );
};
