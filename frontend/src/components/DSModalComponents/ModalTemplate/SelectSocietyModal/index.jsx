import { DSInput, DSModal, DSSelect } from "@/Components";
import { useAddSociety } from "@/hook/Auth/AddSociety";
import clsx from "clsx";
import styles from "./SelectSocietyModal.module.css";

export const SelectSocietyModal = ({ open, onCancel, handleClose }) => {
  const { handleChange, handleSubmit, formData, isFormValid } =
    useAddSociety(handleClose);

  return (
    <DSModal
      title="Create New Society"
      IsFooter
      open={open}
      onCancel={onCancel}
      handleClose={handleClose}
      variant="primary"
      // Apply Button
      handleContent="Apply"
      handleOk={handleSubmit}
      disabledButton={!isFormValid}
    >
      <form onSubmit={handleSubmit}>
        <div className={clsx(styles.InputWrapper, "d-grid flex-column")}>
          <DSInput
            parentClassName={styles.colSpan}
            label="Society Name"
            placeholder="Enter Society Name"
            name="societyName"
            value={formData.societyName}
            onChange={handleChange}
            required
          />
          <DSInput
            parentClassName={styles.colSpan}
            label="Society Address"
            placeholder="Enter Address"
            name="societyAddress"
            value={formData.societyAddress}
            onChange={handleChange}
            required
          />
          <DSInput
            label="Country"
            placeholder="Enter Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <DSInput
            label="State"
            placeholder="Enter State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <DSInput
            label="City"
            placeholder="Enter City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <DSInput
            label="Zip Code"
            placeholder="Enter Zip Code"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
          <DSSelect
            label="Society Type"
            placeholder="Society Type"
            defaultValue="Type"
            options={[
              { label: "Apartment", value: "apartment" },
              { label: "Tenement", value: "tenement" },
            ]}
          >
            View all
          </DSSelect>
          <DSInput
            label="Wing Count"
            placeholder="Enter Wind Count"
            name="wingCount"
            value={formData.wingCount}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </DSModal>
  );
};
