import React from 'react'


function ResetPassword() {
   
    const escalteCmpln = async () => {
   
        const url = `http://localhost:5000/api/recovery/newpassword`;
    
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });
        const res = await response.json();
       
      };

  return (
    <div className='text-white'>
      <form>
  <label>New Password:</label>
  <input type="password" name="password" />
  <button type="submit">Reset Password</button>
</form>
    </div>
  )
}

export default ResetPassword
