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
            name="societyType"
            defaultValue={formData.societyType}
            options={[
              { label: "Apartment", value: "apartment" },
              { label: "Tenement", value: "tenement" },
            ]}
            onChange={(value) =>
              handleChange({
                target: { societyName: "societyType", value },
              })
            }
            required
          >
            View all
          </DSSelect>
          {
            console.log(formData)
          }
          {formData.societyType === "apartment" && (

            <DSInput
              label="Flor"
              placeholder="Enter Flor Number"
              name="florNumber"
              value={formData.florNumber}
              onChange={handleChange}
              required
            />
          )}
          <DSInput
            label="Wing Count"
            placeholder="Enter Wing Count"
            name="wingCount"
            value={formData.wingCount}
            onChange={handleChange}
            required
          />
          <DSInput
            label="Units"
            placeholder="Enter Units"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            required
          />
          <DSSelect
            label="Select Series"
            placeholder="Enter Series"
            name="selectSeries"
            defaultValue="Select Series"
            options={[
              { label: "1", value: "1" },
              { label: "10", value: "10" },
              { label: "100", value: "100" },
            ]}
            required
          />
        </div>
      </form>
    </DSModal>
  );
};
