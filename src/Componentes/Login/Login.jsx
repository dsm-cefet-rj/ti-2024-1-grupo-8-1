import React, { useState } from 'react';
import logo from '../Imagens/logo.png'
import { useDispatch } from 'react-redux';
import { login, loginUser } from '../../features/userSlice';
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      email: email,
      senha: senha,
      loggedIn: true,
    }));
    dispatch(login({
      email: email,
      senha: senha,
      loggedIn: true,
    }));


  };


  return (
    <div>
      <div>
        <div className='imagem'>
          <img src={logo} class="img-fluid" alt="Sample image" />
        </div>
        <div className='login'>
          <form className='formLogin' onSubmit={(e) => handleSubmit(e)}>
            <input type='username' value={email} className='inputLogin' onChange={(e) => setEmail(e.target.value)} placeholder='Digite o seu email' />
            <input type='password' value={senha} className='inputLogin' onChange={(e) => setSenha(e.target.value)} placeholder='Digite sua senha' />
            <div>
              <button type='submit' className='buttonLogin'> Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;