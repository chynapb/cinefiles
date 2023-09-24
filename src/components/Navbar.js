import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <NavbarBs expand='sm' style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <Container>
        <NavbarBs.Brand
          href='/'
          style={{
            fontFamily: 'Outfit',
            letterSpacing: '.1rem',
            fontSize: '2rem',
            color: '#f0f0f0',
          }}
        >
          CINE<span>FILES</span>
        </NavbarBs.Brand>
        <Nav className='ml-auto'>
          <Nav.Link href='/' className='nav-links'>
            HOME
          </Nav.Link>
          <Nav.Link href='/favorites' className='nav-links'>
            FAVORITES
          </Nav.Link>
          <Nav.Link href='/watchlist' className='nav-links'>
            WATCHLIST
          </Nav.Link>
          <Nav.Link href='/login' className='nav-links'>
            LOGIN
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};
