import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SearchPage } from './pages/SearchPage';
import { Favorites } from './pages/Favorites';
import { Watchlist } from './pages/Watchlist';
import { LoginPage } from './pages/LoginPage';
import { Details } from './pages/Details';
import { Footer } from './components/Footer';
import { Container } from 'react-bootstrap';
import { SignupPage } from './pages/SignupPage';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='watchlist' element={<Watchlist />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Routes>
      </Container>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
