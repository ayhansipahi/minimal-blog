/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div sx={{display:"flex", alignContent:"flex-start"}}>
        <Link rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" sx={{mr:1, display: "flex", alignItems: "center"}}> 
          <img sx={{height: "15px"}} alt="Creative Commons Lisansı" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
        </Link>
        {" "}
        {new Date().getFullYear()} - {siteTitle}.
      </div>
      <div>
        <Link href="#" >{"👆"}</Link>
      </div>
    </footer>
  )
}

export default Footer
