import React from "react"
import Liste from "../liste/Liste"

export default function Footer() {
  return (
    <>
      <footer>
        <p>Ich bin der Footer Component</p>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>
        <Liste />
      </footer>
    </>
  )
}
