import React from 'react'
import '../componentes/button.css'

function Button({id, text, action}) {
    const handleAction = (e) => {
        action(e)
    }

  return (
    <button 
        id = {id}
        onClick = {handleAction}
        >
        {text}
    </button>
  )
}

export default Button

