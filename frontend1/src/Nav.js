import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setAuth(user);
  }, []);

  return (
    <div>
      <div className='nav-container'>
        <p className='para'>Conference Management System</p>
        <ul>
          {!auth ?
            <>
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/register'>REGISTER</Link></li>
              <li><Link to='/login'>LOGIN</Link></li>
            </> : null
          }
        </ul>
      </div>
    </div>
  );
};

export default Nav;
