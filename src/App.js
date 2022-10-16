import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Main from "./Components/Leyout/Main";
import Login from "./Components/Login";
import Orders from "./Components/Orders";
import Register from "./Components/Register";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
          ),
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
