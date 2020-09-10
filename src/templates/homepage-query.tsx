import { graphql } from "gatsby"
import HomepageComponent from "../core/homepage"

export default HomepageComponent

export const query = graphql`
  query($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, limit: 3) {
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
