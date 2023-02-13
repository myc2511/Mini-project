import React, { useState } from "react";
import Navbar from "../components/Navbar";
 import SignUp from "../components/SignUp";
// import Navbar from '../components/Navbar'

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(){
    console.log("login");
  }

  return (
    <>
    <Navbar/>
    <div className="flex mx-auto justify-center mt-60">
      
      <div className="container w-7/12 text-center">
        <h1 className="text-6xl">Where student voice </h1>
      <h1 className="text-6xl">meets action</h1>

        <p  className="p-6 mt-10 ml-44 mr-36 text-2xl text-left">Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery.  CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.</p>
      </div>

      <div className="container w-5/12 pl-36 ">
        
      
        <div className="border-2 p-10 w-8/12">
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
        
        <p className="text-base">Don't have an account? <a  className="text-custom-blue hover:underline text-xl" href="/Signup">Register</a></p>
        </div>

        {/* <div><label className=" bg-blue-600 rounded-lg" htmlFor="firstName">
            <input value="SignUp" type="button" className="ipt" />
          </label></div> */}
      </div>
    </div>
    </>
  );
}

export default Home;
