import { Container, Navbar } from 'react-bootstrap';

export const Footer = () => {
  return (
    <Navbar
      className='footer'
      style={{ background: 'rgba(0, 0, 0)' }}
      fixed='bottom'
    >
      <Container>
        <div
          style={{
            fontFamily: 'Outfit',
            letterSpacing: '.1rem',
            fontSize: '1.25rem',
            color: '#f0f0f0',
          }}
        >
          CINEFILES
        </div>
      </Container>
    </Navbar>
  );
};
