import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const userFirstRegister = () => {
    navigate('/')
  }
  const loginHandle = async () => {
    console.log(email, password, role);
    let result = await fetch('http://localhost:5500/login', {
      method: 'post', body: JSON.stringify({ Email: email, Password: password, Role: role }),
      headers: { 'Content-Type': 'application/json' }
    });

    result = await result.json();
    result = JSON.stringify(result);
    localStorage.setItem("user", result);

    let auth = localStorage.getItem("user");
    auth = JSON.parse(auth);
    if (auth.Role == "admin") {
      navigate('/updateSchedule');
    }

    else {
      navigate('/schedule');
    }



  }


  return (
    <div className='user-page'>

      <h2>Login</h2>
      <div className='form'>
      <input type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="Role">Role:</label>
      <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
        <option  >--Select Role--</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <button onClick={loginHandle}>Login</button>
      <p>Register?<button >Click me</button></p>
      </div>

    </div>
  )
}

export default UserLogin;
