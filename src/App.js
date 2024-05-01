import './App.css';
import Sidenav from './Components/Sidenav';
import Main from './Components/Main';
import Examples from './Components/Examples';
function App() {
  return (
    <div className="container">
    <Sidenav/>
     <Main/>
     <Examples/>
    </div>
    
  
  );
}

export default App;