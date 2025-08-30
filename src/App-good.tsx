import { useState } from 'react'
import logo from '/coffee-cup.png'
import './App.css'

function App() {
  // ✅ Solution. Use state management.
  const [count, setCount] = useState(0);

  const [animateClass, setAnimateClass] = useState('');

  // Click handler.
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
        <img
          src={logo}
          className={ 'logo ' + animateClass }
          alt="Pixelated Coffee Logo"
        />
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
