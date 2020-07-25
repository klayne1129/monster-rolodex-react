import React from 'react'
import './search-box.styles.css'

//deconstruct the props so you can make the search-box a reusable component.

export const SearchBox = ({ placeholder, handleChange, value}) => (
    <input className='search' type='search' placeholder={placeholder} name='searchField' value={value} onChange={handleChange}/>
)