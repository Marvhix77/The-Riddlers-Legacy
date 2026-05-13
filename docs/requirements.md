# The Riddler's Legacy — Requirements

This document defines what **The Riddler's Legacy** must do.

It guides development and helps Codex build the project correctly.

## 1. Project Overview

**The Riddler's Legacy** is a browser-based riddle quiz game inspired by **Who Wants to Be a Millionaire?**

The player answers riddle questions and climbs a reward ladder.

The game uses:

- HTML for structure
- CSS for styling
- JavaScript for game logic

Version 1 should use only plain HTML, CSS, and JavaScript.

No frameworks should be used.

## 2. Version 1 Goal

Version 1 should create a working and defendable class project.

It should focus on:

- Displaying questions
- Checking answers
- Updating rewards
- Showing correct/wrong feedback
- Ending the game properly
- Restarting the game
- Keeping the code simple and understandable

Lifelines and advanced features should come later.

## 3. Visual Requirement

The design should look like a **realistic modern quiz webpage**, not a fantasy RPG/game screen.

The page should still use the Riddler theme, but the theme should be expressed through:

- Dark green background
- Clean card layout
- Subtle green glow
- Question-mark mood
- Gold reward highlight
- Clear typography

The page should avoid:

- Overly fantasy-style UI
- Heavy cinematic backgrounds
- Crowns/trophies/excessive icons
- Too much neon
- Too many decorative elements
- Visual clutter

## 4. Required Folder Structure

Recommended structure:

```text
riddlers-legacy/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── data/
│   ├── questions.js
│   └── rewards.js
│
├── assets/
│   ├── audio/
│   │   ├── correct.mp3
│   │   ├── wrong.mp3
│   │   └── win.mp3
│   │
│   ├── images/
│   │   ├── correct.gif
│   │   ├── wrong.gif
│   │   ├── win.gif
│   │   └── background.png
│   │
│   └── icons/
│       └── favicon.ico
│
└── docs/
    ├── algorithm.md
    ├── game-rules.md
    ├── features.md
    ├── requirements.md
    └── design-style.md
```

## 5. HTML Requirements

The HTML file must contain:

- Game title
- Subtitle or short game description
- Question display area
- Answer options area
- Result/message area
- Animation/GIF display area
- Reward ladder area
- Restart button
- Link to `style.css`
- Links to the JavaScript files

## 6. Required HTML IDs

Recommended IDs:

```html
<p id="questionLabel"></p>
<p id="question"></p>
<div id="options"></div>
<p id="result"></p>
<div id="animationBox"></div>
<ul id="rewardList"></ul>
<button id="restartButton">Restart Game</button>
```

The IDs used in JavaScript must match the IDs in HTML exactly.

## 7. CSS Requirements

The CSS must include:

- Dark Riddler-inspired background
- Clean glowing green title
- Question card design
- Flexbox layout
- Answer button styling
- Reward ladder styling
- Active reward highlight
- Result message styling
- Animation/GIF box styling
- Restart button styling
- Responsive design

The first version should use **Flexbox**, not CSS Grid.

## 8. Layout Requirements

On larger screens:

```text
Question section and reward ladder should appear side by side.
```

On smaller screens:

```text
Question section should appear first.
Reward ladder should stack below it.
```

## 9. Question Data Requirements

Questions should be stored in:

```text
data/questions.js
```

Questions must be grouped by difficulty:

```js
const questions = {
  easy: [],
  medium: [],
  hard: [],
  extreme: []
};
```

Each question must follow this structure:

```js
{
  question: "",
  options: [],
  answer: ""
}
```

Each question must include:

- One question text
- Four answer options
- One correct answer

Example:

```js
{
  question: "What has keys but can't open locks?",
  options: ["A piano", "A map", "A clock", "A door"],
  answer: "A piano"
}
```

## 10. Question Validation Requirements

Each question should follow these rules:

- `question` must not be empty.
- `options` must contain exactly four options.
- `answer` must exactly match one of the four options.
- Each difficulty pool should contain at least 7 questions.
- More than 7 questions per difficulty is better for replay value.

## 11. Reward Data Requirements

Rewards should be stored in:

```text
data/rewards.js
```

The reward array should move from smallest to largest.

For the full version:

```text
7 easy questions
7 medium questions
7 hard questions
7 extreme questions
= 28 total questions
= 28 reward levels
```

## 12. JavaScript File Loading Requirements

The data files must load before `script.js`.

Correct order:

```html
<script src="data/questions.js"></script>
<script src="data/rewards.js"></script>
<script src="script.js"></script>
```

## 13. Game State Requirements

Required variables:

```js
let selectedQuestions = [];
let currentQuestionIndex = 0;
let currentReward = "₦0";
let gameOver = false;
```

## 14. Function Requirements

The JavaScript should be organized into small functions.

Required functions:

```js
startGame()
selectRandomQuestions()
getRandomItems()
displayQuestion()
checkAnswer()
handleCorrectAnswer()
handleWrongAnswer()
updateRewardLadder()
playSound()
showAnimation()
endGame()
restartGame()
```

These functions should include comments.

## 15. Start Game Requirements

When the game starts, it must:

