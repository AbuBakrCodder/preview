// import Navbar from "./components/Navbar"
import Layout from "./Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Users from "./Pages/Users"
import Products from "./Pages/Products"

function App() {
  let router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Users/>
      },
      {
        path: "/products",
        element: <Products/>
      }
    ]
  }])

  return <RouterProvider router={router}/>
}

export default App
