import type React from "react"
import type { Product } from "../../interfaces/Product"
import Cart from "../../assets/svg/Cart"
import "./Header.css"
import { useState } from "react"

interface HeaderProps {
  warenkorb: Product[]
  setWarenkorb: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function Header({ warenkorb, setWarenkorb }: HeaderProps) {
  const [warenkorbModal, setWarenkorbModal] = useState<boolean>(false)

  const pay = () => {
    setWarenkorb([])
    alert("Vielen Dank für deinen Einkauf!")
    setWarenkorbModal(false)
  }

  const deleteProductFunction = (productId: number): void => {
    const filteredWarenkorb = warenkorb.filter((product: Product) => product.id !== productId)

    setWarenkorb(filteredWarenkorb)
  }

  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <div
          className="cart-icon"
          onClick={() => {
            setWarenkorbModal(!warenkorbModal)
          }}>
          <p className="num">{warenkorb.length}</p>
          <Cart />
        </div>

        {warenkorbModal && (
          <div className="cart">
            <h3>Warenkorb</h3>
            {warenkorb.length !== 0 ? (
              <>
                {warenkorb.map((product: Product) => {
                  return (
                    <div key={product.id}>
                      <p>
                        {product.title} {product.price}
                      </p>
                      <button onClick={() => deleteProductFunction(product.id)}>❌</button>
                    </div>
                  )
                })}
                <button onClick={pay}>Bezahlen</button>
              </>
            ) : (
              <>
                <p>Dein Warenkorb ist leer...</p>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
