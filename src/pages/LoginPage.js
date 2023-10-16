import { Container } from 'react-bootstrap';
import { SignIn } from '../components/SignIn';

export const LoginPage = () => {
  return (
    <Container className='login-page'>
      <div className='w-100' style={{ maxWidth: '450px' }}>
        <SignIn />
      </div>
    </Container>
  );
};
