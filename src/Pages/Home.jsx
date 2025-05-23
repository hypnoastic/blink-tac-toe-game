import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import EmojiCategories from '../EmojiCategories';
import '../Styles/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer.jsx';
import placeSound from '../Assets/sounds/place.mp3';
import buttonSound from '../Assets/sounds/button.mp3'; // Import a different sound for the button

function Home() {
    const navigate = useNavigate();
    const [categoryRed, setCategoryRed] = useState('');
    const [categoryBlue, setCategoryBlue] = useState('');

    // Sound helper
    const playSound = (src) => {
        const audio = new window.Audio(src);
        audio.play();
    };

    const handleCategoryRed = (cat) => {
        if (categoryBlue !== cat) {
            setCategoryRed(cat);
            playSound(placeSound);
        }
    };

    const handleCategoryBlue = (cat) => {
        if (categoryRed !== cat) {
            setCategoryBlue(cat);
            playSound(placeSound);
        }
    };

    const handleStart = () => {
        if (!categoryRed || !categoryBlue) {
            alert('Please select categories for both players.');
            return;
        }
        playSound(buttonSound); // Play different sound for the start button
        navigate('/play', {
            state: {
                redPlayer: { color: 'red', category: categoryRed },
                bluePlayer: { color: 'blue', category: categoryBlue },
            },
        });
    };

    return (
        <div className="home-container">
            <Navbar/>

            <div className="players-section">

                {/* RED PLAYER */}
                <div className="player-side red-glass">
                    <h2 className="player1">Player 1</h2>
                    <div className="category-grid">
                        {Object.entries(EmojiCategories).map(([cat, emojis]) => (
                            <div
                                key={cat}
                                className={`category-card ${categoryRed === cat ? 'selected' : ''} ${categoryBlue === cat ? 'disabled' : ''}`}
                                onClick={() => handleCategoryRed(cat)}
                            >
                                <span className="category-title">{cat}</span> <br/>
                                <span className="emoji-sample">
                                  {emojis.slice(0, 3).map((emoji, index) => (
                                      <span key={index} className="emoji-spaced">{emoji}</span>
                                  ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BLUE PLAYER */}
                <div className="player-side blue-glass">
                    <h2 className="player2">Player 2</h2>
                    <div className="category-grid">
                        {Object.entries(EmojiCategories).map(([cat, emojis]) => (
                            <div
                                key={cat}
                                className={`category-card ${categoryBlue === cat ? 'selected' : ''} ${categoryRed === cat ? 'disabled' : ''}`}
                                onClick={() => handleCategoryBlue(cat)}
                            >
                                <span className="category-title">{cat}</span> <br/>
                                <span className="emoji-sample">
                                  {emojis.slice(0, 3).map((emoji, index) => (
                                      <span key={index} className="emoji-spaced">{emoji}</span>
                                  ))}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button className="start-button" onClick={handleStart}>Start Game</button>

            <Footer/>
        </div>
    );
}

export default Home;
