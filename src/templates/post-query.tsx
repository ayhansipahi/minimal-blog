import { graphql } from "gatsby"
import PostComponent from "../core/post"

export default PostComponent

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    post(slug: { eq: $slug }) {
      slug
      title
      date(formatString: $formatString, locale: "tr")
      tags {
        name
        slug
      }
      description
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`
