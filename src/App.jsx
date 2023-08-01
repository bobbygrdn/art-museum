import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import harvardArt from './data/harvardArt.js';
import GalleryView from "./components/GalleryView/GalleryView";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import PageNotFound from './components/PageNotFound';
import ArtImageTile from "./components/ArtImageTile/ArtImageTile";

function App() {
  return (
    <div className="App">
      <GalleryNavigation galleries={harvardArt.records} />
      <Routes>
        <Route path="/galleries/:galleryId" element={<GalleryView galleries={harvardArt.records} />}>
          <Route path="/galleries/:galleryId/art/:artId" element={<ArtImageTile />} />
        </Route>
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
