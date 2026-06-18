# 🎯 Fun Quiz App (ReactJS)

A clean, interactive 10-question quiz application built with React to practice core frontend state management and dynamic UI updates. This project provides a seamless, game-like user experience with real-time answer validation.

## ✨ Key Features
- **Dynamic Question Engine:** Renders data cleanly from a modular asset file with zero hardcoding.
- **Instant Answer Validation:** Uses React `useRef` to instantly apply visual feedback classes (`correct` / `wrong`) on user click.
- **State Locking System:** Prevents double-clicking or changing answers once an option is selected.
- **Interactive Progress Tracker:** Live counters display the current question index relative to the total quiz length.
- **End-Game Score Analytics:** Hides the quiz grid dynamically to display final score results with an instant reset/replay option.

## 🛠️ Technical Breakdown
- **React Hooks:** Leveraged `useState` for fluid state tracking (index, lock, score, and game phase transitions).
- **DOM Manipulation:** Applied `useRef` array mapping to cleanly inject and reset CSS status animations across options.
- **Conditional Rendering:** Utilized ternary operators to handle seamless view switches between the active quiz and the final score screen.
