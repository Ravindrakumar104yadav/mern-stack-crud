import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState('');
  const navigate = useNavigate();
  const registerHandle = async () => {
    console.log(name,password,email,role);
    let result=await fetch('http://localhost:5500/register',{
      method:'post',body:JSON.stringify({Name:name,Email:email,Password:password,Role:role}),
      headers:{'Content-Type':'application/json'}
    });
    result=await result.json();
    if(result)
    {
      navigate('/login');
    }


  }



  return (
    <div className='user-page'>

      <h2>Register</h2>
      <div className='form'>
      <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="Role">Role:</label>
      <select name="role" id="role" onChange={(e)=>setRole(e.target.value)}>
        <option >--Select Role--</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={registerHandle}>Register</button>
      <p>Login?<button >Click me</button></p>
      </div>

    </div>
  )
}

export default User
