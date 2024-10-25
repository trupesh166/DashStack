import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
      }}
    />
  );
};
