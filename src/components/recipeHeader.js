/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'

const RecipeHeader = ({ node }) => (
    <header sx={{ textAlign: "center", mb: 4 }}>
        <Themed.h3
            sx={{ textAlign: "center", color: "muted", fontWeight: "body" }}
        >
            {node.recipeInfo.cuisine.name}
        </Themed.h3>
        <Themed.h2
            sx={{
                textAlign: "center",
                p: 2,
                borderBottom: "4px solid",
                borderTop: "4px solid",
                borderColor: "secondary",
            }}
        >
            {node.name}
        </Themed.h2>
    </header>
)

export default RecipeHeader;