import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"
import BlogOverview from "./pages/BlogOverview"

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "*",
        element: <div>404, alles kaputt</div>,
      },
      {
        path: "/",
        // element: <Home />, // % V1
        Component: Home, // % V2
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/blog",
        Component: BlogOverview,
      },
      {
        path: "/blog/:slug",
        element: <div>Detailseite</div>,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
