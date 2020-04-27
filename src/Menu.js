import React from 'react'
import Footer from './Footer'

function Menu({ players, handleRestart, isWinner }) {

  const style = {
    width: '30vw',
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 30,
    color: 'rgba(255,255,255,0.7)'
  }

  const [p1, p2] = players

  let winner = ''
  if (p1.score > p2.score) winner = p1.name
  else if (p1.score < p2.score) winner = p2.name
  else winner = 'Draw'

  return (
    <div style={style}>
      <p style={{ letterSpacing: '2px', borderBottom: '1px solid rgba(255,255,255,0.7)', paddingBottom: '5px' }}>Unsplash Memory Game</p>
      {!isWinner
        ? <p style={{ width: '30vw', textAlign: 'center' }}>Current player: <span>{players.find(p => p.isCurrent === true).name}</span></p>
        : <p style={{ borderBottom: '2px solid white', fontSize: 50, textDecoration: 'bold' }}>{winner === 'Draw' ? "It's a draw" : winner}</p>
      }
      <div>
        <div>
          <p>{p1.name}: <span>{p1.score}</span></p>
        </div>
        <div>
          <p>{p2.name}: <span>{p2.score}</span></p>
        </div>
      </div>
      <button
        onClick={handleRestart}
        style={{
          width: 200,
          height: 50,
          borderRadius: '5px',
          outline: 'none',
          border: '1px solid rgba(255,255,255,0.8)',
          color: 'rgba(0, 0, 0, 0.8)',
          fontSize: '30px',
          letterSpacing: '2px',
          lineHeight: '20px',
          backgroundColor: 'rgb(0, 191, 255)',
          cursor: 'pointer'
        }}>
        Restart
      </button>
      <Footer />
    </div >
  )
}

export default Menu