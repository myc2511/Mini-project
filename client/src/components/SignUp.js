import React, { useState } from "react";

function SignUp() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNo, setEnrollmentno] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-2/6 mx-auto border-2 mt-16 p-5">
      <h1 className="text-center text-white text-3xl bg-custom-blue p-5 rounded-lg">
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
          <label htmlFor="date of birth">
            <p className="para">DOB:</p>
            <input placeholder="" type="date" className="ipt" />
          </label>
        </div>

        <div className="mt-5"> 
        <p>Gender:</p>
        <div className="mt-2 flex">
          
          <div className="border-2 w-2/6 rounded-lg p-3">
          <input type="radio" id="gender" name="fav_language" value="Male"/>
          <label className=" p-2 mr-5" htmlfor="Male">Male</label>
          </div>

          <div className="border-2 w-2/6 ml-2 rounded-lg p-3">
          <input type="radio" id="gender" name="fav_language" value="Female"/>
          <label className=" p-2 mr-5" htmlfor="female">Female</label>
          </div>
          <div className="border-2 w-2/6 ml-2 rounded-lg p-3">
          <input type="radio" id="gender" name="fav_language" value="Female"/>
          <label className=" p-2 mr-5" htmlfor="other">Other</label>
          </div>
          </div>
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

        <div className="text-center">
          <label htmlFor="submit">
            <input type="submit" value="SignUp" className="btn w-full text-white mt-10 " />
          </label>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
