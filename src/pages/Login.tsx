import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../libs/auth.context';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || '/';
  const { login, logout, user } = useAuth();

  function handleUsername(value: string) {
    setUsername(value);
  }

  function handleRedirect() {
    navigate(redirectPath, { replace: true });
  }

  function handleLogin() {
    login({ name: username });
    handleRedirect();
  }

  return (
    <div className='login-form'>
      {!user && (
        <input
          className='user-input'
          placeholder='username'
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        />
      )}

      {!user ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}
export default Login;
