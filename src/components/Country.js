const Country = (props) => {
    
  return (
    <div>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <span>Population: {props.population}</span>
        <span>Region: {props.region}</span>
        <span>Capital: {props.capital}</span>
    </div>
  )
}

export default Country
