import React from 'react';
import '../styles/SingIn.css'

const SignIn = () => {
  return (
    <div className='Container'>
      <div className='DragBar'></div>
      <div class="LeftBox">
      <div class="TextContainer">
      <span class="SIDS">SIDS</span>
      </div>
</div>


      <div className='RightBox'>
        <h2 className='SignTitle'>
            Inicia sesion con tu cuenta
        </h2>
        <input className='Email' placeholder='email'>  
        </input>
        <input className='Password' placeholder='contraseña'>
            
        </input>
        <button className='SignInButton'>Iniciar Sesion</button>
      </div>

    </div>
  );
};

export default SignIn;
