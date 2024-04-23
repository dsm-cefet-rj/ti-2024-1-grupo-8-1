import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import logo from '../Imagens/logo.png'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
function Login() {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(login({
            email: email,
            senha: senha,
            loggedIn: true,
    
        }));

    };


  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src={logo} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

          </div>
          <form onSubmit={(e)=> handleSubmit(e)}>
        
          <MDBInput wrapperClass='mb-4'  id='formControlLg' type='email' size="lg" value ={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Digite o seu email'/>
          <MDBInput wrapperClass='mb-4' id='formControlLg' type='password' size="lg" value={senha} onChange={(e)=> setSenha(e.target.value)} placeholder='Digite sua senha'/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Esqueci minha senha</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <button className="mb-0 px-5" size='lg' type='submit' > Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Não tem conta? <a href="#!" className="link-danger">Registrar</a></p>
          </div>
          </form>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;