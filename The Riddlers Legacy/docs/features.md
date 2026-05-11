# The Riddler's Legacy — Features

This document lists the planned features for the project.

The features are divided into:

1. Core features
2. Important technical features
3. Future features

The core features should be built first.

---

## 1. Core Features

These are the main features required for the first working version of the game.

---

### 1. Game Title and Theme

The game should have the title:

```text
The Riddler's Legacy
```

The design should feel mysterious, dark, and Riddler-inspired.

---

### 2. Question Display

The game should display one riddle question at a time.

The question should be clear and easy to read.

---

### 3. Four Answer Options

Each question should have four possible answers.

The player should click one option to answer.

---

### 4. Answer Checking

The game should check whether the clicked option is correct or wrong.

If correct, the player moves forward.

If wrong, the game ends.

---

### 5. Difficulty-Based Question Pools

Questions should be grouped into four difficulty levels:

- Easy
- Medium
- Hard
- Extreme

The game should start from easy questions and progress toward extreme questions.

---

### 6. Random Question Selection

The game should randomly select questions from each difficulty pool.

This makes each playthrough feel different.

The game should avoid repeating the same question in one playthrough.

---

### 7. Reward Ladder

The reward ladder should be visible while the game is being played.

The player should be able to see:

- Current reward
- Next rewards
- Final reward

---

### 8. Active Reward Highlight

The current reward level should be highlighted.

This helps the player understand their progress.

---

### 9. Correct Answer Sound

When the player answers correctly, a correct sound should play.

Example asset path:

```text
assets/audio/correct.mp3
```

---

### 10. Wrong Answer Sound

When the player answers wrongly, a wrong sound should play.

Example asset path:

```text
assets/audio/wrong.mp3
```

---

### 11. Victory Sound

When the player wins the game, a victory sound should play.

Example asset path:

```text
assets/audio/win.mp3
```

---

### 12. Correct Answer Animation or GIF

When the player answers correctly, a correct animation or GIF should appear.

Example asset path:

```text
assets/images/correct.gif
```

---

### 13. Wrong Answer Animation or GIF

When the player answers wrongly, a wrong animation or GIF should appear.

Example asset path:

```text
assets/images/wrong.gif
```

---

### 14. Victory Animation or GIF

When the player wins the game, a victory animation or GIF should appear.

Example asset path:

```text
assets/images/win.gif
```

---

### 15. Final Winnings Display

When the game ends, the player's final winnings should be displayed clearly.

Example:

```text
Game over! You leave with ₦100,000.
```

or

```text
You conquered The Riddler's Legacy! Final winnings: ₦1 Trillion.
```

---

### 16. Restart Button

After the game ends, a restart button should appear.

The restart button should:

- Clear the old result
- Clear the old animation
- Reset the reward
- Select new random questions
- Start the game again

---

## 2. Important Technical Features

These features make the project cleaner and easier to maintain.

---

### 1. Separate Data from Logic

Questions should be stored in:

```text
data/questions.js
```

Rewards should be stored in:

```text
data/rewards.js
```

Main game logic should be stored in:

```text
script.js
```

This makes the project easier to understand.

---

### 2. Beginner-Friendly JavaScript

The code should use basic JavaScript concepts such as:

- Variables
- Arrays
- Objects
- Functions
- If statements
- Loops
- DOM manipulation
- Event listeners

The code should avoid unnecessary complexity.

---

### 3. Clear Function Names

Function names should clearly explain what each function does.

Recommended functions:

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

---

### 4. Comments in Code

The JavaScript should include comments so the project is easier to explain during presentation.

Example:

```js
// This function displays the current question and its answer options.
function displayQuestion() {
  // code goes here
}
```

---

### 5. Matching HTML IDs and JavaScript Selectors

Every ID used in JavaScript must exist in the HTML.

Example:

```js
const questionElement = document.getElementById("question");
```

The HTML must contain:

```html
<p id="question"></p>
```

---

### 6. Asset Paths Must Be Correct

If JavaScript uses this path:

```js
assets/images/correct.gif
```

Then the actual file must be inside:

```text
assets/images/
```

and must be named:

```text
correct.gif
```

---

### 7. Disable Buttons After Game Ends

When the game ends, the player should not be able to keep clicking answer buttons.

This prevents bugs.

---

### 8. Optional Delay Before Next Question

After a correct answer, it may be useful to wait briefly before showing the next question.

This allows the player to see the correct animation.

Example:

```js
setTimeout(function () {
  displayQuestion();
}, 1000);
```

---

## 3. Future Features

These should only be added after the core game is working properly.

---

### 1. 50:50 Lifeline

This lifeline removes two wrong answers from the options.

---

### 2. Hint Lifeline

This lifeline gives the player a clue about the answer.

---

### 3. Skip Question Lifeline

This lifeline allows the player to skip one question.

---

### 4. Ask the Audience Lifeline

This lifeline displays fake audience vote percentages.

Example:

```text
A: 60%
B: 20%
C: 10%
D: 10%
```

---

### 5. Timer

A countdown timer can be added for each question.

If the timer reaches zero, the game ends.

---

### 6. Start Screen

The game can begin with a start screen.

The start screen can include:

- Game title
- Short rules
- Start button

---

### 7. Rules Screen

A separate rules screen can explain how to play.

---

### 8. High Score Storage

Use `localStorage` to save the player's best winnings.

---

### 9. Sound Toggle

Allow the player to turn sound on or off.

---

### 10. Mobile Improvements

Improve the layout for small screens.

Make sure:

- Buttons are easy to tap
- Text is readable
- Reward ladder does not take too much space

---

## 4. Minimum Version Required

The first completed version should include:

- Game title
- Riddle questions
- Four answer options
- Random questions
- Difficulty progression
- Reward ladder
- Correct/wrong checking
- Sound feedback
- GIF/animation feedback
- Final winnings display
- Restart button

Lifelines should come later.

---

## 5. Recommended Build Order

Build the game in this order:

```text
1. HTML layout
2. Basic CSS styling
3. Basic question display
4. Answer buttons
5. Answer checking
6. Move to next question
7. Reward ladder
8. Random question selection
9. Difficulty pools
10. Sounds
11. GIFs/animations
12. Game over screen
13. Restart button
14. Future lifelines
```

---

## 6. Presentation Explanation

Use this during defense:

> The main features of my project are a riddle question system, four answer options, difficulty progression, random question selection, a reward ladder, sound feedback, animation feedback, and a restart system. The project uses HTML for structure, CSS for styling, and JavaScript for logic. The game data is separated from the game logic so the code is easier to understand and maintain.
