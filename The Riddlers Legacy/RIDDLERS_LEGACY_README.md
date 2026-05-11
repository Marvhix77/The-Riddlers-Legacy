# The Riddler's Legacy

A browser-based riddle quiz game inspired by **Who Wants to Be a Millionaire?**, built with **HTML, CSS, and JavaScript**.

The player answers riddle questions, climbs a visible reward ladder, and receives sound/animation feedback for correct and wrong answers. Questions are selected randomly from difficulty-based pools so the game feels different on each replay.

---

## 1. Project Goal

The goal of this project is to build a simple but well-structured web game for a basic web development class.

The game should demonstrate:

- HTML structure
- CSS styling and layout
- JavaScript arrays and objects
- DOM manipulation
- Event listeners
- Conditional logic
- Random selection
- Game state management
- Audio playback
- GIF or animation display
- Restart/reset logic

---

## 2. Game Concept

The game is called:

## The Riddler's Legacy

The player is presented with riddle questions.

Each question has four possible answers.

If the player answers correctly:

- A correct sound plays
- A correct animation or GIF appears
- The reward ladder updates
- The player moves to the next question

If the player answers wrongly:

- A wrong sound plays
- A wrong animation or GIF appears
- The game ends
- The player's final winnings are displayed

If the player answers all questions correctly:

- A victory sound plays
- A victory animation or GIF appears
- The final winning amount is displayed
- The game ends successfully

---

## 3. Main Features

### Core Features

- Riddle-based question system
- Four answer options per question
- Random question selection
- Difficulty progression
- Visible reward ladder
- Current reward highlight
- Correct/wrong answer checking
- Sound feedback
- Animation/GIF feedback
- Final winnings display
- Restart game button

### Future Features

These should only be added after the main game works:

- 50:50 lifeline
- Hint lifeline
- Skip question lifeline
- Ask the audience lifeline
- Timer
- High score storage using localStorage
- Start screen
- Rules screen
- Difficulty selection mode

---

## 4. Recommended Folder Structure

Use this structure inside the project folder:

```text
riddlers-legacy/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
├── assets/
│   │
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
    └── future-features.md
```

---

## 5. File Responsibilities

### index.html

The HTML file should contain the visible structure of the game.

It should include:

- Game title
- Question area
- Answer buttons area
- Result message area
- Animation/GIF area
- Reward ladder area
- Restart button
- Audio elements or links to audio files
- Link to `style.css`
- Link to `script.js`

### style.css

The CSS file should control the look and feel of the game.

It should include:

- Dark Riddler-style theme
- Green glowing effects
- Responsive layout
- Button styling
- Question card styling
- Reward ladder styling
- Active reward highlight
- Correct/wrong visual states
- Animation area styling

### script.js

The JavaScript file should control the actual game logic.

It should handle:

- Question pools
- Random question selection
- Displaying questions
- Checking answers
- Updating rewards
- Playing sounds
- Showing animations/GIFs
- Ending the game
- Restarting the game

### docs/algorithm.md

This file should explain the game algorithm in plain English.

### docs/game-rules.md

This file should explain how the game works from the player's perspective.

### docs/future-features.md

This file should contain extra features to add later after the basic game is working.

---

## 6. Question Data Structure

Questions should be grouped by difficulty.

Use an object with four arrays:

```js
const questions = {
  easy: [],
  medium: [],
  hard: [],
  extreme: []
};
```

Each question should be an object.

Example:

```js
{
  question: "What has keys but can't open locks?",
  options: ["A piano", "A map", "A clock", "A door"],
  answer: "A piano"
}
```

Each question object should contain:

- `question`: the riddle text
- `options`: an array of four possible answers
- `answer`: the correct answer

---

## 7. Difficulty Progression

The game should progress from easy to extreme.

Suggested structure:

```text
Questions 1 - 7: Easy
Questions 8 - 14: Medium
Questions 15 - 21: Hard
Questions 22 - 28: Extreme
```

