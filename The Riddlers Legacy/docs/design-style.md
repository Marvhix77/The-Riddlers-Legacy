# The Riddler's Legacy — Design Style Guide

This document explains the visual design direction for **The Riddler's Legacy**.

## 1. Design Goal

The game should feel like a mysterious riddle challenge inspired by a game-show reward ladder.

The style should combine:

```text
Riddler mystery + realistic quiz web app + reward progression
```

The design should be:

- Dark
- Mysterious
- Green-themed
- Dramatic but controlled
- Clean
- Realistic
- Easy to read
- Beginner-friendly
- Responsive on phones and laptops

## 2. Important Visual Direction

The design should look like a **realistic modern quiz webpage**, not a fantasy RPG game screen.

It should feel polished and thematic, but still believable as a web development class project.

Keep:

- Dark green mood
- Riddler mystery
- Reward ladder
- Gold active reward
- Question-mark theme
- Subtle glow effects
- Clean card layout

Avoid:

- Overly fantasy-style UI
- Too much neon glow
- Heavy cinematic background scenes
- Gotham/city skyline backgrounds
- Crowns, trophies, and excessive icons
- Overdecorated borders
- Large magical/fantasy title effects
- Visual clutter

The Riddler theme should come from:

```text
Color + atmosphere + subtle question-mark motifs + clean mystery styling
```

not from excessive decorations.

A better direction is:

```text
Clean dark web app with subtle Riddler styling.
```

## 3. Layout System

Use **Flexbox** for the layout.

Do not use CSS Grid for version 1. Flexbox is easier to understand, easier to explain, and strong enough for this project.

The page has two major sections:

```text
1. Question and answer area
2. Reward ladder area
```

On larger screens, they should appear side by side.

```text
Question Area  |  Reward Ladder
```

On smaller screens, they should stack vertically.

```text
Question Area
Reward Ladder
```

## 4. Recommended HTML Structure

```html
<div class="game-container">

  <header class="game-header">
    <h1>The Riddler's Legacy</h1>
    <p>Answer the riddles. Climb the legacy ladder.</p>
  </header>

  <main class="game-board">

    <section class="question-section">
      <p id="questionLabel"></p>
      <p id="question"></p>
      <div id="options"></div>
      <p id="result"></p>
      <div id="animationBox"></div>
      <button id="restartButton">Restart Game</button>
    </section>

    <aside class="reward-section">
      <h2>Legacy Ladder</h2>
      <ul id="rewardList"></ul>
    </aside>

  </main>

</div>
```

## 5. Color Palette

Use a dark green Riddler-inspired palette.

```css
:root {
  --bg-dark: #050807;
  --panel-dark: #0b1511;
  --panel-soft: #102019;
  --green-main: #00ff88;
  --green-soft: #7cffb2;
  --gold: #ffd700;
  --danger: #ff3b3b;
  --text-main: #f5f5f5;
  --text-muted: #a8b3ad;
}
```

Use green for the Riddler identity, gold for money/rewards, red for wrong answers, and white/gray for readable text.

## 6. Background Style

The background should be dark and atmospheric, but not too dramatic.

Use a subtle dark gradient rather than a heavy fantasy/city background.

Recommended:

```css
body {
  min-height: 100vh;
  font-family: "Trebuchet MS", Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(0, 255, 136, 0.10), transparent 28%),
    linear-gradient(135deg, #050807, #0b1511 55%, #020403);
  color: var(--text-main);
}
```

Optional subtle question-mark pattern can be added later, but it should be faint and not distracting.

## 7. Game Container

```css
.game-container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 24px;
}
```

## 8. Header Style

The title should be strong but not overly fantasy-like.

Recommended:

```css
.game-header {
  text-align: center;
  margin-bottom: 28px;
}

.game-header h1 {
  color: var(--green-main);
  font-size: 2.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.35);
}

.game-header p {
  color: var(--text-muted);
}
```

Suggested subtitle:

```text
Answer the riddles. Climb the legacy ladder. One wrong answer ends the game.
```

## 9. Main Flexbox Layout

```css
.game-board {
  display: flex;
  gap: 24px;
  align-items: stretch;
}
```

The question section should take most of the space:

```css
.question-section {
  flex: 1;
}
```

The reward ladder should have a fixed width on large screens:

```css
.reward-section {
  width: 290px;
}
```

## 10. Question Section

The question section should look like a clean modern card.

```css
.question-section {
  background: rgba(11, 21, 17, 0.95);
  border: 1px solid rgba(0, 255, 136, 0.20);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  padding: 28px;
}
```

## 11. Question Text

```css
#question {
  background: var(--panel-soft);
  border: 1px solid rgba(124, 255, 178, 0.16);
  border-radius: 14px;
  padding: 22px;
  font-size: 1.3rem;
  line-height: 1.6;
}
```

## 12. Question Label

Use the label to show progress.

Example:

```text
Question 5 / 28 — Easy Level
```

```css
#questionLabel {
  color: var(--gold);
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 14px;
}
```

