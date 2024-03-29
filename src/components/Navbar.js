import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user } = UserAuth();

  return (
    <NavbarBs
      className='shadow'
      expand='md'
      style={{ background: 'rgba(0, 0, 0, 0.8)' }}
    >
      <Container>
        <NavbarBs.Brand
          className='logo'
          style={{
            fontFamily: 'Outfit',
            letterSpacing: '.1rem',
            fontSize: '2rem',
            color: '#f0f0f0',
          }}
        >
          CINE<span className='header-span'>FILES</span>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls='responsive-navbar-nav' />
        <NavbarBs.Collapse id='responsive-navbar-nav'>
          <Nav className='justify-content-end flex-grow-1 gap-4'>
            <NavLink to='/' className='nav-links'>
              HOME
            </NavLink>
            <NavLink to='/search' className='nav-links'>
              SEARCH
            </NavLink>
            <NavLink to='/favorites' className='nav-links'>
              FAVORITES
            </NavLink>
            <NavLink to='/watchlist' className='nav-links'>
              WATCHLIST
            </NavLink>
            {!user && (
              <NavLink to='/login' className='nav-links'>
                LOGIN
              </NavLink>
            )}
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};
