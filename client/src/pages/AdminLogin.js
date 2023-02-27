import React , {useState} from 'react'

function login(){
    console.log("login");
  }
function AdminLogin() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className='min-h-screen'> 
        
        <div className="flex mx-auto content-center justify-center  mt-60 ">
    
      <div className=" box-shadow border-2 p-10 ">
      <p className='text-5xl  text-custom-blue mb-8 text-center"'>Admin Login</p>
 <div >
        <label htmlFor="username">
          <p className="para">Email id:</p>
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
          <p className="para">Password:</p>
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
      <button onClick={login} className="text-white mt-4 mb-3 w-full p-3 ml-1 bg-custom-blue rounded-lg">Log In</button>
        
      </div>
      </div>
    </div>
    </div>
  )
}

export default AdminLogin