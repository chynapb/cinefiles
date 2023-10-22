const key = '693fb5347e5a1677ba8d3510f1c5e436';

const requests = {
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  discover: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${key}&include_adult=false&language=en-US&page=1`,
};

export default requests;
