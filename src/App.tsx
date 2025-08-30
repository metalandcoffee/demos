import { useState } from 'react'
import logo from '/coffee-cup.png'
import './App.css'

function App() {
  const [animateClass, setAnimateClass] = useState('');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1);
    setAnimateClass('bounce');
    setTimeout(() => {
      setAnimateClass('');
  }, 300);
  }

  return (
    <>
      <div className="card">
        <img src={logo} className={ 'logo ' + animateClass } alt="Vite logo" />
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
