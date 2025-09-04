import { Link, useParams } from "react-router"
import blogData from "../data/blogData.json"

export default function BlogDetail() {
  // * useLocation gibt uns Informationen vergleichbar mit window.location: pathname, search, key, usw.
  // const location = useLocation()
  // console.log(location)

  const { slug } = useParams()
  if (!slug) return "404 Error!"

  const blogEntry = blogData.find((entry) => entry.slug === slug)
  if (!blogEntry)
    return (
      <p>
        404, Article not found! <Link to="/blog">Back to Overview</Link>
      </p>
    )

  return (
    <div>
      <h1>{blogEntry.title}</h1>
      <p>{blogEntry.content}</p>
    </div>
  )
}
