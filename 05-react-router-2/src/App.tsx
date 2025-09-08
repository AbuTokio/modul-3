import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Shop from "./pages/shop/Shop"
import ProductDetail from "./pages/productDetail/ProductDetail"

function App() {
  // ~ npm i react-router
  // ~ Wir deklarieren eine Variable mit dem Namen "router".
  // ~ Sie wird mit der Methode "createBrowserRouter" erstellt.
  // ~ Innerhalb dieser Methode bzw. Function wird noch eine andere Function benötigt. Undzwar: "createRoutesFromElements".
  // ~ Danach kommt das Element <Route>.
  // ~ Die Eltern <Route> haben einen offenen Tag und einen geschlossenen Tag.
  // ~ Die Kinder <Route>'s haben einen Self-Closing Tag.
  // ~ Route hat zwei Eigenschaften: path und element.

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        {/* Was man ab : schreibt, ist das was man in der ProductDetail Seite als useParams wieder übernimmt. */}
        <Route path="shop/:id" element={<ProductDetail />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
