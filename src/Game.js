import React, { useState, useEffect } from 'react'
import Square from './Square'
import Menu from './Menu'
import gamePics from './gamePics'
import usePlayers from './hooks/usePlayers'
import useSquares from './hooks/useSquares'

function Game() {
  const [isBlocked, setIsBlocked] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [players, addPoint, toggleCurrentPlayer, resetScore] = usePlayers()
  const [squares, resetSquares, chooseSquare, handleMatch, handleMismatch] = useSquares(gamePics)

  const style = {
    width: '95vh',
    height: '95vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 23%)',
    gridGap: '2.67% 2.67%',
  }

  const handleSquareClick = id => {
    if (!isBlocked) {
      chooseSquare(id)
    }
  }

  const score = pair => {
    handleMatch(pair)
    addPoint(players.find(p => p.isCurrent === true).name)
  }

  const endTurn = () => {
    setIsBlocked(true)
    setTimeout(() => {
      handleMismatch()
      toggleCurrentPlayer()
      setIsBlocked(false)
    }, 800)
  }

  const reset = () => {
    resetScore()
    resetSquares()
    setIsFinished(false)
  }

  useEffect(() => {
    const pair = squares.filter(sq => sq.isFaceDown === false && sq.isFaded === false)
    if (pair.length === 2) {
      pair[0].name === pair[1].name ? score(pair) : endTurn()
    }
  })

  useEffect(() => {
    squares.every(sq => sq.isFaded) && setIsFinished(true)
  }, [squares])

  return (
    <>
      <Menu handleRestart={reset} players={players} isFinished={isFinished} />
      <div style={style}>
        {squares.map(pic => (
          <Square
            key={pic.id}
            id={pic.id}
            image={pic.image}
            name={pic.name}
            isFaceDown={pic.isFaceDown}
            isFaded={pic.isFaded}
            handleSquareClick={handleSquareClick}
            isBlocked={isBlocked}
          />
        ))}
      </div>
    </>
  )
}

export default Game