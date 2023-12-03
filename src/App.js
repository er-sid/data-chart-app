import React, { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import Login2 from './components/Login2.jsx';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>

   
      {!isLoggedIn ? (
        <Login2 onLogin={handleLogin} />
      ) : (
        <Dashboard/>
      )}
    </div>
  );
};

export default App;
