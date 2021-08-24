import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ContactListe from './Components/ContactListe'
import NavBar from './Components/NavBar';
import Ajout from './Components/Ajout';


function App() {
  return (
        
        <div className="App">
        <NavBar/>
        <Ajout/>
        <Router>
        <Route exact path='/' component={ContactListe} />
        </Router>
        </div>
  );
}

export default App;
