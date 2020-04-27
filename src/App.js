import React from 'react'
import Game from './Game'

function App() {

  const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontFamily: 'Roboto',
    fontWeight: '300',
    backgroundColor: 'rgba(0,0,0)'
  }

  return (
    <div style={style}>
      <Game />
    </div>
  )
}

export default App
