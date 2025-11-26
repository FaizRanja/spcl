import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/footer';
import Homepage from './components/Home/home';
import Predictions from './pages/Predictions';
import Bookmakers from './pages/Bookmakers';
import Leagues from './pages/Leagues';
import MathPredictions from './pages/MathPredictions';
import LiveScore from './pages/LiveScore';

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
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
