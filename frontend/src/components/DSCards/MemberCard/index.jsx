import { Card } from "antd";

export const MemberCard = ({
  title,
  email,
  phone,
  age,
  gender,
  relation,
  extra,
}) => {
  return (
    <Card title={title} extra={extra}>
      <div className={"card-grid"}>
        <h6>Email</h6>
        <h6 className="fw-medium lh-base">{email}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Phone Number</h6>
        <h6 className="fw-medium lh-base">{phone}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Age</h6>
        <h6 className="fw-medium lh-base">{age}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Gender</h6>
        <h6 className="fw-medium lh-base">{gender}</h6>
      </div>
      <div className={"card-grid"}>
        <h6>Relation</h6>
        <h6 className="fw-medium lh-base">{relation}</h6>
      </div>
    </Card>
  );
};
