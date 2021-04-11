import { createContext } from 'react'

const defaultQuery = 'potato'

export const RecipeContext = createContext({
    recepes: [],
    query: defaultQuery
})