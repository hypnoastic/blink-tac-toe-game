import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emojiCategories from '../emojiCategories';
import '../styles/Home.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



function Home() {
    const navigate = useNavigate();
    const [categoryRed, setCategoryRed] = useState('');
    const [categoryBlue, setCategoryBlue] = useState('');

    const handleStart = () => {
        if (!categoryRed || !categoryBlue) {
            alert('Please select categories for both players.');
            return;
        }

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
                        {Object.entries(emojiCategories).map(([cat, emojis]) => (
                            <div
                                key={cat}
                                className={`category-card ${categoryRed === cat ? 'selected' : ''} ${categoryBlue === cat ? 'disabled' : ''}`}
                                onClick={() => categoryBlue !== cat && setCategoryRed(cat)}
                            >
                                <span className="category-title">{cat}</span>
                                <span className="emoji-sample">{emojis.slice(0, 3).join(' ')}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BLUE PLAYER */}
                <div className="player-side blue-glass">
                    <h2 className="player2">Player 2</h2>
                    <div className="category-grid">
                        {Object.entries(emojiCategories).map(([cat, emojis]) => (
                            <div
                                key={cat}
                                className={`category-card ${categoryBlue === cat ? 'selected' : ''} ${categoryRed === cat ? 'disabled' : ''}`}
                                onClick={() => categoryRed !== cat && setCategoryBlue(cat)}
                            >
                                <span className="category-title">{cat}</span>
                                <span className="emoji-sample">{emojis.slice(0, 3).join(' ')}</span>
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
