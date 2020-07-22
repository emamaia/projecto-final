import React from 'react';
import Menu from '../../components/NavBar/Menu/index.js';
import logo from '../../assets/logo.png'

import './styles.css'

function navbar () {
    return (
      <nav className='navbar'>
        <img 
          src={logo}
          alt='Logotipo do guia do kamba'
          className='navbar-logo'
        />
         <Menu/>
       
      </nav>
    )
  }

export default navbar