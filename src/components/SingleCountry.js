import data from "../data.json";
import { useParams } from "react-router-dom";
import Button from "./Button";

const SingleCountry = (props) => {
  const { name } = useParams();
  const country = props.data.find(item => item.name === name);

  if (!country) {
    // Handle case where country is not found
    return <div>Country not found</div>;
  }

  const {
    flags,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  // Helper function to retrieve country name based on alpha code
  const getCountryName = (alpha3Code) => {
    const borderCountry = data.find(country => country.alpha3Code === alpha3Code);
    return borderCountry ? borderCountry.name : 'Unknown';
  };

  // Retrieve border country names
  const borderCountryNames = borders ? borders.map(alphaCode => getCountryName(alphaCode)) : [];

  return (
    <div className='single-country-wrapper'>
      <Button to="/" text="Back" faClassName="fa-left-long" />
      <div className='single-country-data'>
        <div className="single-country-flag-wrapper">
          <img src={flags.svg} className="single-country-flag" alt="Country Flag" />
        </div>
        <div>
          <h2 className="single-country-name">{name}</h2>
          <div className='single-country-details'>
            <div className='details'>
              <p><span className="data-title">Native Name:</span> {nativeName}</p>
              <p><span className="data-title">Population:</span> {population}</p>
              <p><span className="data-title">Region:</span> {region}</p>
              <p><span className="data-title">Sub Region:</span> {subregion}</p>
              <p><span className="data-title">Capital:</span> {capital}</p>
            </div>
            <div className='details'>
              <p><span className="data-title">Top Level Domain:</span> {topLevelDomain}</p>
              {currencies && currencies.length > 0 && (
                <p>
                  <span className="data-title">Currencies:</span>{" "}
                  {currencies.map(currency => currency.name).join(", ")}
                </p>
              )}
              {languages && languages.length > 0 && (
                <p>
                  <span className="data-title">Languages:</span>{" "}
                  {languages.map(language => language.name).join(", ")}
                </p>
              )}
            </div>
          </div>
          {borderCountryNames.length > 0 ? (
            <div className="border-countries">
              <span className="border-countries-data-title">Border Countries:</span>{' '}
              {borderCountryNames.map((borderCountry, index) => (
                <span key={index} className="border-country">
                  {borderCountry}
                </span>
              ))}
            </div>
          ) : (
            <div className="border-countries">
              <span className="border-countries-data-title">Border Countries: None</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleCountry;
