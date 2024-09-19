import '/src/app.css'
import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  const artistList = artists.map(artist => <ArtistDetails key={artist.name} artist={artist} />)

  return (
    <div className="app">
      <header className='header-area'>
        <h1>Best Selling Artists</h1>
      </header>
      <div className="main-content">
        {artistList}
      </div>
      <footer className='footer-area'>
        <p>Ben Louis</p>
        <p>COMP 3170</p>
        <p>2024</p>
      </footer>
    </div>
  );
}

export default App;
