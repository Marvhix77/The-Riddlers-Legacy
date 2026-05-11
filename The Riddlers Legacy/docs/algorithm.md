# The Riddler's Legacy — Game Algorithm

This document explains the internal logic of **The Riddler's Legacy**.

The purpose of this file is to help the developer, Codex, or anyone reviewing the project understand how the game works step by step.

---

## 1. Main Idea

The game is a riddle-based quiz game inspired by **Who Wants to Be a Millionaire?**

The player answers riddle questions and climbs a reward ladder.

If the player answers correctly, they move to the next question and their reward increases.

If the player answers wrongly, the game ends and their final winnings are displayed.

If the player answers all questions correctly, they win the final reward.

---

## 2. Game Data

The game needs two major sets of data:

1. Questions
2. Rewards

The questions are grouped by difficulty:

```js
const questions = {
  easy: [],
  medium: [],
  hard: [],
  extreme: []
};
```

Each question is an object:

```js
{
  question: "What has keys but can't open locks?",
  options: ["A piano", "A map", "A clock", "A door"],
  answer: "A piano"
}
```

The rewards are stored in an array:

```js
const rewards = [
  "₦1,000",
  "₦2,000",
  "₦5,000"
];
```

The reward array should move from the smallest amount to the largest amount.

---

## 3. Important Game Variables

The game should keep track of its current state using variables.

```js
let selectedQuestions = [];
let currentQuestionIndex = 0;
let currentReward = "₦0";
let gameOver = false;
```

### selectedQuestions

This stores the random questions selected for the current game session.

### currentQuestionIndex

This tracks the current question the player is answering.

If `currentQuestionIndex` is `0`, the player is on the first question.

### currentReward

This stores the player's current winnings.

At the beginning of the game, it should be:

```js
"₦0"
```

### gameOver

This checks whether the game is still active or has ended.

---

## 4. Difficulty Progression

The game should become harder as the player progresses.

Recommended structure:

```text
Questions 1 - 7: Easy
Questions 8 - 14: Medium
Questions 15 - 21: Hard
Questions 22 - 28: Extreme
```

Each difficulty pool should contain more than 7 questions if possible.

For example:

```text
easy: 20 questions
medium: 20 questions
hard: 20 questions
extreme: 20 questions
```

At the start of each game, only 7 questions are selected from each difficulty.

This means the game does not always repeat the exact same questions.

---

## 5. Main Functions

The JavaScript should be organized into functions.

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

## 6. startGame()

This function starts or resets the game.

It should:

1. Reset the current question index.
2. Reset the current reward.
3. Set `gameOver` to false.
4. Select random questions.
5. Display the first question.
6. Display or update the reward ladder.

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

## 7. selectRandomQuestions()

This function selects questions from each difficulty pool.

It should:

1. Pick 7 easy questions.
2. Pick 7 medium questions.
3. Pick 7 hard questions.
4. Pick 7 extreme questions.
5. Combine them into one array.

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

The order matters because the game should start easy and become harder.

---

## 8. getRandomItems()

This helper function randomly selects a number of items from an array.

Example:

```js
function getRandomItems(array, number) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, number);
}
```

The spread operator copies the array so the original question pool is not damaged.

---

## 9. displayQuestion()

This function displays the current question and answer options.

It should:

1. Get the current question using `currentQuestionIndex`.
2. Put the question text into the question area.
3. Clear the old answer buttons.
4. Create new buttons for each answer option.
5. Add a click event to each button.

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

## 10. checkAnswer()

This function checks if the player's selected answer is correct.

It should:

1. Get the current question.
2. Compare the selected option with the correct answer.
3. If correct, call `handleCorrectAnswer()`.
4. If wrong, call `handleWrongAnswer()`.

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

## 11. handleCorrectAnswer()

This function handles what happens when the player answers correctly.

It should:

1. Update the current reward.
2. Play the correct sound.
3. Show the correct animation or GIF.
4. Update the reward ladder.
5. Move to the next question.
6. Check if the player has completed all questions.

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

Optional improvement:

Use `setTimeout()` before showing the next question so the player can see the correct animation.

---

## 12. handleWrongAnswer()

This function handles what happens when the player answers wrongly.

It should:

1. Play the wrong sound.
2. Show the wrong animation or GIF.
3. End the game.

Example:

```js
function handleWrongAnswer() {
  playSound("wrong");
  showAnimation("wrong");

  endGame("lost");
}
```

---

## 13. updateRewardLadder()

This function displays the reward ladder and highlights the current reward level.

It should:

1. Clear the existing reward ladder.
2. Loop through the rewards.
3. Create a list item for each reward.
4. Highlight the current reward level.

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

The reward ladder can be displayed visually in reverse order so the biggest amount appears at the top.

---

## 14. playSound()

This function plays the correct sound depending on the game event.

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

Important note:

Most browsers only allow sound to play after the user has clicked or interacted with the page.

---

## 15. showAnimation()

This function displays a GIF or animation depending on the event.

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

## 16. endGame()

This function ends the game.

It should:

1. Set `gameOver` to true.
2. Display the player's final winnings.
3. Show the correct ending message.
4. Show the restart button.
5. Prevent more answers from being selected.

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

## 17. restartGame()

This function restarts the game.

It should:

1. Clear the result message.
2. Clear the animation box.
3. Hide the restart button.
4. Start the game again.

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

## 18. Full Algorithm

```text
1. Start the game.

2. Create question pools for easy, medium, hard, and extreme questions.

3. Randomly select 7 questions from each difficulty pool.

4. Combine all selected questions into one ordered list.

5. Set currentQuestionIndex to 0.

6. Set currentReward to ₦0.

7. Display the current question.

8. Display the answer options.

9. Display the reward ladder.

10. Wait for the player to click an answer.

11. Compare the selected answer with the correct answer.

12. If the answer is correct:
    a. Play the correct sound.
    b. Show the correct animation.
    c. Update the current reward.
    d. Update the reward ladder.
    e. Move to the next question.

13. If the player has answered all questions:
    a. Play the victory sound.
    b. Show the victory animation.
    c. Display the final winning amount.
    d. End the game.

14. If the answer is wrong:
    a. Play the wrong sound.
    b. Show the wrong animation.
    c. Display the final winnings.
    d. End the game.

15. If the player clicks restart:
    a. Clear the old game state.
    b. Select new random questions.
    c. Start again from the first question.
```

---

## 19. Important Logic Notes

### The game should not repeat questions in one playthrough

This is why questions are randomly selected from copied arrays.

### The game should become harder

This is why selected questions are combined in this order:

```js
easy → medium → hard → extreme
```

### The reward ladder should always be visible

The player should be able to see how far they have gone and what reward comes next.

### The game should stop after a wrong answer

Once the player answers wrongly, the game should end and not continue to the next question.

### The game should display final winnings

The player should know what amount they leave with.

---

## 20. Final Flow

```text
Start Game
    ↓
Select Random Questions
    ↓
Display Question
    ↓
Player Chooses Answer
    ↓
Check Answer
    ↓
Correct? 
    ↓ Yes                          ↓ No
Update Reward                   End Game
    ↓
Next Question
    ↓
All Questions Completed?
    ↓ Yes
Win Game
```
