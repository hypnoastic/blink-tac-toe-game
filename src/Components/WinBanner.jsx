import React from 'react';
import '../Styles/WinBanner.css';
import buttonSound from '../Assets/sounds/button.mp3';

const playSound = (src) => {
    const audio = new window.Audio(src);
    audio.play();
};

const WinBanner = ({ winner, onReplay, onQuit, isUltimateWin }) => {
    return (
        <div className="win-banner">
            <div className="win-content">
                <h2 className={winner}>
                    {winner === 'red' ? 'Red Player' : 'Blue Player'}
                    {isUltimateWin ? ' Wins the Game!' : ' Wins the Round!'}
                </h2>
                <div className="win-buttons">
                    <button
                        onClick={() => {
                            playSound(buttonSound);
                            onReplay();
                        }}
                    >
                        {isUltimateWin ? 'New Game' : 'Next Round'}
                    </button>
                    <button
                        onClick={() => {
                            playSound(buttonSound);
                            onQuit();
                        }}
                    >
                        Quit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WinBanner;