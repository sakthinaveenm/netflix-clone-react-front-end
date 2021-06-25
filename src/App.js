import React from 'react'
import './App.css';
import Row from './components/Row';
import requests from './api/requests';
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
     <Nav />
     <Banner/>
     <Row 
      title = "NETFLIX ORIGINALS"
      isLargeRow
      fetchUrl={requests.fetchNetflixOriginals } />
     <Row title = "Trendings" fetchUrl={requests.gettrending} />
     <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies} />
     <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
