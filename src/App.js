import logo from './logo.svg';
import './App.css';
import gameStart from './components/gameSetup';

const game = await gameStart();
console.log('game', game)


function App() {
  return (
    <div className="App">
      <div>
        <h1>{game.name}</h1>
        <p>ID: {game.id}</p>
        <p>Height: {game.height}m</p>
        <p>Weight: {game.weight}kg</p>
        <img src={game.sprite}></img>
        <ul>
          <li>Type 1: {game.types[0].type.name}</li>
          <li>Type 2: {game.types[1].type.name}</li>
        </ul>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
