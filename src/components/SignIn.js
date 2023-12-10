import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Card className='signin-card'>
        <Card.Body>
          <h1 className='header text-center mb-3'>Login</h1>
          {error ? <p className='error'>{error}</p> : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button className='signin-btn w-100 mt-3' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Don't have an account yet?{' '}
        <Link to='/signup' className='underline'>
          Sign Up
        </Link>
      </div>
    </>
  );
};
