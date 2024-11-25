import React, { useState } from "react";
import Icons from "@/constants/Icons";
import clsx from "clsx";
import {
  AddImportantNumberModal,
  DeleteModal,
  DSButton,
  DSCard,
  EditImportantNumberModal,
} from "../..";
import style from "./ImportantNumbersCard.module.css";

export const ImportantNumbersCard = () => {
  const ImportantNumber = [
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
    {
      fullName: "afseawef",
      phoneNumber: "12345465",
      work: "xtdfhbfdh",
    },
  ];

  const [addImportantNumber, setAddImportantNumber] = useState(false);
  const [editImportantNumber, setEditImportantNumber] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <div>
      <DSCard
        size="small"
        rootClass={style.card}
        className={clsx(style.cardBody, "d-flex flex-column")}
        title={"Important Numbers"}
        headerContent={
          <>
            <DSButton
              size={"small"}
              variant={"primary"}
              icon={Icons.AddSquare}
              onClick={() => setAddImportantNumber(true)}
            >
              Add
            </DSButton>
          </>
        }
      >
        {ImportantNumber.map((item) => (
          <div className={style.importantNumber}>
            <div className={style.detail}>
              <p>
                Name : <span>{item.fullName}</span>
              </p>
              <p>
                Ph Number : <span>{item.phoneNumber}</span>
              </p>
              <p>
                Work : <span>{item.work}</span>
              </p>
            </div>
            <div className={style.actions}>
              <DSButton
                icon={Icons.Trash}
                className={style.trashButton}
                size={"small"}
              />
              <DSButton
                icon={Icons.Edit}
                className={style.editButton}
                size={"small"}
              />
            </div>
          </div>
        ))}
      </DSCard>

      {/* Add Important Number Modal */}
      <AddImportantNumberModal
        open={addImportantNumber}
        handleCancel={() => setAddImportantNumber(false)}
        handleClose={() => setAddImportantNumber(false)}
        handleOk={() => setAddImportantNumber(false)}
      />

      {/* Edit Important Number Modal */}
      <EditImportantNumberModal
        open={editImportantNumber}
        handleCancel={() => setEditImportantNumber(false)}
        handleClose={() => setEditImportantNumber(false)}
        handleOk={() => setEditImportantNumber(false)}
      />

      {/* Remove Important Number Modal */}
      <DeleteModal
        title={"Delete Number?"}
        isModalOpen={deleteComplaint}
        handleClose={() => setDeleteComplaint(false)}
        handleOk={() => setDeleteComplaint(false)}
        onCancel={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this number?"}
      />
    </div>
  );
};
