import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login,reset } from "../features/auth/authSlice";
import { useEffect } from "react";
import { loginstaff,resetstaff } from "../features/staff/staffSlice";
import Navbar from "../components/Navbar";
 import SignUp from "../components/SignUp";


function Home() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState();
  const [loginAs, setLoginAs] = useState("");
const [showSignup,setshowSignup]=useState(false);


const navigate=useNavigate();
const dispatch=useDispatch();


const handlelogin=async (e)=>{
 e.preventDefault();
 if(loginAs === '')
 alert("choose login option ");
if(loginAs == 'User'){
 const userdata={
  email,
  password,
 }
 dispatch(login(userdata));
}else{
  const userdata={
    email,password
  }
  dispatch(loginstaff(userdata));
//   const url = `http://localhost:5000/api/staff/Stafflogin`;
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password}),
//   });
//   const res = await response.json();
//   console.log(res);

//   if (res.success) {
//     localStorage.setItem("token", res.authtoken);
//     navigate("/Staff/Home");
//   } else {
//     alert("Wrong credentials");
//   }
 }
  }

  
function handleclick(){
  setshowSignup(!showSignup)
}
function closeSignup(){
  setshowSignup(false)
}
const {user,isLoading,isError,isSuccess,message}= useSelector(
  (state)=> state.auth )
  const {staff,Loading,Error,Success,msg}= useSelector(
    (state)=> state.staff )

 useEffect(() =>{
    if(isError){
      toast.error(message);
    }
    if(isSuccess){
      toast("Registered Successfully");
    }
    if(Error){
      toast.error(msg);
    }
    if(Success){
      toast("Registered Successfully");
    }
    if(user || isSuccess ){
  
      navigate("/Userprofile")
    
    //  closeSignup();
    }
    if(staff||Success){
      navigate("/Staff/Home")

    }
  //   dispatch(reset());
  //  dispatch(resetstaff());

}, [user ,isError,isSuccess,message,navigate,dispatch,Success,msg,Error,staff])

  return (
    < div className="flex flex-col min-h-screen">
    <Navbar/>
    <div className="flex justify-between items-center m-auto container mt-60 ">
      
      <div className="container w-2/3 p-20 text-center">
      <h1 className="text-6xl text-custom-blue">Where student <span className="text-8xl">VOICE</span>  </h1>
      <h1 className="text-6xl text-custom-blue">meets <span className="text-8xl">ACTION</span> </h1>

        <p  className="mt-10 ml-20 mr-36">The College Complaint is a user-friendly web platform designed to facilitate the submission, tracking, and resolution of student complaints and grievances.</p>
      </div>

      <div className="container w-1/3">
        
      
        <div className=" box-shadow rounded-lg items-center p-10">
              {/* <h1 className="text-5xl  text-custom-blue mb-8 text-center">Log In</h1> */}
        <div className=" pb-2">
          <label htmlFor="select">
           
            <select className="w-full rounded-lg p-3 border-gray-500 border-2 " onChange={(e) => setLoginAs(e.target.value)} value={loginAs} name="cars" id="cars">
            <option value=""disabled selected hidden >Login As</option>
              <option value="User">User</option>
              <option value="Faculty">Staff</option>
            </select>
          </label>
        </div>
        
        <div  >
          <label htmlFor="email">
            <p className="para">Email</p>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="ipt"
            />
          </label>
        </div>

        <div >
          <label htmlFor="password">
            <p className="para">Password</p>
            <input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="ipt"
            />
          </label>
        </div>

        <div class="flex items-start mt-6 mb-4">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-custom-blue dark:border-gray-600 dark:focus:ring-custom-blue dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-m font-medium text-custom-blue dark:text-gray-500">I agree with the <a href="#" class="text-custom-blue hover:underline dark:text-custom-blue">terms and conditions</a>.</label>
    </div>
           <button onClick={handlelogin} className="text-white mt-4 mb-3 w-full p-3 ml-1 bg-custom-blue rounded-lg">Log In</button>
        
        <p className="text-base text-center">Don't have an account? <button onClick={handleclick} className=" text-custom-blue hover:underline text-xl" href="">Register</button></p>
       
        </div>

        
      </div>
    </div>


{/* Signup */}

      {showSignup && <SignUp closeSignup={closeSignup}/>}
     
    </div>
  );
}

export default Home;
