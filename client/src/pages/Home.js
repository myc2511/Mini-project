import React, { useState } from "react";
// import SignUp from "../components/SignUp";
// import Navbar from '../components/Navbar'

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(){
    console.log("login");
  }

  return (
    <>
    <div className="flex mx-auto justify-center mt-40">
      
      <div className="container w-7/12 text-center">
        <h1 className="text-6xl">Welcome To Our Site</h1>
        <h3 >Ma chuda</h3>

        <p  className="p-6 mt-10 ml-44 mr-36 text-2xl text-left">Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery.  CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.</p>
      </div>

      <div className="container w-5/12 pl-36 ">
        
      
        <div className="border-2 p-4 w-8/12">

        <div className=" pb-2">
          <label htmlFor="select">
            {/* <p className="para">password:</p> */}
            {/* <p className="para">Login As</p> */}
            <select className="w-full rounded-lg p-3 border-gray-500 border-2 rounded" name="cars" id="cars">
            <option value=""disabled selected hidden >Login As</option>
              <option value="User">User</option>
              <option value="Faculty">Faculty</option>
            </select>
          </label>
        </div>
        
        <div >
          <label htmlFor="username">
            <p className="para">Username:</p>
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
            <p className="para">password:</p>
            <input
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="ipt"
            />
          </label>
        </div>
        

        <div className=" mt-4 mb-3">
          <label
            className=" p-3 pr-40 pl-40 ml-1 bg-blue-600 rounded-lg"
            htmlFor="firstName"
          >
            <input onClick={login} value="LogIn" type="button" />
          </label>
          
        </div>
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
