import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import request from "./request";
import Row from "./Row";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Search />
      <Row
        title="Netflix Original"
        fetchURL={request.fetchNetflixOriginal}
        isLarge
      />
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action" fetchURL={request.fetchActionMovie} />
      <Row title="Comedy" fetchURL={request.fetchComedyMovie} />
      <Row title="Romance" fetchURL={request.fetchRomanceMovie} />
    </div>
  );
}

export default App;
