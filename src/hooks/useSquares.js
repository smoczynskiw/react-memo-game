import { useState } from 'react'

const shuffle = array => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const useSquares = initialValue => {
  const shuffled = shuffle(initialValue)
  const [state, setState] = useState(shuffled)

  const resetSquares = () => {
    const newShuffled = shuffle(initialValue)
    setState(newShuffled)
  }

  const chooseSquare = id => {
    const newSquares = state.map(sq => sq.id === id ? { ...sq, isFaceDown: false } : sq)
    setState(newSquares)
  }

  const handleMatch = pair => {
    const newSquares = state.map(sq => sq.name === pair[0].name ? { ...sq, isFaded: true } : sq)
    setState(newSquares)
  }

  const handleMismatch = () => {
    const newSquares = state.map(sq => sq.isFaded ? sq : { ...sq, isFaceDown: true })
    setState(newSquares)
  }
  return [state, resetSquares, chooseSquare, handleMatch, handleMismatch]
}

export default useSquares