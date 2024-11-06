import { DSCheckbox } from "@/components";

export const CheckBox = () => {
  return (
    <>
      <div>
        <h2>Without Lable</h2>
        <DSCheckbox></DSCheckbox>
      </div>
      <div>
        <h2>With Lable</h2>
        <DSCheckbox>Hello</DSCheckbox>
      </div>
    </>
  );
};
