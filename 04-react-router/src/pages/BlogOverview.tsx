import { Link } from "react-router"
import blogData from "../data/blogData.json"

export default function BlogOverview() {
  return (
    <div>
      <h1>Mein schöner Blog</h1>
      <p>Willkommen auf meiner schönen Seite!</p>
      <ul className="mt-8">
        {blogData.map((entry) => (
          <li>
            <Link to={`/blog/${entry.slug}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
