import { graphql } from "gatsby"
import BlogComponent from "../core/blog"

export default BlogComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString, locale: "tr")
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`
