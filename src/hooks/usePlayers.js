import { useState } from 'react'

const usePlayers = (initialValue = ['Wiktor', 'Gosia']) => {
  const players = initialValue.map(p => ({ name: p, score: 0, isCurrent: false }))
  players[0].isCurrent = true

  const [state, setState] = useState(players)

  const addPoint = name => {
    const updated = state.map(p => (p.name === name ? { ...p, score: p.score + 1 } : p))
    setState(updated)
  }

  const toggleCurrentPlayer = () => {
    const updated = state.map(p => ({ ...p, isCurrent: !p.isCurrent }))
    setState(updated)
  }

  const restart = () => {
    const updated = state.map(p => ({ ...p, isCurrent: false, score: 0 }))
    updated[0].isCurrent = true
    setState(updated)
  }
  return [state, addPoint, toggleCurrentPlayer, restart]
}

export default usePlayers