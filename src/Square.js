import React from 'react'
import face from './pics/faceDown.jpg'

function Square({ isFaceDown, handleSquareClick, id, isFaded, image, isBlocked }) {
  const style = {
    maxWidth: '100%',
    maxHeight: '100%',
    opacity: isFaded ? 0.5 : 1,
    transition: '0.3s ease-in-out',
    boxShadow: !isFaceDown && '0px 0px 29px -2px rgba(0,0,0,0.75)',
    cursor: isBlocked ? 'wait' : 'pointer'
  }

  const handleClick = () => {
    isFaceDown && handleSquareClick(id)
  }

  return (
    <img
      alt='alt'
      src={isFaceDown
        ? face
        : image}
      onClick={handleClick}
      style={style}
    />
  )
}

export default Square