import React, { useState } from 'react';

const Login = ({ loginUser }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='connex'>

      <label>Login</label>
      <input value={login} onChange={(event) => setLogin(event.currentTarget.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />

      <button onClick={() => loginUser(login, password)}>Connexion</button>
 </div>
 )}

export default Login;