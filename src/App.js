import './App.css';
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isLargeRow={true} title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchURL={requests.fetchTrending}/>
      <Row title="Top rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      <footer className="footer">
        <p>Made by Moinuddin Mulla <br/> © copyright 2022</p>
      </footer>
    </div>
  );
}

export default App;
