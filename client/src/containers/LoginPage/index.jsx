import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction } from './actions';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (login !== '' && password !== '') {
      dispatch(loginAction({ login, password }));
    } else {
      alert('incorrect credentials')
    }
  }

  return (
    <div className="ui middle aligned center aligned grid">
      <div className="column">
        <h2 className="ui teal image header">
          <div className="content">
            Log in
          </div>
        </h2>
        <form className="ui large form" onSubmit={handleLogin} noValidate>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon" />
                <input
                  type="text"
                  name="email"
                  placeholder="Login"
                  value={login}
                  onChange={e => setLogin(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type='submit' className="ui fluid large teal submit button">Login</button>
          </div>

          <div className="ui error message" />

        </form>
      </div>
    </div>
  )
}

export default LoginPage;
