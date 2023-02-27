import React from 'react'

function AddStaff() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    
  
  
   
  
     
   
    function handleSubmit(e){
      e.preventDefault();
      alert("Staff added  Successfully");
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
            <p className="para">Role</p>
            <input
              placeholder="Enter the role"
              value={complainTitle}
              onChange={(e) => setRole(e.target.value)}
              type="text"
              className="ipt"
            />
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



export default AddStaff