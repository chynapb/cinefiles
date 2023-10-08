import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <div className='footer' style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
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
    </div>
  );
};
