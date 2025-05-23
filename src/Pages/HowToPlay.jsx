import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HowToPlay.css';
import Navbar from '../components/Navbar.jsx';
import Category from '../Assets/category.png'
import Emoji from '../Assets/emoji.png'
import Winner from '../Assets/win.png'
import Footer from "../Components/footer.jsx";

function HowToPlay() {
    return (
        <div className="how-to-play-page">
            <Navbar />
            <div className="how-to-play-content">
                <div className="how-to-play-card">
                    <h1>How to Play</h1>
                    <h3>
                        Welcome to <strong>Blink Tac Toe</strong>! This is a fun 2-player emoji-based twist on classic Tic Tac Toe.
                    </h3>
                    <ul>
                        <li>
                            <p>Both players need to select their emoji categories</p>
                            <br />
                            <img src={Category} alt="Emoji selection" className="instruction-img" />
                        </li>
                        <li>
                            <p>Both players can place their emoji on the 3x3 Board</p>
                            <br />
                            <img src={Emoji} alt="Emoji Placement" className="instruction-img" />
                        </li>
                        <li>
                            <p><strong>Vanishing Emoji Rule:</strong> Only your <strong>last 3 emojis</strong> remain on the board!</p>

                        </li>
                        <li>
                            <p>Win the round by creating a <strong>Vertical, Horizontal or Diagonal Line!</strong></p>
                            <br />
                            <img src={Winner} alt="Emoji Placement" className="instruction-img" />
                        </li>
                        <li>
                            <p>Red starts the game. The background color shows whose turn it is.</p>
                        </li>
                    </ul>
                    <Link to="/" className="back-home-btn">← Back to Home</Link>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HowToPlay;
