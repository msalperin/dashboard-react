
import './App.css';


import Header from './components/Header';
import DashboardContainer from './components/DashboardContainer';


function App() {

  return (

    <div className="dashboard">
    
      <Header></Header>

      <body>
        
        <DashboardContainer></DashboardContainer>

      </body>
    
    </div>
  );
}

export default App;

