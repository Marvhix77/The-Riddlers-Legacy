# The Riddler's Legacy — Game Rules

This document explains how the game works from the player's point of view.

---

## 1. Game Title

The game is called:

# The Riddler's Legacy

It is a riddle-based quiz game where the player answers questions and climbs a reward ladder.

---

## 2. Objective

The objective of the game is to answer all riddle questions correctly and reach the highest reward.

The player starts with no winnings and increases their reward after every correct answer.

---

## 3. How to Play

1. The game displays a riddle question.
2. The player is given four answer options.
3. The player clicks the answer they believe is correct.
4. The game checks the answer.
5. If the answer is correct, the player moves to the next question.
6. If the answer is wrong, the game ends.
7. The player's final winnings are displayed at the end.

---

## 4. Answer Options

Each question has four options.

Example:

```text
Question: What has keys but can't open locks?

A. A piano
B. A map
C. A clock
D. A door
```

Only one option is correct.

---

## 5. Difficulty Levels

The game has four difficulty levels:

1. Easy
2. Medium
3. Hard
4. Extreme

The game starts with easy riddles and gradually becomes harder.

Recommended progression:

```text
Questions 1 - 7: Easy
Questions 8 - 14: Medium
Questions 15 - 21: Hard
Questions 22 - 28: Extreme
```

---

## 6. Rewards

The player climbs a reward ladder as they answer questions correctly.

Each correct answer increases the player's winnings.

The current reward should be highlighted on the reward ladder.

---

## 7. Correct Answer

When the player selects the correct answer:

- A correct sound plays.
- A correct animation or GIF appears.
- The reward ladder updates.
- The player moves to the next question.

Example message:

```text
Correct! You move to the next level.
```

---

## 8. Wrong Answer

When the player selects the wrong answer:

- A wrong sound plays.
- A wrong animation or GIF appears.
- The game ends.
- The player's final winnings are displayed.

Example message:

```text
Game over! You leave with ₦50,000.
```

---

## 9. Winning the Game

The player wins the game by answering all questions correctly.

When the player wins:

- A victory sound plays.
- A victory animation or GIF appears.
- The final winning amount is displayed.

Example message:

```text
You conquered The Riddler's Legacy! Final winnings: ₦1 Trillion.
```

---

## 10. Losing the Game

The player loses when they answer a question wrongly.

The game should not continue after a wrong answer.

The final winnings should be the last reward the player successfully reached.

---

## 11. Restarting the Game

After the game ends, a restart button should appear.

When the player clicks restart:

- The old game is cleared.
- New random questions are selected.
- The reward starts again from ₦0.
- The player begins from question 1.

---

## 12. Random Questions

The game should randomly select questions from each difficulty pool.

This means the same questions should not always appear in the same order whenever the player restarts.

This makes the game more replayable.

---

## 13. Player Feedback

The game should give the player clear feedback.

For correct answers:

```text
Correct!
```

For wrong answers:

```text
Wrong!
```

For winning:

```text
You won!
```

For losing:

```text
Game over!
```

The feedback should be supported with sounds and animations.

---

## 14. Game Ending Conditions

The game ends in two ways:

### 1. The player answers wrongly

The game ends immediately and final winnings are shown.

### 2. The player answers all questions correctly

The player wins the game and the final reward is shown.

---

## 15. Future Lifelines

Lifelines are not part of the first version of the game.

They can be added later.

Possible lifelines:

- 50:50
- Hint
- Skip question
- Ask the audience

The first version should focus on the main game logic only.

---

## 16. Simple Player Explanation

The player can understand the game like this:

```text
Answer riddles correctly to climb the money ladder.
One wrong answer ends the game.
Reach the final question and answer correctly to win the highest reward.
```

---

## 17. Defense Explanation

Use this explanation when presenting the game:

> The player answers riddle questions and climbs a reward ladder. Each question has four options. The game begins with easy questions and becomes harder as the player progresses. If the player answers correctly, the game updates the reward and moves to the next question. If the player answers wrongly, the game ends and displays the player's final winnings. The questions are randomly selected from difficulty pools, so each replay can feel different.
