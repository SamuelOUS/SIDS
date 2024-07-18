import React, { useEffect } from 'react';
import '../styles/SignIn.css';
import { Link } from 'react-router-dom';


const SignIn = () => {
  useEffect(() => {
    
    document.body.classList.add('sign-in-body');

    // Eliminar clase al desmontar el componente
    return () => {
      document.body.classList.remove('sign-in-body');
    };
  }, []);

  return (
    <div className='container'>
      <div className='dragBar'></div>
      <div className='leftBox'>
        <div className='textContainer'>
          <span className='SIDS'>SIDS</span>
        </div>
      </div>
      <div className='rightBox'>
        <h2 className='signTitle'>Inicia sesión con tu cuenta</h2>
        <input className='email' type='text' placeholder='Email' />
        
        <input className='password' type='password' placeholder='Contraseña' />
        <Link to="/Landing">
          <button className='signInButton'>Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