Each difficulty pool can contain more than 7 questions.

For example:

```text
easy pool: 20 questions
medium pool: 20 questions
hard pool: 20 questions
extreme pool: 20 questions
```

But each game session should randomly select only 7 questions from each pool.

This allows every replay to feel different.

---

## 8. Reward Ladder

Use a reward array from smallest to biggest.

Example:

```js
const rewards = [
  "₦1,000",
  "₦2,000",
  "₦5,000",
  "₦10,000",
  "₦20,000",
  "₦50,000",
  "₦100,000",
  "₦200,000",
  "₦500,000",
  "₦1,000,000",
  "₦2,000,000",
  "₦5,000,000",
  "₦10,000,000",
  "₦20,000,000",
  "₦50,000,000",
  "₦100,000,000",
  "₦200,000,000",
  "₦500,000,000",
  "₦1 Billion",
  "₦2 Billion",
  "₦5 Billion",
  "₦10 Billion",
  "₦20 Billion",
  "₦50 Billion",
  "₦100 Billion",
  "₦250 Billion",
  "₦500 Billion",
  "₦1 Trillion"
];
```

The current reward level should be highlighted as the player progresses.

The reward ladder can be displayed in reverse order visually so the highest amount appears at the top.

---

## 9. Main JavaScript Variables

The game should use variables to track state.

```js
let selectedQuestions = [];
let currentQuestionIndex = 0;
let currentReward = "₦0";
let gameOver = false;
```

### selectedQuestions

Stores the random questions selected for the current playthrough.

### currentQuestionIndex

Tracks the current question number.

### currentReward

Stores the current winnings of the player.

### gameOver

Tracks whether the game has ended.

---

## 10. Main JavaScript Functions

The game should be organized into functions.

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

## 11. Function Responsibilities

### startGame()

Starts or resets the game.

It should:

- Reset the question index
- Reset the current reward
- Set gameOver to false
- Select random questions
- Display the first question
- Display/update the reward ladder

Example:

```js
function startGame() {
  currentQuestionIndex = 0;
  currentReward = "₦0";
  gameOver = false;

  selectedQuestions = selectRandomQuestions();

  displayQuestion();
  updateRewardLadder();
}
```

---

### selectRandomQuestions()

Selects random questions from each difficulty pool.

It should:

- Pick 7 easy questions
- Pick 7 medium questions
- Pick 7 hard questions
- Pick 7 extreme questions
- Combine them into one array

Example:

```js
function selectRandomQuestions() {
  const easyQuestions = getRandomItems(questions.easy, 7);
  const mediumQuestions = getRandomItems(questions.medium, 7);
  const hardQuestions = getRandomItems(questions.hard, 7);
  const extremeQuestions = getRandomItems(questions.extreme, 7);

  return [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
    ...extremeQuestions
  ];
}
```

---

### getRandomItems()

Picks a specific number of random items from an array.

Example:

```js
function getRandomItems(array, number) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, number);
}
```

Important:

The spread operator `[...array]` copies the original array so that the main question pool is not permanently changed.

---

### displayQuestion()

Displays the current question and answer options.

It should:

- Get the current question
- Put the question text on the page
- Clear old answer buttons
- Create new answer buttons
- Add click events to the buttons

Example:

```js
function displayQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;

    button.addEventListener("click", function () {
      checkAnswer(option);
    });

    optionsElement.appendChild(button);
  });
}
```

---

### checkAnswer()

Checks whether the selected answer is correct.

Example:

```js
function checkAnswer(selectedOption) {
  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }
}
```

---

### handleCorrectAnswer()

Handles a correct answer.

It should:

- Update current reward
- Play correct sound
- Show correct animation
- Update reward ladder
- Move to next question
- Check if the game has been won

Example:

