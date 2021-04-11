import React, { useContext } from 'react'
import { RecipeContext } from '../../contexts/receipes'

import './index.scss'

const SearchForm = () => {
    const { query, updateQuery, searchRecipes } = useContext(RecipeContext)

    const onSubmit = (e) => {
        e.preventDefault()
        searchRecipes()
    }

     return (
      <form onSubmit={onSubmit} className="search-form">
        <input className="search-bar" type="text" value={query} onChange={updateQuery} placeholder="Search Recipes (*e.g.: potato)" />
        <button className="search-btn" type="submit">Search</button>
      </form>
     )
}

export default SearchForm