import React, { useState } from "react";

function SignUp({closeSignup}) {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNo, setEnrollmentno] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="model box-shadow">
    <div className="overlay"></div>
     <div className=" modal-content"> 

      <h1 className="text-center text-custom-blue text-3xl p-5 rounded-lg">
        SignUp
      </h1>

      <form className="mt-5  mx-auto text-left">
        <div className="flex justify-between">
          <div className="">
            <label htmlFor="firstName">
              <p className="para">First Name:</p>
              <input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                className="ipt"
              />
            </label>
          </div>
          <div className="">
            <label htmlFor="lastName">
              <p className="para">Last Name:</p>
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="ipt"
              />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="email">
            <p className="para">Email:</p>
            <input
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="ipt"
            />
          </label>
        </div>

   

        <div>
          <label htmlFor="rollno">
            <p className="para">Enrollment No:</p>
            <input
              placeholder="LCS2020001"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentno(e.target.value)}
              type="text"
              className="ipt"
            />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <p className="para">Phone:</p>
            <input
              placeholder="6007686868"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              className="ipt"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <p className="para">Password</p>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="ipt"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <p className="para">Confirm Password</p>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="ipt"
            />
          </label>
        </div>
 <div className="mx-auto"> <button className="btn w-full text-center m-auto text-white mt-10"> Sign Up</button>
 <button onClick={closeSignup} className="close-modal hover:text-red-500">X</button>
 </div>

    
      </form>
      </div>
    </div>
  );
}

export default SignUp;
