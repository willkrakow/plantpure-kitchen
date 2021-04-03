/** @jsx jsx */
import React from "react";
import { useReactToPrint } from "react-to-print";
import { jsx, Grid, Themed } from "theme-ui";
import GroceryList from "../components/groceryList";
import RecipeDirections from "../components/recipeDirections";
import RecipeStats from "../components/recipeStats";
import Layout from '../components/layout'
import RecipeHeader from "../components/recipeHeader";

const PrintPage = (props) => {


  const recipeState = props.location.state
console.log(recipeState);
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
      <article>
        <button onClick={handlePrint}>Print!</button>
        <button
          sx={{ backgroundColor: printText ? "accent" : "background" }}
          onClick={() => setPrintText(!printText)}
        >
          Print text
      </button>
        <button
          sx={{ backgroundColor: printImage ? "accent" : "background" }}
          onClick={() => setPrintImage(!printImage)}
        >
          Print image
      </button>
        <button
          sx={{ backgroundColor: printGroceries ? "accent" : "background" }}
          onClick={() => setPrintGroceries(!printGroceries)}
        >
          Print groceries
      </button>
        <button sx={{ backgroundColor: printStats ? "accent" : "background" }}
          onClick={() => setPrintStats(!printStats)}
        >Print cooking stats</button>
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
    </Layout>
  );
};

export default PrintPage;
