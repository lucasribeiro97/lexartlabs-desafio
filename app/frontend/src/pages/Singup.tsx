import { useNavigate } from 'react-router-dom';

function Singup() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login');
  }

  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <input type="text" name="username" placeholder='Usuário' />
        <input type="text" name="email" placeholder='E-mail' />
        <input type="password" name="password" placeholder='Senha' />
        <button onClick={ handleSubmit }>Cadastrar</button>
      </form>
    </div>
  );
}

export default Singup;
