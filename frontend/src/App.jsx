import { RouterProvider } from "react-router-dom";
import { DSLoader } from "./components/DSLoader";
import DashStackRoute from "./routes";
import { Suspense } from "react";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Suspense fallback={<DSLoader />}>
        <RouterProvider router={DashStackRoute} />
      </Suspense>
    </>
  );
}

export default App;
