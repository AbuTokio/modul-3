import { useEffect, useState } from "react"
import type { Product } from "../../interfaces/Product"
import axios from "axios"
import ProductItem from "../../components/productItem/ProductItem"

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("https://fakestoreapi.com/products")
      setProducts(resp.data)
    }
    fetchData()
  }, [])

  console.log(products)

  return (
    <div>
      <h4>Product Liste</h4>
      {products.map((product: Product) => {
        return (
          <div key={product.id}>
            <ProductItem product={product} />
          </div>
        )
      })}
    </div>
  )
}
