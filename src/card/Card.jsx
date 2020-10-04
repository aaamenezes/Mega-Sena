import React from 'react'
import './Card.css'

export default props => {

  const cardStyle = {
    backgroundColor: props.color || 'darkred',
    borderColor: props.color || 'darkred'
  }

  return (
    <div className='card' style={ cardStyle }>
      <h2 className='title'>{ props.titulo }</h2>
      <div className='content'>{ props.children }</div>
    </div>
  )
}