import { createBrowserRouter, useRouteError } from "react-router-dom";
import Home from "../Pages/Home";
import Player from "../Pages/Player";
import Root from "../Pages/Root";

const router = createBrowserRouter([
    {
      path:'/',
      element:<Root />,
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
    }
  ]);

export default router;