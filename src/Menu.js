import React from 'react'
import Footer from './Footer'
import menuStyles from './styles/menuStyles'

function Menu({ players, handleRestart, isFinished }) {

  const [p1, p2] = players
  const { main, title, playerDisplay, restartButton, winnerName, playersContainer } = menuStyles

  let winner = ''
  if (p1.score > p2.score) winner = p1.name
  else if (p1.score < p2.score) winner = p2.name
  else winner = 'Draw'

  return (
    <div style={main}>
      <p style={title}>Unsplash Memory Game</p>
      {isFinished && <p style={winnerName}>{winner === 'Draw' ? "It's a draw" : `Winner: ${winner}`}</p>}
      <div style={playersContainer}>
        <p style={playerDisplay(p1)}>{p1.name}: <span>{p1.score}</span></p>
        <p style={playerDisplay(p2)}>{p2.name}: <span>{p2.score}</span></p>
      </div>
      <button
        onClick={handleRestart}
        style={restartButton}>
        Restart
      </button>
      <Footer />
    </div >
  )
}

export default Menu