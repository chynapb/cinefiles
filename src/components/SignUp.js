import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <div className='sign-up'>
      <div>
        <h1>Sign Up</h1>
        <p>
          Already have an account?{' '}
          <Link to='/login' className='underline'>
            Login.
          </Link>
        </p>
      </div>
      <form className='signup-form'>
        <div className='email'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter email address'
            className='signup-input'
          />
        </div>
        <div className='password'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            className='signup-input'
          />
        </div>
      </form>
      <button className='signup-btn'>Sign Up</button>
    </div>
  );
};
