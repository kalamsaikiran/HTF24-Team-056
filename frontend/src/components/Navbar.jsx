import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId');
      console.log(userId);
      if (userId) {
        try {
          const response = await fetch(`http://localhost:5000/user/${userId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data); // Assuming the response contains user data
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []); // Added the dependency array to avoid infinite loops

  const handleSignOut = () => {
    localStorage.removeItem('userId');
    setUser(null);
  };

  return (
    <div className='flex h-20 px-6 border-b items-center justify-between shadow-sm'>
      <Link to='/' className='flex items-center text-xl'>
        Fitness Tracker
      </Link>
      <div className='flex items-center gap-x-10'>
        <Link to='/track'>Track your meal</Link>
        <Link to='/contact'>Contact</Link> {/* Added text for the Contact link */}
      </div>
      <div className='flex items-center gap-x-5'>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleSignOut} className="text-blue-500">
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
