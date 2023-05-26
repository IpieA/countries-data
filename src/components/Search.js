const Search = () => {
  return (
    <div className="searchfilter-wrapper">
        <form className="search-input svg-background">
            <input type="search" placeholder="Search for a country" className="search-input-field" />
        </form>
        <select name="" id="" className="continent-filter" defaultValue="">
            <option value="" disabled hidden>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Search
