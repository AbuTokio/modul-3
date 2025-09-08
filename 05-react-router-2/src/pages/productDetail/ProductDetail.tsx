import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { Product } from "../../interfaces/Product"

export default function ProductDetail() {
  const [product, setProduct] = useState<Product>()
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(resp.data)
    }

    fetchData()
  }, [id])

  return (
    <div>
      ProductDetail
      <h3>Title: {product?.title}</h3>
      <p>Price: {product?.price}</p>
      <img src={product?.image} alt={product?.title} />
      <p>Description: {product?.description}</p>
      <Link to="/shop">Back to Shop</Link>
    </div>
  )
}