- Set `currentQuestionIndex` to `0`.
- Set `currentReward` to `"₦0"`.
- Set `gameOver` to `false`.
- Select random questions.
- Display the first question.
- Display the reward ladder.
- Hide the restart button.

## 16. Random Question Selection Requirements

The game must randomly select:

- 7 easy questions
- 7 medium questions
- 7 hard questions
- 7 extreme questions

The selected questions must be combined in this order:

```text
easy → medium → hard → extreme
```

The game should not randomly mix all difficulties together because the game must become harder as the reward increases.

## 17. Display Question Requirements

When displaying a question, the game must:

- Show the question text.
- Clear old answer buttons.
- Create new buttons for the current question's options.
- Add click events to each button.
- Show the current question number.
- Show the current difficulty level if possible.

## 18. Answer Checking Requirements

When the player clicks an answer, the game must:

- Get the selected answer.
- Get the correct answer for the current question.
- Compare both values.
- If correct, call the correct answer logic.
- If wrong, call the wrong answer logic.
- Prevent multiple answer clicks for the same question.

## 19. Correct Answer Requirements

When the player answers correctly, the game must:

- Update the player's current reward.
- Play the correct sound.
- Show the correct animation or GIF.
- Display a correct message.
- Update the reward ladder.
- Move to the next question.

If there are no more questions, the game must end as a win.

Optional:

Use a short delay before showing the next question so the animation can be seen.

## 20. Wrong Answer Requirements

When the player answers wrongly, the game must:

- Play the wrong sound.
- Show the wrong animation or GIF.
- Display a wrong/game-over message.
- Display the player's final winnings.
- End the game.
- Show the restart button.

The game must not continue to the next question after a wrong answer.

## 21. Winning Requirements

The player wins only when all selected questions are answered correctly.

When the player wins, the game must:

- Play the victory sound.
- Show the victory animation or GIF.
- Display a winning message.
- Display the final reward.
- Show the restart button.
- Stop answer selection.

## 22. Reward Ladder Requirements

The reward ladder must:

- Be visible during the game.
- Show all reward levels.
- Highlight the current reward level.
- Update after each correct answer.
- Be readable on desktop and mobile.

The reward ladder can be displayed visually from highest to lowest.

Internally, the rewards array should still go from smallest to largest.

## 23. Result Message Requirements

Examples:

Correct answer:

```text
Correct! Your legacy grows. Current winnings: ₦20,000
```

Wrong answer:

```text
Wrong! Game over. You leave with ₦20,000
```

Winning:

```text
You conquered The Riddler's Legacy! Final winnings: ₦1 Trillion
```

## 24. Animation/GIF Requirements

GIFs should appear in:

```text
assets/images/
```

Recommended files:

```text
correct.gif
wrong.gif
win.gif
```

The animation box should show:

- Correct GIF after a correct answer
- Wrong GIF after a wrong answer
- Win GIF after the player wins

If a GIF is missing, the game should still display text feedback.

## 25. Audio Requirements

Sounds should appear in:

```text
assets/audio/
```

Recommended files:

```text
correct.mp3
wrong.mp3
win.mp3
```

The game should play:

- `correct.mp3` after a correct answer
- `wrong.mp3` after a wrong answer
- `win.mp3` when the player wins

Most browsers do not allow audio to play before user interaction, so sounds should only play after a click.

## 26. Restart Requirements

After the game ends, the restart button must appear.

When clicked, it must:

- Clear the result message.
- Clear the animation box.
- Reset `currentQuestionIndex`.
- Reset `currentReward`.
- Set `gameOver` to `false`.
- Select new random questions.
- Display the first question again.
- Update the reward ladder.

## 27. Error and Edge Case Requirements

The game should avoid common bugs.

Important edge cases:

- Each difficulty pool should contain at least 7 questions.
- If an audio or GIF file is missing, the game should not completely break.
- The player should not be able to click multiple answers for the same question.
- The answer text must match one of the options exactly.
- The number of rewards should match the number of selected questions.

## 28. Non-Goals for Version 1

Version 1 should not include:

- Lifelines
- Timer
- Login system
- Backend/database
- Online multiplayer
- Scoreboard
- User accounts
- Payment system
- Frameworks
- CSS Grid
- Complex animations
- API calls

## 29. Future Features

After version 1 works, add:

- 50:50 lifeline
- Hint lifeline
- Skip question lifeline
- Ask the audience lifeline
- Countdown timer
- Start screen
- Rules screen
- Sound toggle
- High score using localStorage
- Better transitions and animations

## 30. Class Defense Explanation

Use this explanation:

> The Riddler's Legacy is a riddle quiz game inspired by Who Wants to Be a Millionaire. It uses HTML for structure, CSS for visual design, and JavaScript for game logic. The riddles are grouped into easy, medium, hard, and extreme difficulty levels. At the start of the game, JavaScript randomly selects questions from each difficulty pool, then arranges them from easy to extreme. The player climbs a reward ladder by answering correctly. A wrong answer ends the game and displays the player's final winnings. The layout uses Flexbox so the question area and reward ladder can appear side by side on large screens and stack on smaller screens. The visual design is a realistic modern quiz webpage with a subtle Riddler-inspired dark green theme.
