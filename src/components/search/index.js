/**@jsx jsx */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { jsx, useThemeUI, Button } from 'theme-ui'
import SearchBar from './searchBar'


const Search = () => {
    const data = useStaticQuery(graphql`
    {
    allSanityCuisine {
      edges {
        node {
          _id
          name
          emoji
          slug {
            current
          }
        }
      }
    }
    allSanityCategory {
      edges {
        node {
          _id
          categoryTitle
          slug {
            current
          }
          categoryImage {
            asset {
              gatsbyImageData(fit: CROP, width: 50, height: 50)
            }
          }
        }
      }
    }
    allSanityBlogPost {
      edges {
        node {
          slug {
            current
          }
          recipeInfo {
            cuisine {
              name
            }
            category {
              categoryTitle
            }
          }
          name
          metadata {
            featuredImage {
              asset {
                gatsbyImageData(fit: CROP, width: 50, height: 50)
                url
              }
            }
            publishedDate
            recipeDescription
          }
          _id
        }
      }
    }
  }
    `)
    const { allSanityBlogPost, allSanityCuisine, allSanityCategory } = data;
    const [modalOpen, setModalOpen] = React.useState(false)

    const handleClick = () => setModalOpen(!modalOpen)
    const handleKeypress = (e) => {
        if (e.keyCode === 27){
            setModalOpen(false)
        }
    }
    const context = useThemeUI()
   

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleClick}>Search<span sx={{ display: 'inline-block', ml: 2 }} aria-label="Search" role="img">🔎</span></Button>
            <div sx={{ perspective: '200px', position: 'fixed', top: '0', right: '0', left: '0', bottom: modalOpen ? '0' : '100vh', background: 'rgba(255, 255, 255, 0.9)', opacity: modalOpen ? '1.0' : '0.0', zIndex: '900', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'all 0.6s ease' }}>
                <div  sx={{ transform: modalOpen ? 'none' : 'rotate3d(1, 0, 0, 90deg)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexBasis: '40em' }}>
                    <Button sx={{
                            position: 'absolute',
                            top: 4,
                            left: 4,
                        }}
                        onClick={handleClick}>
                        <span role='img' aria-label='Close'>❎</span>&nbsp;Close
                    </Button>
                    {modalOpen && <SearchBar handleKeypress={handleKeypress} context={context} recipes={allSanityBlogPost.edges} cuisines={allSanityCuisine.edges} categories={allSanityCategory.edges} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Search