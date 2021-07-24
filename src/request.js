const API_KEY = "6c86821c385f6c1ea5ffe9b56493afe0";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHororMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&query=`,
};

export default request;
