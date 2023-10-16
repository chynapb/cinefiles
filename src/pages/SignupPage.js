import { Container } from 'react-bootstrap';
import { SignUp } from '../components/SignUp';

export const SignupPage = () => {
  return (
    <Container className='signup-page'>
      <div className='w-100' style={{ maxWidth: '450px' }}>
        <SignUp />
      </div>
    </Container>
  );
};
