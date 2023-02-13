import './App.css';
import Home from './pages/Home';
import Complaint from './pages/Complaint';
import UserProfile from './pages/UserProfile';
import SignUp from './components/SignUp';
import {BrowserRouter as Router,
Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './pages/Blog';
import SingleBlogCmpln from './components/SingleBlogCmpln';
import FacultyHome from './pages/FacultyHome';
import Newcomplains from './pages/Faculty/Newcomplains';
import Activecomplains from './pages/Faculty/Activecomplains';
import ClosedCompalins from './pages/Faculty/ClosedCompalins';

import AdminLogin from './pages/AdminLogin';
import AdminNav from './components/AdminNav';
import AdminCompTable from './components/AdminCompTable';
import AdminStudent from './components/AdminStudent';
import AdminHome from './pages/AdminHome';

function App() {
  return (
  <div>


  
      {/* <Navbar/> */}
  
 <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Faculty */}
        <Route path='/Faculty/Home' element={<FacultyHome/>}/>
        <Route path='/Faculty/Newcomplaints' element={<Newcomplains/>}/>
        <Route path='/Faculty/Activecomplains' element={<Activecomplains/>}/>
        <Route path='/Faculty/ClosedCompalins' element={<ClosedCompalins/>}/>
        {/* Faculty */}
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
    </div>
  );
}

export default App;
