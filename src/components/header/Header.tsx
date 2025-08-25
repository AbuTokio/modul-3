import React from "react"
import "./Header.css"

export default function Header() {
  return (
    <>
      <header>
        {/* Statt class schreiben wir in React className */}
        <span className="header-span">Title</span>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </nav>
      </header>
    </>
  )
}
