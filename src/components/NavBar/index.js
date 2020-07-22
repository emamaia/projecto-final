import React from 'react';
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
        <div className='link'>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
       
      </nav>
    )
  }

export default navbar