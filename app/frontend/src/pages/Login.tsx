import { useState } from "react";
import { Link } from "react-router-dom";
import validateLogin from "../utils/validateLogin";

function Login() {
  const url = 'http://localhost:3003/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = {
    email,
    password
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = validateLogin(login);

    if (!isValid) return isValid;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    });

    const { token } = await response.json();

    localStorage.setItem('token', token);
  }
  return (
    <div>
    <h2>Login</h2>
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
        placeholder='E-mail'
      />
      <input
        type="password"
        name="password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
        placeholder='Senha'
      />
      <button>Entrar</button>
    </form>
    <div>
      <p>Não tem uma conta? Clique <Link to="/sign-up">Aqui</Link></p>
    </div>
  </div>
  )
}

export default Login;