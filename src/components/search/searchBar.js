/**@jsx jsx */

import React from 'react'
import { Link } from 'gatsby'
import { Themed, jsx, Input, Flex } from 'theme-ui'
import { searchObjects, getNodes } from '../../utils'


const indexFactory = (recipeProp, cuisineProp, categoryProp) => {
    const postIndex = getNodes(recipeProp, 'recipes')
    const cuisineIndex = getNodes(cuisineProp, 'cuisines')
    const categoryIndex = getNodes(categoryProp, 'categories')
    return [...postIndex, ...cuisineIndex, ...categoryIndex]
}

const SearchBar = ({ recipes, cuisines, categories, handleKeypress }) => {

    

    const indexData = React.useMemo(
        () => indexFactory(recipes, cuisines, categories), [recipes, cuisines, categories]
    )
    const handleChange = (e) => setQuery(e.target.value)

    const [query, setQuery] = React.useState('')
    const [filtered, setFiltered] = React.useState([])

    React.useEffect(() => {
        document.body.style.height = '100%'
        document.body.style.overflowY = 'hidden'
        document.addEventListener('keydown', handleKeypress)
        
        if (query.length > 0) {
            const working = searchObjects(indexData, query)
            console.log(working)
            setFiltered(working);
        }
        else {
            setFiltered([])
        }
        return () => {
            document.body.style.height = 'auto'
            document.body.style.overflowY = 'scroll'
        }
    }, [indexData, query, handleKeypress])

    return (
        <React.Fragment>
            <Flex sx={{ justifyContent: 'center', alignItems: 'center', flexBasis: '100%' }} >
                <Input value={query}
                    name={`searchQuery`}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Try 'stir fry' or 'mexican'"
                />
            </Flex>
            <div sx={{ flexBasis: '36em', height: '36em' }}>
                {filtered.length > 0 && <Themed.h4>Recipes</Themed.h4>}
                {filtered.filter(item => item.nodetype === 'recipes').map((item) => (
                    <Link key={item._id} to={`/recipes/${item.slug.current}`}>
                        <Themed.h5 sx={{ width: '100%', display: 'inline-block' }}>{item?.name}</Themed.h5>
                    </Link>
                ))}
                {filtered.length > 0 && <Themed.h4>Cuisines</Themed.h4>}
                {filtered.filter(item => item.nodetype === 'cuisines').map((item) => (
                    <Link key={item._id} to={`/cuisines/${item.slug.current}`}>
                        <Themed.h5 sx={{ width: '100%', display: 'inline-block' }}>{item?.name}</Themed.h5>
                    </Link>
                ))}
                {filtered.length > 0 && <Themed.h4>Categories</Themed.h4>}
                {filtered.filter(item => item.nodetype === 'categories').map((item) => (
                    <Link key={item._id} to={`/categories/${item.slug.current}`}>
                        <Themed.h5 sx={{ width: '100%', display: 'inline-block' }}>{item?.categoryTitle}</Themed.h5>
                    </Link>
                ))}
            </div>
        </React.Fragment>
    )
}


export default SearchBar