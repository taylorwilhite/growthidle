import React, { useEffect, useState } from 'react'

const App = () => {
  const initialState = {
    wood: 0,
    lumberjacks: 0,
    lumberjackCost: 10,
    drills: 0,
    drillCost: 100
  }
  const [state, setState] = useState(initialState);

  const tick = () => {
    const newWood = (state.lumberjacks / 10) + state.drills
    setState({...state, wood: state.wood + newWood})
  }

  useEffect(() => {
    const timer = setInterval(() => {
      tick()
    }, 100)

    return () => clearInterval(timer);
  })
  const mine = () => {
    setState({...state, wood: state.wood + 1})
  }

  const addLumberjack = () => {
    if (state.lumberjackCost > state.wood) {
      return
    }
    setState({
      ...state,
      wood: state.wood - state.lumberjackCost,
      lumberjacks: state.lumberjacks + 1, lumberjackCost: Math.floor(state.lumberjackCost * 1.25)
    })
  }
  const addDrill = () => {
    if (state.drillCost > state.wood) {
      return
    }
    setState({
      ...state,
      wood: state.wood - state.drillCost,
      drills: state.drills + 1,
      drillCost: Math.floor(state.drillCost * 1.25)
    })
  }
  return (
    <div id="App">
      <h1 className="text-teal-500 text-2xl">Hello World!</h1>
      <p className="text-red-500 text-lg">Count is: {Math.floor(state.wood)}</p>
      <p className="text-red-500 text-lg">lumberjacks: {state.lumberjacks}</p>
      <p className="text-red-500 text-lg">drills: {state.drills}</p>
      <button className="bg-teal-500 text-white px-2 py-1 rounded-lg mx-2" onClick={() => mine()}>Mine!</button>
      <button className="bg-teal-500 text-white px-2 py-1 rounded-lg mx-2" onClick={() => addLumberjack()}>Add Lumberjack {state.lumberjackCost}</button>
      <button className="bg-teal-500 text-white px-2 py-1 rounded-lg mx-2" onClick={() => addDrill()}>Add Drill {state.drillCost}</button>
    </div>
  )
}

export default App