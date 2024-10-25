import { RouterProvider } from "react-router-dom";

import DashStackRoute from "./routes";
import "./assets/css/style.css";

function App() {
  return <RouterProvider router={DashStackRoute} />;
}

export default App;
