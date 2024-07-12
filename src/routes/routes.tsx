
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import Nav from "../components/Nav";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Campaign from "../pages/Campaign";
import Tools from "../pages/Tools";
import EditoPage from "../pages/EditoPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>
      },
      
      {
        path: "/tools",
        element: <Tools></Tools>
      },
      
    ]
  },
  {
    path: "/editor",
    element: <EditoPage></EditoPage>
  }
])

export default router