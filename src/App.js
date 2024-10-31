import React from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>Frontend menggunakan React dan backend Go.</p>
      <UserList />
      <CreateUser />
    </div>
  );
}

export default App;
