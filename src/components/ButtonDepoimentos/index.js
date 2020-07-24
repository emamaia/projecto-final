import React from 'react'

function ButtonDepoimentos(props){
    return(
        <button up onClick={props.handleClick} className={props.classeButton}>{props.children}</button>
    )
}


export default ButtonDepoimentos