## 13. Answer Button Layout

Use Flexbox for answer buttons.

```css
#options {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 24px;
}
```

Each button should take about half the width on larger screens.

```css
#options button {
  flex: 1 1 calc(50% - 14px);
  min-width: 220px;
}
```

This creates:

```text
A button    B button
C button    D button
```

## 14. Answer Button Style

Buttons should be clean and clickable, not overly ornamental.

```css
#options button {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 136, 0.28);
  background: #08110d;
  color: var(--text-main);
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  transition: 0.2s ease;
}
```

Hover effect:

```css
#options button:hover {
  background: rgba(0, 255, 136, 0.10);
  box-shadow: 0 0 12px rgba(0, 255, 136, 0.18);
  transform: translateY(-1px);
}
```

## 15. Correct and Wrong Answer States

```css
.correct-answer {
  background: rgba(0, 255, 136, 0.16) !important;
  border-color: var(--green-main) !important;
}
```

```css
.wrong-answer {
  background: rgba(255, 59, 59, 0.16) !important;
  border-color: var(--danger) !important;
}
```

JavaScript can add these classes after the player clicks an answer.

## 16. Result Message

```css
#result {
  margin-top: 22px;
  font-size: 1.1rem;
  font-weight: bold;
}
```

Optional result classes:

```css
.result-correct {
  color: var(--green-soft);
}

.result-wrong {
  color: var(--danger);
}

.result-win {
  color: var(--gold);
}
```

## 17. Animation/GIF Box

The animation area should look like a clean preview card, not a fantasy frame.

```css
#animationBox {
  min-height: 140px;
  margin-top: 20px;
  border: 1px dashed rgba(124, 255, 178, 0.22);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.025);
  text-align: center;
  padding: 18px;
}
```

For GIF images:

```css
#animationBox img {
  max-width: 220px;
  border-radius: 12px;
}
```

## 18. Reward Section

The reward ladder should look like a neat sidebar, not a magical artifact.

```css
.reward-section {
  width: 290px;
  background: rgba(11, 21, 17, 0.95);
  border: 1px solid rgba(255, 215, 0, 0.20);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  padding: 20px;
}
```

```css
.reward-section h2 {
  color: var(--gold);
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
  text-align: center;
}
```

## 19. Reward List

```css
#rewardList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
```

```css
#rewardList li {
  padding: 9px 11px;
  border-radius: 9px;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Active reward:

```css
#rewardList li.active-reward {
  color: #1a1300;
  background: var(--gold);
  font-weight: bold;
  box-shadow: 0 0 12px rgba(255, 215, 0, 0.35);
}
```

## 20. Restart Button

```css
#restartButton {
  display: none;
  margin-top: 20px;
  padding: 14px 22px;
  border-radius: 12px;
  border: none;
  background: var(--green-main);
  color: #001f12;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 0 14px rgba(0, 255, 136, 0.20);
}
```

```css
#restartButton:hover {
  box-shadow: 0 0 18px rgba(0, 255, 136, 0.30);
}
```

## 21. Responsive Design

For tablets and phones:

```css
@media (max-width: 850px) {
  .game-board {
    flex-direction: column;
  }

  .reward-section {
    width: 100%;
  }

  .game-header h1 {
    font-size: 1.8rem;
  }
}
```

For very small screens:

```css
@media (max-width: 560px) {
  .question-section {
    padding: 18px;
  }

  #question {
    font-size: 1.1rem;
    padding: 18px;
  }

  #options button {
    flex-basis: 100%;
    min-width: 100%;
  }
}
```

## 22. Asset Style Requirements

GIFs and images should be stored in:

```text
assets/images/
```

Sounds should be stored in:

```text
assets/audio/
```

Recommended asset names:

```text
assets/images/correct.gif
assets/images/wrong.gif
assets/images/win.gif
assets/images/background.png

assets/audio/correct.mp3
assets/audio/wrong.mp3
assets/audio/win.mp3
```

## 23. Minimum Visual Requirements

Version 1 should include:

- Dark background
- Clean glowing green title
- Clear question card
- Four visible answer buttons
- Reward ladder visible
- Active reward highlighted in gold
- Result message area
- Animation/GIF area
- Restart button
- Responsive Flexbox layout

## 24. Things to Avoid

Avoid:

- Too many colors
- Tiny text
- Overcrowded layout
- Very large GIFs
- CSS Grid for version 1
- Frameworks such as Bootstrap or Tailwind
- Overly fantasy game UI
- Heavy magical effects
- City skyline backgrounds
- Crowns and unnecessary decorative icons
- Design that makes the game difficult to read

## 25. Design Summary

The final page should feel like:

```text
A realistic modern quiz webpage with a dark Riddler-inspired theme.
```

The most important visual flow is:

```text
Title → Question → Answer buttons → Feedback → Reward ladder
```

The player should always know:

- What question they are answering
- What options are available
- Whether they were correct or wrong
- How much they have won
- How far they are from the final reward
