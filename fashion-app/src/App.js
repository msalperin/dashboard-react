
import './App.css';
import Saludo from './components/Saludo';
import Header from './components/Header';


function App() {
  return (

    <div className="dashboard">
    
      <Header></Header>

      <body>
        <Saludo></Saludo>
      </body>
    
    </div>
  );
}

export default App;

