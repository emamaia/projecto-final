import React from 'react';

import './style.css'

function Main(props) {
    return (
        <div className='main-container'>
            
            <div className='main-class'>
                <img className='main-imagem' alt='Imagem dos viajantes africanos'src={props.imagem}></img>
                <div className='main-text'>
                    <h1>{props.titulo}</h1>
                    <p>{props.pagina}</p>
                
                </div>
            </div>

        </div>
    )
}


export default Main;