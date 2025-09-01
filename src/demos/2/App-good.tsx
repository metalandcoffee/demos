import { useState, type Dispatch,type SetStateAction } from 'react'
import logo from '/coffee-cup.png'
import './App.css'

// Parent passes props down
<UserCard name="John" age={25} />

// Child receives props (read-only)
function UserCard(
  { name, age }: {name: string, age: number}
) {
  return <h1>Hello {name}, age {age}</h1>;
}


function App() {
  // ✅ Solution.
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  );
}

function Counter({ count, setCount }: {count: number, setCount: Dispatch<SetStateAction<number>>}) {

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }
  return <button onClick={ handleClick }>{ count }</button>
}
function Display({ count }: {count: number}) {
  return <span>{ count }</span>
}

function AppOld() {
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
