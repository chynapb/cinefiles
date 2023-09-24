import { AppBar, Toolbar, Typography, Container, Stack } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position='static' style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            className='header'
            variant='h5'
            href='/'
            sx={{
              flexGrow: 1,
              fontFamily: 'Outfit',
              letterSpacing: '.1rem',
              fontSize: '2rem',
            }}
          >
            <span>CINE</span>FILES
          </Typography>
          <Stack direction='row' spacing={2}>
            <button className='link-btn'>HOME</button>
            <button className='link-btn'>FAVORITES</button>
            <button className='link-btn'>WATCHLIST</button>
            <button className='link-btn'>LOGIN</button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
