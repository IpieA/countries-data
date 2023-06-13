import { Link } from "react-router-dom"

const Button = ({ to, text, faClassName}) => {
  return (
    <Link to={to}>
      <button className="btn">
      <i className={`fa-solid ${faClassName}`} />{text}
      </button>
    </Link>
  )
}

export default Button
