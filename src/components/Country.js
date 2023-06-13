import { Link } from "react-router-dom"

const Country = (props) => {
    
  return (
    <div className="country-wrapper">
        <img src={props.img} className="country-flag" />
        <div className="country-detail">
            <h2 className="country-name">{props.name}</h2>
            <p> <span className="data-title">Population:</span> {props.population}</p>
            <p> <span className="data-title">Region:</span> {props.region}</p>
            <p> <span className="data-title">Capital:</span> {props.capital}</p>
            <Link to={`/country/${props.name}`}>View Details</Link>
        </div>
    </div>
  )
}

export default Country
