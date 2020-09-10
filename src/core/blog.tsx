import React from "react"
import Blog from "../components/blog"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
}

export default function MinimalBlogCoreBlog({ data }: Props) {
  const { allPost } = data

  return <Blog posts={allPost.nodes} />
}
