import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";
import SingleCountry from "./components/SingleCountry";
import ScrollToTopButton from "./components/ScrollToTopButton";
import data from './data.json';


function App() {
  const [selectedContinent, setSelectedContinent] = useState('')
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState('light');

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

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  

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
      <div className={`app ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        <Header toggleTheme={toggleTheme} theme={theme}/>
          <Routes>
            <Route 
              path ="/" 
              element = {
                <>
                  <Search selectedContinent={selectedContinent} handleContinentChange={handleContinentChange} handleSearch={handleSearch}/>
                  <section className="country-list">
                    {countries}
                  </section>
                </>
              } 
            />
            <Route path="/country/:name" element={<SingleCountry data={data}/>} />
          </Routes>
          <ScrollToTopButton/>
      </div>
  );
}

export default App;
