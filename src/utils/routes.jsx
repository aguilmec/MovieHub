import { createBrowserRouter, useRouteError } from "react-router-dom";
import ProtectedRoutes from "../Protected Routes/ProtectedRoutes";
import Player from "../Pages/Player";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Root from "../Pages/Root";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />,
      errorElement: <div>Error 404: not found</div>,
      children: [
        {
            path:'/',
            element: <Home />
        },
        {
          path:'/movie/:id',
          element: <Player />
        }
      ]
    },{
      path: '/login',
      element: <Login />,
      errorElement: <div>Error 404: not found</div>,
    },{
      path: '/signup',
      element: <Signup />,
      errorElement: <div>Error 404: not found</div>
    }
  ]);

export default router;