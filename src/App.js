import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";
import data from './data.json';


function App() {
  const countries = data.map(item => {
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
      <Search/>
      {countries}
    </div>

  );
}

export default App;
