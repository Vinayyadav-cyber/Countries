import { createRoot } from "react-dom/client"


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "./App";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import CountryDetail from "./componets/CountryDetail";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
       children:[
    {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/:country",
        element: <CountryDetail/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
    
  ],
},
])
  

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router} />)
