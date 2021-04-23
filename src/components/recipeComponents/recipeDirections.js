/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import PropTypes from 'prop-types'

const RecipeDirections = ({ recipeSteps }) => (
    <section>
        <Themed.h3>Directions</Themed.h3>
        <ol>
            {recipeSteps.map((step, index) => (
                <Themed.li key={index}>
                    <Themed.h4>{step.title}</Themed.h4>
                    <Themed.p>{step.description}</Themed.p>
                </Themed.li>
            ))}
        </ol>
    </section>
)

RecipeDirections.propTypes = {
    recipeSteps: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    })),
}

RecipeDirections.defaultProps = {
    recipeSteps: [
        {
            title: 'No steps needed!',
            description: 'Yeah, this recipe is super easy.',
        },
    ]
}

export default RecipeDirections;