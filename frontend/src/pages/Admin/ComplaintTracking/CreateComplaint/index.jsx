import { Avatar, Space, Tag, Tooltip } from "antd";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";

const columns = [
  {
    title: "Complainer Name",
    dataIndex: "complainerName",
    key: "complainerName",
    render: (text, record) => (
      <Space>
        <Avatar src={record.avatar} />
        {text}
      </Space>
    ),
  },
  {
    title: "Complaint Name",
    dataIndex: "complaintName",
    key: "complaintName",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: {
      showTitle: false,
    },
    render: (description) => (
      <Tooltip placement="topLeft" title={description}>
        {description}
      </Tooltip>
    ),
  },
  {
    title: "Unit Number",
    dataIndex: "unitNumber",
    key: "unitNumber",
    render: (text, record) => <Tag color={record.unitColor}>{text}</Tag>,
  },
  {
    title: "Priority",
    key: "priority",
    dataIndex: "priority",
    render: (priority) => {
      let color =
        priority === "High" ? "red" : priority === "Medium" ? "blue" : "green";
      return (
        <Tag color={color} key={priority}>
          {priority.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color =
        status === "Pending" ? "gold" : status === "Open" ? "cyan" : "lime";
      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: () => (
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
          className="clr-danger"
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    complainerName: "Evelyn Harper",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Unethical Behavior",
    description: "Providing false information or deliberately.",
    unitNumber: "1001",
    unitColor: "blue",
    priority: "Medium",
    status: "Pending",
  },
  {
    key: "2",
    complainerName: "Esther Howard",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Preventive Measures",
    description: "Regular waste collection services.",
    unitNumber: "1002",
    unitColor: "blue",
    priority: "Low",
    status: "Open",
  },
  {
    key: "3",
    complainerName: "Jenny Wilson",
    avatar: "/placeholder.svg?height=32&width=32",
    complaintName: "Unethical Behavior",
    description: "Designated garages for residents and guests.",
    unitNumber: "1003",
    unitColor: "blue",
    priority: "High",
    status: "Solve",
  },
];

export const ComplaintCreate = () => {
  return (
    <DSCard title={"Create Complaint"}>
      <DSTable tableColumn={columns} dataSource={data} pagination={false} />
    </DSCard>
  );
};
