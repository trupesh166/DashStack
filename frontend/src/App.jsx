import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import DashStackRoute from "./routes";
import "./assets/css/style.css";

// export const HeaderBreadCrumb = createContext();

function App() {
  // const [isBreadCrumb, setIsBreadCrumb] = useState([]);

  
  return (
    <>
      {/* <HeaderBreadCrumb.Provider value={{ isBreadCrumb, setIsBreadCrumb }}> */}
        <RouterProvider router={DashStackRoute} />
      {/* </HeaderBreadCrumb.Provider> */}
    </>
  );
}

// export const useBreadCrumb = () => useContext(HeaderBreadCrumb);

export default App;
