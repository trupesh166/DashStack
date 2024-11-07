import { DSCheckbox } from "@/components";

export const CheckBox = () => {
  return (
    <>
      <div>
        <h3>Without Label</h3>
        <DSCheckbox></DSCheckbox>
      </div>
      <div>
        <h3>With Label</h3>
        <DSCheckbox>Hello</DSCheckbox>
      </div>
    </>
  );
};
