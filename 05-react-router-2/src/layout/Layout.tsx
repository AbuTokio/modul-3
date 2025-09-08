import { Outlet, useLocation } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Layout() {
  // Wir brauchen die Layout Komponente, damit wir das Outlet von React Router nutzen können.
  // Outlet ist dafür zuständig, dass die Kinder Komponenten (also die Route Kinder) gerendert werden.
  // Header und Footer sind immer sichtbar, egal welche Route wir aufrufen.

  // useLocation() ist ein Hook von React Router, der uns die aktuelle URL gibt.
  const location = useLocation()
  console.log(location)

  const hideFooter = location.pathname === "/login"

  return (
    <>
      <Header />
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  )
}
