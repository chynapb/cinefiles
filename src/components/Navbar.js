import { AppBar, Toolbar, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position='static' style={{ background: '#1d2129' }}>
      <Toolbar>
        <Typography
          variant='h5'
          href='/'
          sx={{
            fontFamily: 'Outfit',
            letterSpacing: '.1rem',
            fontSize: '2rem',
          }}
        >
          CINEFILES
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
