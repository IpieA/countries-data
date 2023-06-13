import { Link } from "react-router-dom"

const Country = (props) => {
    
  return (
    <Link className="country-wrapper" to={`/country/${props.name}`}>
        <img src={props.img} className="country-flag" />
        <div className="country-detail">
            <h2 className="country-name">{props.name}</h2>
            <p> <span className="data-title">Population:</span> {props.population}</p>
            <p> <span className="data-title">Region:</span> {props.region}</p>
            <p> <span className="data-title">Capital:</span> {props.capital}</p>
            {/* <Link to={`/country/${props.name}`}>View Details</Link> */}
            {/* <Button to={`/country/${props.name}`} text="View Details" faClassName="fa-right-long"/> */}
        </div>
    </Link>
  )
}

export default Country
