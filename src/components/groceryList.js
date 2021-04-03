/** @jsx jsx */
import { Themed, jsx } from "theme-ui";

const GroceryList = ({node}) => (
        <section>
            <Themed.h3>Ingredients</Themed.h3>
            <ul>
                {node.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <Themed.p>{ingredient}</Themed.p>
                    </li>
                ))}
            </ul>
        </section>
)

export default GroceryList;