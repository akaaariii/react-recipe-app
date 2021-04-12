import React from 'react'
import './index.scss'

const SearchForm = ({ search, updateSearch, onSubmit }) => {
     return (
      <form onSubmit={onSubmit} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search Recipes (*e.g.: potato)" />
        <button className="search-btn" type="submit">Search</button>
      </form>
     )
}

export default SearchForm