import React from 'react'
import{Link} from 'react-router-dom';
import './styles.css';

function OpcoesHome(props){
  return(
      <div className= 'div-opcoeshome'>
  <Link to={props.clique} className='link-home'><h4>{props.nomedobotao}</h4>
  
  <p className='texto-home'>{props.texto}</p>
  </Link>
          

      </div>
  )
}
export default OpcoesHome;