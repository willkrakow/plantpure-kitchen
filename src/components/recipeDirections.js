/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'

const RecipeDirections = ({ node }) => (
    <section>
        <Themed.h3>Directions</Themed.h3>
        <ol>
            {node.recipeSteps.map((step, index) => (
                <li key={index}>
                    <Themed.p>{step.description}</Themed.p>
                </li>
            ))}
        </ol>
    </section>
)

export default RecipeDirections;