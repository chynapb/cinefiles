import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <>
      <Card className='signin-card'>
        <Card.Body>
          <h1 className='text-center mb-3'>Login</h1>
          <Form>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' required />
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
          Sign Up.
        </Link>
      </div>
    </>
  );
};
