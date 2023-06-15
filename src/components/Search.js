import { useState } from "react"

const Search = ({ selectedContinent, handleContinentChange, handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  return (
    <div className="searchfilter-wrapper">
        <form className="search-input svg-background">
            <input type="search" placeholder="Search for a country..." className="search-input-field" value={searchQuery} onChange={handleInputChange}/>
        </form>
        <select name="" id="" className="continent-filter" value={selectedContinent} onChange={handleContinentChange}>
            <option value="" disabled hidden>Filter by Region</option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Search