```js
function handleCorrectAnswer() {
  currentReward = rewards[currentQuestionIndex];

  playSound("correct");
  showAnimation("correct");

  updateRewardLadder();

  currentQuestionIndex++;

  if (currentQuestionIndex === selectedQuestions.length) {
    endGame("won");
  } else {
    displayQuestion();
  }
}
```

---

### handleWrongAnswer()

Handles a wrong answer.

It should:

- Play wrong sound
- Show wrong animation
- End the game

Example:

```js
function handleWrongAnswer() {
  playSound("wrong");
  showAnimation("wrong");

  endGame("lost");
}
```

---

### updateRewardLadder()

Displays the reward ladder and highlights the active reward.

Example:

```js
function updateRewardLadder() {
  rewardList.innerHTML = "";

  rewards.forEach((reward, index) => {
    const rewardItem = document.createElement("li");
    rewardItem.textContent = reward;

    if (index === currentQuestionIndex) {
      rewardItem.classList.add("active-reward");
    }

    rewardList.appendChild(rewardItem);
  });
}
```

Optional improvement:

Display the rewards in reverse order so the largest reward appears at the top.

---

### playSound()

Plays sound based on the event type.

Example:

```js
function playSound(type) {
  if (type === "correct") {
    correctSound.play();
  } else if (type === "wrong") {
    wrongSound.play();
  } else if (type === "win") {
    winSound.play();
  }
}
```

---

### showAnimation()

Displays the correct GIF or animation.

Example:

```js
function showAnimation(type) {
  if (type === "correct") {
    animationBox.innerHTML = `<img src="assets/images/correct.gif" alt="Correct animation">`;
  } else if (type === "wrong") {
    animationBox.innerHTML = `<img src="assets/images/wrong.gif" alt="Wrong animation">`;
  } else if (type === "win") {
    animationBox.innerHTML = `<img src="assets/images/win.gif" alt="Winning animation">`;
  }
}
```

---

### endGame()

Ends the game and displays final winnings.

Example:

```js
function endGame(status) {
  gameOver = true;

  if (status === "won") {
    playSound("win");
    showAnimation("win");
    resultElement.textContent = `You conquered The Riddler's Legacy! Final winnings: ${currentReward}`;
  } else {
    resultElement.textContent = `Game over! You leave with: ${currentReward}`;
  }

  restartButton.style.display = "block";
}
```

---

### restartGame()

Restarts the game.

Example:

```js
function restartGame() {
  resultElement.textContent = "";
  animationBox.innerHTML = "";
  restartButton.style.display = "none";

  startGame();
}
```

---

## 12. Full Game Algorithm

```text
1. Start the game.

2. Create question pools for each difficulty:
   easy, medium, hard, and extreme.

3. Randomly select 7 questions from each difficulty pool.

4. Combine the selected questions into one ordered question list:
   easy first, then medium, then hard, then extreme.

5. Set the current question number to 0.

6. Set the player's current reward to ₦0.

7. Display the first question and its four options.

8. Display the money reward ladder.

9. When the player clicks an answer:
   a. Get the selected answer.
   b. Compare it with the correct answer.

10. If the answer is correct:
    a. Play the correct sound.
    b. Show the correct animation.
    c. Update the player's current reward.
    d. Highlight the new reward level.
    e. Move to the next question.

11. If there are more questions:
    a. Display the next question.

12. If there are no more questions:
    a. Play the victory sound.
    b. Show the victory animation.
    c. Display the final winning amount.
    d. End the game.

13. If the answer is wrong:
    a. Play the wrong sound.
    b. Show the wrong animation.
    c. Display the player's final winnings.
    d. End the game.

14. When the game ends:
    a. Disable or remove the answer buttons.
    b. Show the restart button.

15. If the player clicks restart:
    a. Clear the old game state.
    b. Randomly select new questions.
    c. Start again from question 1.
```

---

## 13. Pseudocode

```text
START GAME

SET currentQuestionIndex = 0
SET currentReward = 0

