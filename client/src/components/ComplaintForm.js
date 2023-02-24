import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
function ComplaintForm() {

  const [description, setDescription] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollmentNo, setEnrollmentno] = useState("");
  const [phone, setPhone] = useState("");
  const [complainTitle, setComplainTitle] = useState("");
  const [images, setImages] = useState([]);


   function handleRemove(e,i){
    const pic=[...images];
    pic.splice(i,1);
    console.log(images);
    setImages(pic);
   }


   function uploadImg(e,i){
    const inputdata=[...images];
inputdata[i]=URL.createObjectURL(e.target.files[0]);
      setImages(inputdata);
      // console.log(images); 

  }
  function handleAdd(e){

   const pic=[...images,[]];
    setImages(pic);
    e.preventDefault();

  }
  function handleSubmit(e){
    e.preventDefault();
    alert("Your Complain submitted Successfully");
  }
  return (
    <div className="">
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
        <div className="  mt-5 w-44">
        <span className=" ">Upload Images</span>
<button className="text-white text-lg  bg-custom-blue w-7 right rounded-full" type="button" onClick={()=>handleAdd()}>+</button>
        {images.map((data,i)=>(
          <div key={i}>
          <label htmlFor="rollno">
            <input
              onChange={e=>uploadImg(e,i)}
              type="file"
              className="ipt1"
            />
       <button className="mt-3 font-bold text-white bg-custom-blue rounded-full  ml-5 font-mono w-10" onClick={()=>handleRemove(i)} type="button"><AddIcon/></button>


            <img className="border p-5 w-1/2" src={data} alt="" />
            </label>
        </div>
        ))}
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
            <input type="submit" value="Submit" onClick={handleSubmit} className="btn text-white" />
          </label>
        </div>
      </form>
    </div>
    
  );
}

export default ComplaintForm;
