import './App.css';
import Home from './pages/Home';
import Complaint from './pages/Complaint';
import UserProfile from './pages/UserProfile';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,
Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './pages/AdminLogin';
import AdminNav from './components/AdminNav';
import AdminCompTable from './components/AdminCompTable';
import AdminStudent from './components/AdminStudent';
import AdminHome from './pages/AdminHome';
function App() {
  return (
    <>

  
 <Router>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Complaint' element={<Complaint/>}/>
        <Route path='/UserProfile' element={<UserProfile/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/Admin/AdminHome' element={<AdminHome/>}/>
        <Route path='/Admin/Complain' element={<AdminCompTable/>}/>
        <Route path='/Admin/Student' element={<AdminStudent/>}/>
        <Route path='/Admin/Staff' element={<AdminStudent/>}/>
      </Routes>
    </Router> 
  </>
  );
}

export default App;
