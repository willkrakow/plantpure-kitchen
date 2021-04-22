/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Flex, jsx } from 'theme-ui'
const Footer = () => {
    const data = useStaticQuery(graphql`
    {
      file(name: {eq: "logo"}) {
        childImageSharp {
          gatsbyImageData(width: 400, quality: 100)
        }
      }
    }
  `)

  

return (
<Flex as="footer" p={6} sx={{ justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
    <GatsbyImage sx={{ flex: "0 0 300px", display: "block" }} image={data.file.childImageSharp.gatsbyImageData} alt="PlantPure Nation" />
<span sx={{ display: "inline-block", flex: "1 0 100%", textAlign: "center", mt: "3" }}>PlantPure Nation &copy; {new Date().getFullYear().toString() }</span>
</Flex>
)
}

export default Footer