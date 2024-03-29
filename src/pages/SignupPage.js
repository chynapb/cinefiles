import { Container } from 'react-bootstrap';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

export const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  // Send user to homepage after signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className='signup-page'>
      <div className='w-100' style={{ maxWidth: '450px' }}>
        <Card className='signup-card'>
          <Card.Body>
            <h1 className='header text-center mb-3'>Create an Account</h1>
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
              <Button className='signup-btn w-100 mt-3' type='submit'>
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          Already have an account?{' '}
          <Link to='/login' className='underline'>
            Login
          </Link>
        </div>
      </div>
    </Container>
  );
};
