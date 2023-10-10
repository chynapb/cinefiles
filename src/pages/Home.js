import { NowPlaying } from '../components/NowPlaying';
import { Popular } from '../components/Popular';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
  return (
    <div className='home'>
      <NowPlaying />
      <SearchBar />
      <Popular />
    </div>
  );
};
