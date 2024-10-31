import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the User Management App</h1>
      <h3>Frontend React Consume dari API Golang</h3>
      <nav>
        <ul>
          <li><Link to="/create-user">Create User</Link></li>
          <li><Link to="/users">User List</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
