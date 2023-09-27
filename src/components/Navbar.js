import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavbarBs
      fixed='top'
      className='shadow'
      expand='md'
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
    >
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
        <NavbarBs.Toggle aria-controls='responsive-navbar-nav' />
        <NavbarBs.Collapse id='responsive-navbar-nav'>
          <Nav className='justify-content-end flex-grow-1 gap-4'>
            <NavLink to='/' className='nav-links'>
              HOME
            </NavLink>
            <NavLink to='/favorites' className='nav-links'>
              FAVORITES
            </NavLink>
            <NavLink to='/watchlist' className='nav-links'>
              WATCHLIST
            </NavLink>
            <NavLink to='/login' className='nav-links'>
              LOGIN
            </NavLink>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};
