const key = process.env.REACT_APP_API_KEY;

const requests = {
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US`,
};

export default requests;
