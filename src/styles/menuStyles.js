export default {
  main: {
    width: '40vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 30,
    color: 'rgba(255, 255, 255, 0.7)'
  },

  title: {
    borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
    paddingBottom: '5px',
    letterSpacing: '2px',
    fontSize: '50px',
    margin: '60px 0 20px 0'
  },

  winnerName: {
    borderBottom: '2px solid white',
    fontSize: 40
  },

  restartButton: {
    width: 200,
    height: 50,
    borderRadius: '5px',
    outline: 'none',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '30px',
    letterSpacing: '2px',
    lineHeight: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    cursor: 'pointer'
  },

  playersContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  playerDisplay: player => ({
    margin: '20px 0',
    fontSize: '40px',
    paddingBottom: '2px',
    letterSpacing: '1 px',
    fontWeight: player.isCurrent ? 500 : 300,
    borderBottom: player.isCurrent ? '2px solid rgba(255, 255, 255, 0.8)' : 'none',
  })
}