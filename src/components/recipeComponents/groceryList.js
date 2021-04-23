/** @jsx jsx */
import { Themed, jsx } from "theme-ui";
import PropTypes from 'prop-types'

const GroceryList = ({ingredients}) => (
        <section>
            <Themed.h3>Ingredients</Themed.h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <Themed.li key={index}>
                        <Themed.p>{ingredient}</Themed.p>
                    </Themed.li>
                ))}
            </ul>
        </section>
)

GroceryList.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string),
}

export default GroceryList;