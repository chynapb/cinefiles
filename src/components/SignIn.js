import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <div className='sign-in'>
      <div>
        <h1>Login to your account</h1>
        <p>
          Don't have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign Up.
          </Link>
        </p>
      </div>
      <form className='login-form'>
        <div className='email'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter email address'
            className='login-input'
          />
        </div>
        <div className='password'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            className='login-input'
          />
        </div>
      </form>
      <button className='login-btn'>Login</button>
    </div>
  );
};
