import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <>
      <Card className='signup-card'>
        <Card.Body>
          <h1 className='text-center mb-3'>Sign Up</h1>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type='password' required />
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
    </>
  );
};
