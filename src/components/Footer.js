import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar
      fixed='bottom'
      className='shadow'
      expand='md'
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: 'Outfit',
            letterSpacing: '.1rem',
            fontSize: '1.25rem',
            color: '#f0f0f0',
          }}
        >
          CINEFILES
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
