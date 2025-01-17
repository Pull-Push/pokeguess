import logo from './logo.svg';
import './App.css';
import pokeSanitize from './components/gameSanitize';
import setUpFunction from './components/gameSetup';


const game = await pokeSanitize();
console.log('game', game)

const appSetup = setUpFunction(); 


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
    </div>
  );
}

export default App;
