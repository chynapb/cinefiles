import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Watchlist } from './pages/Watchlist';
import { Login } from './pages/Login';
import { Footer } from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar />
      <Container className='mt-5 pt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='login' element={<Login />} />
          <Route path='watchlist' element={<Watchlist />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
