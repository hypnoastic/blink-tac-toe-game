# Blink Tac Toe

Blink Tac Toe is a creative, two-player twist on classic Tic Tac Toe, built with React and Vite. Instead of Xs and Os, players choose from unique emoji categories, and only their last three moves remain on the board, making every turn strategic and exciting.

---

## What Makes Blink Tac Toe Different?

- **Category Selection:** Each player picks a themed set of emojis to play with.
- **Vanishing Moves:** Only your last three moves are visible on the board, so you have to think ahead.
- **Race to Five:** Win a round by making a line; the first player to win five rounds is the overall winner.
- **Modern, Responsive Design:** The game looks great and works smoothly on both desktop and mobile devices.
- **Easy to Learn:** Includes a "How to Play" section right in the app.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or newer)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd blink_tac_toe_game
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

---

## Project Structure

- `src/Pages/` — Main pages: Home, Game, HowToPlay
- `src/Components/` — Reusable UI components (Navbar, Footer, WinBanner)
- `src/Styles/` — CSS files for styling
- `src/Assets/` — Images used in the app
- `src/EmojiCategories.js` — Emoji category definitions

---

## How to Play

1. Both players select their emoji categories.
2. Players take turns placing their chosen emoji on the 3x3 board.
3. Only your last three emojis remain visible; older ones disappear.
4. Win a round by making a line vertically, horizontally, or diagonally.
5. The first player to win five rounds wins the game.

For more details, click "How to Play" in the app.

---

## Credits

Created by [Yash](https://www.linkedin.com/in/hypnoastic)

---

This project uses [React](https://react.dev/) and [Vite](https://vitejs.dev/).
