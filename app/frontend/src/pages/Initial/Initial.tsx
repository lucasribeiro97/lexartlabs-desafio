import { Link } from "react-router-dom"
import './Initial.css'

function Initial() {
  return (
    <div className="container-initial">
      <h1>Online Store</h1>
      <div className="button">
        <Link to="/login" className="text">ENTRAR</Link>
      </div>
      <div className="button">
        <Link to="/sign-up" className="text">CADASTRAR</Link>
      </div>
    </div>
  )
}

export default Initial