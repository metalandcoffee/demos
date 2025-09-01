import logo from '/coffee-cup.png'
import './App.css'

function UserCard({ name }: {name: string}) {
  // ❌ Problem.
  name = "Different name"; // Don't change props.
  return <h1>{name}</h1>;
}



function App() {
  // ❌ Problem.
  let count = 0;

  let animateClass = '';

  // Click handler.
  const handleClick = () => {
    count = count + 1;

    animateClass = 'bounce';
        setTimeout(() => {
        animateClass ='';
    }, 300);
  }

  return (
    <>
      <UserCard name="ebonie" />
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
