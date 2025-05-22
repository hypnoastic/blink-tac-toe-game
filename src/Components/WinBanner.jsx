import React from 'react';
import '../Styles/WinBanner.css';

const WinBanner = ({ winner, onReplay, onQuit, isUltimateWin }) => {
    return (
        <div className="win-banner">
            <div className="win-content">
                <h2 className={winner}>
                    {winner === 'red' ? 'Red Player' : 'Blue Player'}
                    {isUltimateWin ? ' Wins the Game!' : ' Wins the Round!'}
                </h2>
                <div className="win-buttons">
                    <button onClick={onReplay}>
                        {isUltimateWin ? 'New Game' : 'Next Round'}
                    </button>
                    <button onClick={onQuit}>Quit</button>
                </div>
            </div>
        </div>
    );
};

export default WinBanner;