SELECT 7 random easy questions
SELECT 7 random medium questions
SELECT 7 random hard questions
SELECT 7 random extreme questions

COMBINE all selected questions into selectedQuestions array

DISPLAY current question
DISPLAY answer options
DISPLAY reward ladder

WHEN player selects an answer:

    IF selected answer equals correct answer THEN
        PLAY correct sound
        SHOW correct animation
        UPDATE current reward
        MOVE to next question

        IF all questions are completed THEN
            PLAY victory sound
            SHOW victory animation
            DISPLAY final winnings
            END GAME
        ELSE
            DISPLAY next question
        END IF

    ELSE
        PLAY wrong sound
        SHOW wrong animation
        DISPLAY final winnings
        END GAME
    END IF

IF player clicks restart THEN
    RESET game
    START GAME again
END IF
```

---

## 14. Development Stages

Build the project in this order.

### Stage 1: Basic HTML Layout

Create:

- Title
- Question area
- Four answer buttons
- Result message area
- Reward ladder
- Restart button

Do not add sounds or animations yet.

---

### Stage 2: Basic Question Logic

Create a small question array first.

Example:

```js
const riddles = [
  {
    question: "What has keys but can't open locks?",
    options: ["A piano", "A map", "A clock", "A door"],
    answer: "A piano"
  }
];
```

Make the first question appear on the page.

---

### Stage 3: Answer Checking

Make the answer buttons work.

When the player clicks an answer:

- Check if it is correct
- Display "Correct" or "Wrong"

---

### Stage 4: Move to Next Question

After a correct answer:

- Increase `currentQuestionIndex`
- Display the next question

---

### Stage 5: Add Reward Ladder

Create the rewards array.

Then display the reward ladder on the page.

After each correct answer:

- Update current reward
- Highlight the active reward

---

### Stage 6: Add Difficulty Pools

Replace the single question array with:

```js
questions.easy
questions.medium
questions.hard
questions.extreme
```

Then randomly select questions from each difficulty.

---

### Stage 7: Add Sounds

Add audio files and connect them to JavaScript.

Use:

- Correct answer sound
- Wrong answer sound
- Win sound

---

### Stage 8: Add GIFs or Animations

Create an animation box.

Show different GIFs for:

- Correct answer
- Wrong answer
- Victory

---

### Stage 9: Add Restart Button

When the player loses or wins, show a restart button.

When clicked:

- Clear the old game state
- Pick new random questions
- Start again

---

### Stage 10: Add Lifelines Later

After the main game works, add:

- 50:50
- Ask the Audience
- Skip Question
- Hint

---

## 15. Presentation Explanation

Use this explanation when defending the project:

> My project is a riddle-based quiz game inspired by "Who Wants to Be a Millionaire?". The player answers riddles and climbs a reward ladder. The questions are grouped into easy, medium, hard, and extreme difficulty levels. At the start of each game, JavaScript randomly selects questions from each difficulty pool, so the game is not exactly the same every time.
>
> The game uses HTML for the structure, CSS for the visual design and Riddler theme, and JavaScript for the game logic. JavaScript controls the current question, checks answers, updates the reward ladder, plays sounds, shows animations, and ends or restarts the game.

---

## 16. Suggested Design Direction

The visual design should feel like a mysterious Riddler game.

Suggested style:

- Dark background
- Green neon accents
- Glowing answer buttons
- Card-style question box
- Money ladder on the side
- Highlighted active reward
- Subtle shadows
- Animated feedback for correct/wrong answers
- Responsive design for mobile and desktop

---

## 17. Important Notes for Codex

When building this project:

1. Build the core game first before lifelines.
2. Keep the code simple enough for a beginner web development class.
3. Use plain HTML, CSS, and JavaScript.
4. Do not use frameworks.
5. Keep functions small and easy to explain.
6. Use comments in the JavaScript file.
7. Make sure all DOM element IDs match between HTML and JavaScript.
8. Make the game work without needing a backend/server.
9. Use local files for sounds and GIFs.
10. Make sure the restart button resets the whole game.
11. Make sure question selection is random on every restart.
12. Avoid repeating questions in one playthrough.
13. Make the reward ladder visible throughout the game.
14. Display final winnings clearly when the game ends.

---

## 18. Possible Problems to Watch For

### Browser audio restrictions

Some browsers do not allow audio to play automatically before the user interacts with the page.

Solution:

Only play sounds after the player clicks an answer or starts the game.

### File path problems

Audio and image paths must match the actual folder structure.

For example:

```js
assets/audio/correct.mp3
assets/images/correct.gif
```

### Wrong DOM IDs

If JavaScript uses:

```js
document.getElementById("question")
```

Then the HTML must contain:

```html
<p id="question"></p>
```

### Random question shortage

If each difficulty needs 7 questions, each difficulty pool must contain at least 7 questions.

Better:

Each difficulty should contain more than 7 questions.

### Fast question switching

If the next question appears immediately after a correct answer, the player may not see the animation.

Solution:

Use a short delay with `setTimeout()` before showing the next question.

### Buttons still clickable after game ends

Disable answer buttons when the game ends.

### Question answer mismatch

Make sure the value inside `answer` exactly matches one of the options.

Example:

```js
answer: "A piano"
```

must match:

```js
options: ["A piano", "A map", "A clock", "A door"]
```

---

## 19. Recommended Extra Files for Better Codex Results

To help Codex build more efficiently, add these files:

### docs/algorithm.md

A plain English explanation of the game algorithm.

### docs/game-rules.md

Rules from the player's perspective.

### docs/design-style.md

The visual style guide for the game.

Include:

- Theme colors
- Font style
- Button style
- Reward ladder style
- Animation style

### docs/features.md

List of required features and future features.

### data/questions.js

Optional but useful.

Instead of keeping all questions inside `script.js`, store them in a separate file:

```text
data/questions.js
```

This keeps the code cleaner.

### data/rewards.js

Optional.

Store the reward ladder in a separate file:

```text
data/rewards.js
```

### assets/README.md

Explain what each asset is for.

Example:

```text
correct.mp3 = sound played when answer is correct
wrong.mp3 = sound played when answer is wrong
win.mp3 = sound played when player wins
```

---

## 20. Recommended Final Folder Structure

For a cleaner version, use this:

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
    ├── design-style.md
    ├── features.md
    └── future-features.md
```

