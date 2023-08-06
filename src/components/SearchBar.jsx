import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
    return (
        <div className='search-bar'>
            <FaSearch id='SearchIcon' />
            <input type='text' placeholder='Search in react'>
            </input></div>
    )
}

export default SearchBar