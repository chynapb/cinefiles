import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Watchlist } from './pages/Watchlist';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='login' element={<Login />} />
        <Route path='watchlist' element={<Watchlist />} />
      </Routes>
    </>
  );
}

export default App;