---

## 21. Recommended Build Prompt for Codex

Use this prompt in VS Code with Codex:

```text
Read the README.md file carefully and build the project structure for The Riddler's Legacy.

Use plain HTML, CSS, and JavaScript only. Do not use any frameworks.

Create a working riddle quiz game inspired by Who Wants to Be a Millionaire.

The game should:
- Display riddle questions with four options
- Use easy, medium, hard, and extreme difficulty pools
- Randomly select 7 questions from each difficulty
- Progress from easy to extreme
- Display a visible reward ladder
- Highlight the current reward
- Play sounds for correct, wrong, and victory states
- Show GIF/animation feedback for correct, wrong, and victory states
- End the game when the player answers wrongly
- Display final winnings
- Allow the player to restart the game
- Keep the code beginner-friendly and well-commented

Build the core game first. Do not add lifelines yet.
```

---

## 22. Summary

The Riddler's Legacy should work like this:

```text
Question Pools
      ↓
Random Selection
      ↓
Selected Game Questions
      ↓
Display Question
      ↓
Player Chooses Answer
      ↓
Check Answer
      ↓
Correct? ---------------- No ----------------→ End Game
   ↓ Yes
Update Reward
   ↓
Next Question
   ↓
All Questions Done?
   ↓ Yes
Win Game
```

This is the core structure Codex should follow when building the project.
