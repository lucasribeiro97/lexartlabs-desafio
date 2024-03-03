import { Link } from "react-router-dom"

function Initial() {
  return (
    <div>
      <h1>Tela inicial</h1>
      <div>
        <Link to="/login">ENTRAR</Link>
      </div>
      <div>
        <Link to="/sign-up">CADASTRAR</Link>
      </div>
    </div>
  )
}

export default Initial