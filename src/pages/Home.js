import { NowPlaying } from '../components/NowPlaying';
import { Popular } from '../components/Popular';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
  return (
    <>
      <NowPlaying />
      <SearchBar />
      <Popular />
    </>
  );
};
