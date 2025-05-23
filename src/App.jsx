import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Game from './Pages/Game.jsx';
import HowToPlay from './Pages/HowToPlay.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/play" element={<Game />} />
                <Route path="/how-to-play" element={<HowToPlay />} />
            </Routes>
        </Router>
    );
}

export default App;
