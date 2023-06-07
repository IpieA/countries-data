import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";
import data from './data.json';


function App() {
  const [selectedContinent, setSelectedContinent] = useState('')
  const [searchQuery, setSearchQuery] = useState('');

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredCountries = data.filter(country => 
    (selectedContinent === '' || country.region === selectedContinent) &&
    country.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // const filteredCountries = data.filter(country => selectedContinent === '' || country.region === selectedContinent);
  // const filteredCountries = selectedContinent === '' ? data : data.filter(country => country.region === selectedContinent || selectedContinent === 'All');


  const countries = filteredCountries.map(item => {
    return(
      <Country
        img={item.flags.png}
        name={item.name}
        population={item.population}
        region={item.region}
        capital={item.capital}
      />
    )
  })
  return (
    <div className="container">
      <Header/>
      <Search selectedContinent={selectedContinent} handleContinentChange={handleContinentChange} handleSearch={handleSearch}/>
      <section className="country-list">
        {countries}
      </section>
    </div>

  );
}

export default App;
