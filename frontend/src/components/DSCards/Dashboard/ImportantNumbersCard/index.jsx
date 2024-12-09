import React, { useState } from "react";
import Icons from "@/constants/Icons";
import clsx from "clsx";
import {
  AddImportantNumberModal,
  DeleteModal,
  DSButton,
  DSCard,
  EditImportantNumberModal,
} from "../../..";
import styles from "./ImportantNumbersCard.module.css";
import { useAddImportantNumber, useListImportantNumber, useEditImportantNumber } from "@/hook/Admin/ImportantNumbers";
// import { useAddImportantNumber } from "../../../../hook/Admin/ImportantNumbers/AddImportantNumbers";
// import { useListImportantNumber } from "../../../../hook/Admin/ImportantNumbers/ListImportantNumbers";
// import { useEditImportantNumber } from "../../../../hook/Admin/ImportantNumbers/EditImportantNumbers";

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
  const [editFormData, setEditFormData] = useState();

  const { handleSubmit, handleInputChange, formValues } = useAddImportantNumber()
  const { importantNumber, fetchimportantNumber } = useListImportantNumber()
  const { edithandleSubmit, handleEditInputChange } = useEditImportantNumber(editFormData, setEditFormData, fetchimportantNumber)
  // const {
  //   importantNumberDelete,
  //   loading,
  //   importantNumberData,
  //   setImportantNumberData,
  //   showDeleteModal,
  //   setShowDeleteModal,
  // } = useDeleteImportantNumber();


  const handleClose = async () => {
    setAddImportantNumber(false)
    setEditImportantNumber(false)
    setDeleteComplaint(false)
    await fetchimportantNumber()
  }

  const handleEdit = (data) => {
    setEditImportantNumber(true)
    setEditFormData(data)
  }

  // const handleDeleteImportantNumber = async () => {
  //   if(importantNumberData){
  //     const result = await importantNumberDelete(importantNumberData._id)
  //     if(result.success){
  //       setShowDeleteModal(false);
  //       setImportantNumberData(null);
  //       await fetchimportantNumber();
  //     }else{
  //       console.log("Error deleting announcement");
  //     }
  //   }
  // }

  return (
    <>
      <DSCard
        size="small"
        rootClass={clsx(styles.card, "overflow-hidden")}
        className={clsx(styles.cardBody, "d-flex flex-column")}
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
        {importantNumber?.map((item) => (
          <div
            className={clsx(
              styles.importantNumber,
              "d-flex align-items-center"
            )}
          >
            <div className={styles.detail}>
              <h6 className="lh-base">
                Name : <span className="clr-silver">{item.fullName}</span>
              </h6>
              <h6 className="lh-base">
                Ph Number :{" "}
                <span className="clr-silver">{item.phoneNumber}</span>
              </h6>
              <h6 className="lh-base">
                Work : <span className="clr-silver">{item.work}</span>
              </h6>
            </div>
            <div className={clsx(styles.actions, "d-flex")}>
              <DSButton
                icon={Icons.Trash}
                size={"small"}
                className="clr-danger"
              />
              <DSButton icon={Icons.Edit} size={"small"} className="clr-cult" onClick={() => handleEdit(item)} />
            </div>
          </div>
        ))}
      </DSCard>

      {/* Add Important Number Modal */}
      <AddImportantNumberModal
        open={addImportantNumber}
        handleCancel={() => handleClose()}
        handleClose={() => handleClose()}
        handleOk={(e) => {
          handleSubmit(e)
          handleClose()
        }}
        handleInputChange={handleInputChange}
        formValues={formValues}

      />

      {/* Edit Important Number Modal */}
      <EditImportantNumberModal
        open={editImportantNumber}
        handleCancel={() => handleClose()}
        handleClose={() => handleClose()}
        handleOk={() => {
          setEditImportantNumber(false)
          edithandleSubmit(editFormData)
        }}
        formValues={editFormData}
        handleInputChange={handleEditInputChange}
      />

      {/* Remove Important Number Modal */}
      <DeleteModal
        title={"Delete Number?"}
        isModalOpen={deleteComplaint}
        handleClose={() => handleClose()}
        onCancel={() => handleClose()}
        handleOk={() => setDeleteComplaint(false)}
        children={"Are you sure you want to delate this number?"}
      />
    </>
  );
};
