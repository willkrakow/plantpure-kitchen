/** @jsx jsx */
import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { Themed, Grid, jsx, Container } from "theme-ui";
import CategoryCard from '../components/CategoryCard';
import { moveUp } from '../animation';

const Categories = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityCategory {
        edges {
          node {
            categoryImage {
              asset {
                gatsbyImageData(fit: CROP, width: 800, height: 800)
              }
            }
            _id
            categoryDescription
            categoryTitle
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const { allSanityCategory } = data;
  return (
    <React.Fragment>
    <Container>
      <Themed.h1>Categories</Themed.h1>
      <Grid columns={[1, 2, 3]} sx={{        
        overflow: 'hidden',
        position: 'relative'
        }}>
        {allSanityCategory.edges.map((edge, index) => (
          <div key={index} sx={{
            animationName: `${moveUp}`,
            animationDuration: `${((index / 2) % 3).toString()}s`,
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards',
            position: 'relative',
          }}>
          <CategoryCard  edge={edge}  />
          </div>
        ))}
      </Grid>
    </Container>
    </React.Fragment>
  );
};

export default Categories;
