import { useState } from "react";
import { Flex } from "antd";
import {
  CreateOtherIncomeModal,
  DSButton,
  DSCard,
  OtherIncomeCard,
} from "@/components";
import { useListOtherIncome } from "@/hook/Admin/FinancialMaintenance";

export const OtherIncome = () => {
  const [createOtherIncome, setCreateOtherIncome] = useState(false);
  const { dataListOtherIncome } = useListOtherIncome();
  return (
    <>
      <DSCard
        title={"Other Income"}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setCreateOtherIncome(true)}
          >
            Create Other Income
          </DSButton>
        }
      >
        <Flex gap={"small"}>
          {dataListOtherIncome?.map((content) => (
            <OtherIncomeCard
              title={content.title}
              amount={content.amount}
              totalMember={content.MemberCount}
              date={new Date(content?.date).toLocaleDateString()}
              dueDate={new Date(content?.dueDate).toLocaleDateString()}
              description={content.description}
            />
          ))}
        </Flex>
      </DSCard>

      {/* Create Other Income Modal */}
      <CreateOtherIncomeModal
        open={createOtherIncome}
        handleCancel={() => setCreateOtherIncome(false)}
        handleClose={() => setCreateOtherIncome(false)}
        handleOk={() => setCreateOtherIncome(false)}
      />
    </>
  );
};
