import React, { useState } from "react";
import Navbar from "../components/Navbar";
 import SignUp from "../components/SignUp";
// import Navbar from '../components/Navbar'

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [showSignup,setshowSignup]=useState(false);
  function login(){
    console.log("login");
  }
function handleclick(){
  setshowSignup(!showSignup)
}
function closeSignup(){
  setshowSignup(false)
}
  return (
    <>
    <Navbar/>
    <div className="flex mx-auto content-center justify-center  mt-60">
      
      <div className="container w-7/12 text-center">
        <h1 className="text-6xl text-custom-blue">Where student voice </h1>
      <h1 className="text-6xl text-custom-blue">meets action</h1>

        <p  className="p-6 mt-10 ml-44 mr-36 text-m text-left">The College Issue Resolver is a user-friendly web platform designed to facilitate the submission, tracking, and resolution of student complaints and grievances. It offers an easy-to-use interface for students to submit their complaints, while also providing administrators with a streamlined process for tracking, responding to, and resolving issues in a timely manner. With the College Issue Resolver, both students and administrators can work together to ensure a positive and productive learning environment.</p>
      </div>

      <div className="container w-5/12 pl-36 ">
        
      
        <div className=" box-shadow border-2 p-10 w-8/12">
              <h1 className="text-5xl  text-custom-blue mb-8 text-center">Log In</h1>
        <div className=" pb-2">
          <label htmlFor="select">
           
            <select className="w-full rounded-lg p-3 border-gray-500 border-2 " name="cars" id="cars">
            <option value=""disabled selected hidden >Login As</option>
              <option value="User">User</option>
              <option value="Faculty">Faculty</option>
            </select>
          </label>
        </div>
        
        <div  >
          <label htmlFor="username">
            <p className="para">Email*</p>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              className="ipt"
            />
          </label>
        </div>

        <div >
          <label htmlFor="password">
            <p className="para">Password*</p>
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
           <button onClick={login} className="text-white mt-4 mb-3 w-full p-3 ml-1 bg-custom-blue rounded-lg">Log In</button>
        
        <p className="text-base text-center">Don't have an account? <button onClick={handleclick} className=" text-custom-blue hover:underline text-xl" href="">Register</button></p>
       
        </div>

        
      </div>
    </div>


{/* Signup */}

      {showSignup && <SignUp closeSignup={closeSignup}/>}
     
    </>
  );
}

export default Home;
