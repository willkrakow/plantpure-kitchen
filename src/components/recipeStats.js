/** @jsx jsx */
import { jsx } from 'theme-ui'

const RecipeStats = ({ node }) => (
    <section
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            div: {
                span: {
                    fontSize: 2,
                    textAlign: "center",
                    display: "inline-block",
                    width: "100%",
                },
                "span.icon": {
                    fontSize: 5,
                },
                "span.label": {
                    color: "secondary",
                    fontWeight: "bold",
                },
            },
        }}
    >
        <div>
            <span aria-label="Pan with food" role="img" className="icon">
                🥘
                </span>
            <span className="label">Prep time</span>
            <span>{node.recipeInfo.prepTime} min.</span>
        </div>
        <div>
            <span aria-label="Kitchen timer" role="img" className="icon">
                ⏲
                </span>
            <span className="label">Cook time</span>
            <span>{node.recipeInfo.cookTime} min.</span>
        </div>
        <div>
            <span aria-label="Plate" role="img" className="icon">
                🍽
                </span>
            <span className="label">Yield</span>
            <span>{node.recipeInfo.yield} servings</span>
        </div>
    </section>
)

export default RecipeStats;