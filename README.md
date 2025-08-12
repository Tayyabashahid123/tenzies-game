# Tenzies – React Dice Game

[Live Demo](https://dice-tenziess.netlify.app)

A fun and interactive **Tenzies** game built with React. Roll dice, hold values, and try to get all ten dice to match. Includes win detection, a “New Game” flow, confetti, accessibility enhancements, and more!

---

## ​​ Gameplay

- Roll until all dice show the same value.
- Click a die to “freeze” it—frozen dice won’t change when you roll again.
- Once all dice are frozen and match, confetti plays 🎉 and the **New Game** button appears.

---

## ​ Features

- **React functional components** with `useState`, `useEffect`, and `useRef`.
- **Confetti animation** on win using `react-confetti`.
- **Accessibility enhancements**:
  - `aria-pressed` and `aria-label` for dice buttons.
  - Focus automatically shifts to the “New Game” button after winning.
  - Announcements with `aria-live` for screen readers.
- **Clean, modular code** with `Dice` component and state well structured.

---

##  Tech Stack

- React
- nanoid (for unique IDs)
- react-confetti
- Vanilla CSS

---

##  Setup & Usage

```bash
# Clone the repo
git clone https://github.com/Tayyabashahid123/tenzies-game.git
cd tenzies-game

# Install dependencies
npm install

# Run locally
npm start


Game Flow

| Step | Description                                            |
| ---- | ------------------------------------------------------ |
| 1    | Roll dice using the “Roll” button                      |
| 2    | Click individual dice to freeze/unfreeze them          |
| 3    | Game detects win when all dice match and are frozen    |
| 4    | Confetti animation plays and “New Game” button appears |
| 5    | Focus shifts to “New Game” button for accessibility    |
| 6    | Click “New Game” to reset dice and play again          |

------------

Accessibility Enhancements
Proper use of aria-pressed, aria-label, and aria-live to ensure full screen reader support.

Focus management ensures new UI elements are keyboard-navigable.

---------

Live Demo
Check it out: dice-tenziess.netlify.app
