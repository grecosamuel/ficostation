import Home from "./components/Home";
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);


function App() {
  return (
    <div className="App">
     <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  );
}

export default App;
