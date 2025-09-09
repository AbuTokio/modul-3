import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

interface Post {
  id: number
  title: string
  body: string
}

interface PostResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export default function PostList() {
  // % V1
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const resp = await axios.get("https://dummyjson.com/posts")
  //     return resp.data
  //   },
  // })

  // % V2

  const [page, setPage] = useState<number>(1)

  const fetchPosts = async (page: number): Promise<PostResponse> => {
    const limit = 5
    const skip = (page - 1) * limit

    const resp = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
    return resp.data
  }

  const { data, isLoading, error } = useQuery<PostResponse>({
    queryKey: ["posts", page], // Speicherplatz, der einen Namen als Key und Value beinhaltet
    queryFn: async () => await fetchPosts(page),
    retry: 3, // max 3 Versuche
    retryDelay: 2000, // 2 Sekunden warten zwischen den Versuchen
  })

  if (isLoading) return <p className="text-red-600">Lädt...</p>

  if (error) return <p className="text-red-600">Fehler: {error.message}</p>

  return (
    <div>
      <h2>Seite {page}</h2>
      <ul className="divide-y divide-red-800 rounded-md border border-yellow-600 mb-6">
        {data?.posts.map((post: Post) => (
          <li className="p-4 hover:bg-green-300 transition-colors" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      {page > 1 && (
        <button
          className="rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setPage(page - 1)}>
          Zurück
        </button>
      )}
      {data && data.total > page * 5 && (
        <button
          className="rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setPage(page + 1)}>
          Weiter
        </button>
      )}
    </div>
  )
}
