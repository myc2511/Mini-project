import './App.css';
import Home from './pages/Home';
import Complaint from './pages/Complaint';
import UserProfile from './pages/UserProfile';
import {BrowserRouter as Router,
Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Complaint' element={<Complaint/>}/>
        <Route path='/UserProfile' element={<UserProfile/>}/>
        
      </Routes>
    </Router>
  </>
  );
}

export default App;
