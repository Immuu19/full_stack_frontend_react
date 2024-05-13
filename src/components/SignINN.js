import React, { useState } from 'react';
import { UserSignIn } from '../api/index';

const SignINN = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await UserSignIn({ "userName" : userName, "password" : password, "role" : 'CONSUMER' });

      const { token } = response.data; // Assuming your token is returned in 'token' field
      console.log("I AM HEREEEEEE -------->")
      console.log(response.data)
      setJwtToken('$token');
      setError('');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <div> {jwtToken} </div>
      {error && <div>{error}</div>}
    
      {jwtToken && (
        <div>
          Logged in successfully! $Token: {jwtToken}
        </div>
      )}
    </div>
  );
};

export default SignINN;
