import React, { useState } from "react";

function ComplaintForm() {

  const [description, setDescription] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNo, setEnrollmentno] = useState("");
  const [phone, setPhone] = useState("");
  const [complainTitle, setComplainTitle] = useState("");
  const [images, setImages] = useState("");

   function uploadImg(e){
      setImages(URL.createObjectURL(e.target.files[0]));
      // console.log(images); 
  }
  return (
    <div>
      <form className="mt-8 text-left">
        <div className="flex justify-between">
          <div className="w-5/12">
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
          <div className="w-5/12">
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
          <label htmlFor="rollno">
            <p className="para">Complain:</p>
            <input
              placeholder="Enter your Complain"
              value={complainTitle}
              onChange={(e) => setComplainTitle(e.target.value)}
              type="text"
              className="ipt"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rollno">
            <p className="para">Images:</p>
            <input
              onChange={uploadImg}
              type="file"
              className="ipt"
            />

            <img className="border p-5 w-1/2" src={images} alt="" />
            
           
            
          </label>
        </div>
        <div>
          <p className="para">Complain description:</p>

          <label htmlFor="complain">
            <textarea
              placeholder="Enter your Complain description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="txtarea"
              name="complain"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </label>
        </div>
        <div className="">
          <label htmlFor="submit">
            <input type="submit" value="Submit" className="btn" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ComplaintForm;
