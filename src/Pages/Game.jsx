import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Game.css';
import WinBanner from '../Components/WinBanner';
import Navbar from '../Components/Navbar';
import EmojiCategories from '../EmojiCategories';
import Footer from '../Components/Footer.jsx';
import placeSound from '../Assets/sounds/place.mp3';
import winSound from '../Assets/sounds/win.mp3';
import gameWinSound from '../Assets/sounds/gamewin.mp3';

const Game = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { redPlayer, bluePlayer } = location.state || {};

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isRedTurn, setIsRedTurn] = useState(true);
    const [redMoves, setRedMoves] = useState([]);
    const [blueMoves, setBlueMoves] = useState([]);
    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);
    const [showWinBanner, setShowWinBanner] = useState(false);
    const [winner, setWinner] = useState(null);
    const [ultimateWinner, setUltimateWinner] = useState(null);
    const [winningLine, setWinningLine] = useState(null);
    const WINNING_SCORE = 5;

    // Get random emoji from category
    const getRandomEmoji = (category) => {
        const emojis = EmojiCategories[category];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };

    // Check for winning combinations
    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a].player === squares[b]?.player && squares[a].player === squares[c]?.player) {
                setWinningLine(lines[i]);
                return squares[a].player;
            }
        }
        setWinningLine(null);
        return null;
    };

    // Handle cell click
    const handleClick = (index) => {
        if (board[index] || showWinBanner || ultimateWinner) return;

        // Play place sound when a player puts an emoji
        playSound(placeSound);

        const newBoard = [...board];
        const currentPlayer = isRedTurn ? 'red' : 'blue';
        const emoji = getRandomEmoji(isRedTurn ? redPlayer.category : bluePlayer.category);

        newBoard[index] = {
            player: currentPlayer,
            emoji: emoji
        };

        // Update moves arrays with FIFO logic
        if (isRedTurn) {
            const newRedMoves = [...redMoves, index];
            if (newRedMoves.length > 3) {
                const oldestMove = newRedMoves.shift();
                newBoard[oldestMove] = null;
            }
            setRedMoves(newRedMoves);
        } else {
            const newBlueMoves = [...blueMoves, index];
            if (newBlueMoves.length > 3) {
                const oldestMove = newBlueMoves.shift();
                newBoard[oldestMove] = null;
            }
            setBlueMoves(newBlueMoves);
        }

        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            setShowWinBanner(true);
            playSound(winSound);
            if (gameWinner === 'red') {
                const newRedScore = redScore + 1;
                setRedScore(newRedScore);
                if (newRedScore >= WINNING_SCORE) {
                    setUltimateWinner('red');
                    playSound(gameWinSound);
                }
            } else {
                const newBlueScore = blueScore + 1;
                setBlueScore(newBlueScore);
                if (newBlueScore >= WINNING_SCORE) {
                    setUltimateWinner('blue');
                    playSound(gameWinSound);
                }
            }
        } else {
            setIsRedTurn(!isRedTurn);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setRedMoves([]);
        setBlueMoves([]);
        setIsRedTurn(true);
        setShowWinBanner(false);
        setWinner(null);
        setWinningLine(null);

        if (ultimateWinner) {
            setRedScore(0);
            setBlueScore(0);
            setUltimateWinner(null);
        }
    };

    const handleQuit = () => {
        navigate('/');
    };

    const playSound = (src) => {
        const audio = new window.Audio(src);
        audio.play();
    };

    return (
        <div className={`game-container ${isRedTurn ? 'red-turn' : 'blue-turn'}`}>
            <Navbar />

            <div className="game-content">
                <div className="player-info">
                    <div className="player-wrapper">
                        <div className={`player-circle red ${isRedTurn ? 'active' : ''}`}>
                            <div className="emoji-display">
                                {getRandomEmoji(redPlayer?.category)}
                            </div>
                        </div>
                        <div className="player-category">{redPlayer?.category}</div>
                    </div>

                    <div className="score-tracker">
                        <div className="score-display">
                            {redScore} - {blueScore}
                        </div>
                        {ultimateWinner && (
                            <div className="ultimate-winner">
                                {ultimateWinner === 'red' ? 'Red' : 'Blue'} Player Wins the Game!
                            </div>
                        )}
                    </div>

                    <div className="player-wrapper">
                        <div className={`player-circle blue ${!isRedTurn ? 'active' : ''}`}>
                            <div className="emoji-display">
                                {getRandomEmoji(bluePlayer?.category)}
                            </div>
                        </div>
                        <div className="player-category">{bluePlayer?.category}</div>
                    </div>
                </div>


                <div className="game-board">
                    {board.map((cell, index) => (
                        <div
                            key={index}
                            className={`board-cell ${cell?.player || ''} ${winningLine?.includes(index) ? 'winning' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            {cell?.emoji}
                        </div>
                    ))}
                </div>
            </div>


            {showWinBanner && (
                <WinBanner
                    winner={winner}
                    onReplay={resetGame}
                    onQuit={handleQuit}
                    isUltimateWin={ultimateWinner !== null}
                />
            )}
            <Footer/>
        </div>

    );
};

export default Game;