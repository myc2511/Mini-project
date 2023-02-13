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

function App() {
  return (
    <>

    <Router>
      {/* <Navbar/> */}
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
        
        
      </Routes>
    </Router>
  </>
  );
}

export default App;
