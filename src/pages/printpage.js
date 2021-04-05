/** @jsx jsx */
import React from "react";
import { useReactToPrint } from "react-to-print";
import { jsx, Grid, Themed } from "theme-ui";
import GroceryList from "../components/groceryList";
import RecipeDirections from "../components/recipeDirections";
import RecipeStats from "../components/recipeStats";
import Layout from '../components/layout'
import RecipeHeader from "../components/recipeHeader";
import Button from '../components/button'

const PrintPage = (props) => {


  const recipeState = props.location.state
  const [printText, setPrintText] = React.useState(false);
  const [printImage, setPrintImage] = React.useState(false);
  const [printGroceries, setPrintGroceries] = React.useState(false);
  const [printStats, setPrintStats] = React.useState(false);

  const componentRef = React.useRef(null);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Recipe",
  });


  return (
    <Layout>
      <h1 sx={{ mb: 4 }}>Print preview</h1>
      <Grid columns={['1fr', null, '1fr 3fr']}>
        <div>
          <Themed.h4>Options</Themed.h4>
          <Button isactive={printText} onClick={() => setPrintText(!printText)}>
            Print text
          </Button>
          <Button isactive={printImage} onClick={() => setPrintImage(!printImage)}>
            Print image
          </Button>
          <Button isactive={printGroceries} onClick={() => setPrintGroceries(!printGroceries)} >
            Print groceries
          </Button> 
          <Button isactive={printStats} onClick={() => setPrintStats(!printStats)}>
            Print cooking stats
          </Button>
          <Button sx={{ mt: 3 }} onClick={handlePrint} isactive={true}>Print!</Button>
        </div>
        <div>
          {typeof window !== 'undefined' && (
            <article sx={{ borderWidth: 3, borderStyle: "solid", borderColor: "muted", minHeight: "11in", width: "8.5in", margin: "auto" }}>
              <div ref={componentRef} sx={{ maxWidth: "720px", margin: "auto", p: 2 }}>
                <RecipeHeader node={recipeState} />
                <Grid columns={printGroceries ? ['2fr 3fr', '2fr 3fr', '2fr 3fr'] : ['1fr', '1fr', '1fr']} >
                  {printGroceries &&
                    <div sx={{
                      borderRight: "4px solid",
                      borderColor: "secondary",
                    }}>
                      <GroceryList node={recipeState} />
                    </div>
                  }
                  <div>
                    {printStats && (
                      <>
                        <RecipeStats node={recipeState} />
                        <Themed.hr />
                      </>
                    )}
                    {printImage && <div sx={{ maxWidth: "100%", maxHeight: "250px", overflow: "hidden" }}><img sx={{ maxWidth: "100%" }} src={recipeState.metadata.featuredImage.asset.url} alt={recipeState.name} /></div>}
                    {printText && <RecipeDirections node={recipeState} />}
                  </div>
                </Grid>
              </div>
            </article>
          )}
           </div>
      </Grid>

    </Layout>
  );
};

export default PrintPage;
