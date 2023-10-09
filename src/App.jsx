import { useState } from 'react'
import './App.css'
import PostList from './components/PostList'

function App() {
  const [Counter, setCounter] = useState(0);
  function counterHandler(counterState) {
    if (counterState === "Inc") {
      setCounter(Counter + 1);
    } else {
      if (Counter <= 0) {
        return;
      }
      setCounter(Counter - 1);
    }
  }
  return (
    <>
      <PostList />
      <div className='counterContainer'>
        <div className='counter'>
          <button onClick={() => {
            counterHandler("Dec")
          }}>-</button>
          <h1>Counter {Counter}</h1>
          <button onClick={() => {
            counterHandler("Inc")
          }}>+</button>
        </div>
      </div>
    </>
  )
}

export default App
