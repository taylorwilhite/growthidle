import React, { useEffect, useState } from 'react'

const App = () => {
  const initialState = {
    stone: 0,
    miners: 0,
    minerCost: 10
  }
  const [state, setState] = useState(initialState);

  const tick = () => {
    const newStone = state.miners / 10
    setState({...state, stone: state.stone + newStone})
  }

  useEffect(() => {
    const timer = setInterval(() => {
      tick()
    }, 100)

    return () => clearInterval(timer);
  })
  const mine = () => {
    setState({...state, stone: state.stone + 1})
  }

  const addMiner = () => {
    if (state.minerCost > state.stone) {
      return
    }
    setState({
      ...state,
      stone: state.stone - state.minerCost,
      miners: state.miners + 1, minerCost: Math.floor(state.minerCost * 1.25)
    })
  }
  return (
    <div id="App">
      <h1 className="text-teal-500 text-2xl">Hello World!</h1>
      <p className="text-red-500 text-lg">Count is: {Math.floor(state.stone)}</p>
      <p className="text-red-500 text-lg">miners is: {state.miners}</p>
      <button className="bg-teal-500 text-white px-2 py-1 rounded-lg mx-2" onClick={() => mine()}>Mine!</button>
      <button className="bg-teal-500 text-white px-2 py-1 rounded-lg mx-2" onClick={() => addMiner()}>Add Miner {state.minerCost}</button>
    </div>
  )
}

export default App