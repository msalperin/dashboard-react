import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (

    <div className="dashboard">
    
      <header className="dashboard-header">
      </header>

      <body>
        <Saludo></Saludo>
      </body>
    
    </div>
  );
}

export default App;


{/* <div className="App">
    
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <h1>Hola Hola</h1>
      <Saludo></Saludo>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  
  </div> */}
