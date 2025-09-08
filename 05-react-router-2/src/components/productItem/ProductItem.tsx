import { Link } from "react-router"
import type { Product } from "../../interfaces/Product"

interface ProductItemProps {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      <h3>Title: {product.title}</h3>
      <img src={product.image} alt={product.title} />
      <Link to={`/shop/${product.id}`}>See more details</Link>
    </div>
  )
}
