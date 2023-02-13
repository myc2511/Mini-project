import React , {useState} from 'react'
function login(){
    console.log("login");
  }
function AdminLogin() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    
        <div className="container m-auto w-5/12 pl-36 ">
      <div className="border-2 p-4 w-8/12">
      <p className='text-3xl text-center'>Admin Login</p>

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
       
          <input className=" p-3 pr-40 pl-40 ml-1 bg-blue-600 rounded-lg"
          htmlFor="firstName" onClick={login} value="LogIn" type="button" />
        
      </div>
      </div>
    </div>
  )
}

export default AdminLogin