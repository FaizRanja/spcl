import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/footer';
import Homepage from './components/Home/home';
import Predictions from './pages/Predictions';
import Bookmakers from './pages/Bookmakers';
import Leagues from './pages/Leagues';
import MathPredictions from './pages/MathPredictions';
import LiveScore from './pages/LiveScore';
import Football from './pages/Football';
import Basketball from './pages/basketball';
import Tennis from './pages/Tennis';
import BestBettingapp from './pages/bestBettingapps';
import PopularLeagues from './pages/PopularLeagues';


function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/bookmakers" element={<Bookmakers />} />
        <Route path="/football/competitions/" element={<Leagues />} />
        <Route path="/math-predictions" element={<MathPredictions />} />
        <Route path="/livescore" element={<LiveScore />} />
        <Route path="/predictions/football" element={<Football />} />
        <Route path="/predictions/basketball" element={<Basketball />} />
        <Route path="/predictions/tennis" element={<Tennis />} />
        <Route path="/ar/bookmakers" element={<BestBettingapp />} />



          <Route path="/league/:leagueId" element={<PopularLeagues />} />


      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
