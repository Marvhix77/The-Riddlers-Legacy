const QUESTIONS_PER_LEVEL = 7;
const NEXT_QUESTION_DELAY = 1200;

const questionLabelElement = document.getElementById("questionLabel");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const animationBox = document.getElementById("animationBox");
const rewardList = document.getElementById("rewardList");
const restartButton = document.getElementById("restartButton");
const toggleRewardsButton = document.getElementById("toggleRewardsButton");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let currentReward = "₦0";
let gameOver = false;
let answerLocked = false;
let nextQuestionTimer = null;

// Starts a fresh game session.
function startGame() {
  clearNextQuestionTimer();

  currentQuestionIndex = 0;
  currentReward = "₦0";
  gameOver = false;
  answerLocked = false;

  selectedQuestions = selectRandomQuestions();

  resultElement.textContent = "";
  resultElement.className = "";
  hideAnimation();
  restartButton.style.display = "inline-block";

  if (selectedQuestions.length !== rewards.length) {
    endGame("error", "The number of selected questions must match the reward ladder.");
    return;
  }

  displayQuestion();
  updateRewardLadder();
}

// Selects seven questions from each difficulty, keeping the difficulty order.
function selectRandomQuestions() {
  const easyQuestions = getRandomItems(questions.easy, QUESTIONS_PER_LEVEL);
  const mediumQuestions = getRandomItems(questions.medium, QUESTIONS_PER_LEVEL);
  const hardQuestions = getRandomItems(questions.hard, QUESTIONS_PER_LEVEL);
  const extremeQuestions = getRandomItems(questions.extreme, QUESTIONS_PER_LEVEL);

  return [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
    ...extremeQuestions
  ];
}

// Returns a random copy of items without changing the original array.
function getRandomItems(array, number) {
  const shuffled = [...array].sort(function () {
    return Math.random() - 0.5;
  });

  return shuffled.slice(0, number);
}

// Displays the current question and creates four answer buttons.
function displayQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const difficulty = getDifficultyName(currentQuestionIndex);

  answerLocked = false;
  questionLabelElement.textContent = `Question ${currentQuestionIndex + 1} / ${selectedQuestions.length} - ${difficulty} Level`;
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  resultElement.textContent = `Current winnings: ${currentReward}`;
  resultElement.className = "";
  hideAnimation();

  currentQuestion.options.forEach(function (option, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", function () {
      checkAnswer(option, button);
    });

    optionsElement.appendChild(button);
  });
}

// Checks the clicked option against the correct answer.
function checkAnswer(selectedOption, selectedButton) {
  if (gameOver || answerLocked) {
    return;
  }

  answerLocked = true;
  disableAnswerButtons();

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    selectedButton.classList.add("correct-answer");
    handleCorrectAnswer();
  } else {
    selectedButton.classList.add("wrong-answer");
    markCorrectAnswer(currentQuestion.answer);
    handleWrongAnswer();
  }
}

// Handles a correct answer, then moves to the next question after a short delay.
function handleCorrectAnswer() {
  currentReward = rewards[currentQuestionIndex];
  resultElement.textContent = `Correct! Your legacy grows. Current winnings: ${currentReward}`;
  resultElement.className = "result-correct";

  playSound("correct");
  showAnimation("correct");
  updateRewardLadder();

  currentQuestionIndex++;

  if (currentQuestionIndex === selectedQuestions.length) {
    nextQuestionTimer = setTimeout(function () {
      endGame("won");
    }, NEXT_QUESTION_DELAY);
  } else {
    nextQuestionTimer = setTimeout(function () {
      displayQuestion();
      updateRewardLadder();
    }, NEXT_QUESTION_DELAY);
  }
}

// Handles a wrong answer and ends the game.
function handleWrongAnswer() {
  playSound("wrong");
  showAnimation("wrong");
  endGame("lost");
}

// Builds the reward ladder, showing the highest reward at the top.
function updateRewardLadder() {
  rewardList.innerHTML = "";

  for (let index = rewards.length - 1; index >= 0; index--) {
    const rewardItem = document.createElement("li");
    const questionNumber = document.createElement("span");
    const rewardAmount = document.createElement("span");

    questionNumber.textContent = index + 1;
    rewardAmount.textContent = rewards[index];

    rewardItem.appendChild(questionNumber);
    rewardItem.appendChild(rewardAmount);

    if (index === getActiveRewardIndex()) {
      rewardItem.classList.add("active-reward");
    }

    rewardList.appendChild(rewardItem);
  }
}

// Plays a sound if the browser can load it.
function playSound(type) {
  const soundPaths = {
    correct: "assets/audio/correct.mp3",
    wrong: "assets/audio/wrong.mp3",
    win: "assets/audio/win.mp3"
  };

  const audio = new Audio(soundPaths[type]);

  audio.play().catch(function () {
    // Missing files or browser audio limits should not stop the game.
  });
}

// Shows a GIF if available, otherwise leaves readable text feedback.
function showAnimation(type) {
  const animationData = {
    correct: {
      src: "assets/images/correct.gif",
      alt: "Correct answer animation",
      fallback: "Correct answer!"
    },
    wrong: {
      src: "assets/images/wrong.gif",
      alt: "Wrong answer animation",
      fallback: "Wrong answer. Game over."
    },
    win: {
      src: "assets/images/win.gif",
      alt: "Victory animation",
      fallback: "Victory! You conquered the legacy."
    }
  };

  const data = animationData[type];
  const feedbackCard = document.createElement("div");
  const image = document.createElement("img");
  const message = document.createElement("p");

  animationBox.innerHTML = "";
  animationBox.classList.add("show-feedback");
  feedbackCard.classList.add("feedback-card");
  image.src = data.src;
  image.alt = data.alt;
  image.onerror = function () {
    image.remove();
  };
  message.textContent = data.fallback;

  feedbackCard.appendChild(image);
  feedbackCard.appendChild(message);
  animationBox.appendChild(feedbackCard);
}

// Ends the game and displays the final message.
function endGame(status, customMessage) {
  gameOver = true;
  answerLocked = true;
  disableAnswerButtons();
  restartButton.style.display = "inline-block";

  if (status === "won") {
    currentReward = rewards[rewards.length - 1];
    playSound("win");
    showAnimation("win");
    resultElement.textContent = `You conquered The Riddler's Legacy! Final winnings: ${currentReward}`;
    resultElement.className = "result-win";
  } else if (status === "error") {
    resultElement.textContent = customMessage;
    resultElement.className = "result-wrong";
  } else {
    resultElement.textContent = `Wrong! Game over. You leave with ${currentReward}`;
    resultElement.className = "result-wrong";
  }
}

// Clears the old game and starts again with new random questions.
function restartGame() {
  clearNextQuestionTimer();
  resultElement.textContent = "";
  hideAnimation();
  startGame();
}

function clearNextQuestionTimer() {
  if (nextQuestionTimer) {
    clearTimeout(nextQuestionTimer);
    nextQuestionTimer = null;
  }
}

function getDifficultyName(index) {
  if (index < 7) {
    return "Easy";
  }

  if (index < 14) {
    return "Medium";
  }

  if (index < 21) {
    return "Hard";
  }

  return "Extreme";
}

function getActiveRewardIndex() {
  if (currentReward === "₦0") {
    return 0;
  }

  return Math.min(currentQuestionIndex - 1, rewards.length - 1);
}

function disableAnswerButtons() {
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.disabled = true;
  });
}

function markCorrectAnswer(correctAnswer) {
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach(function (button) {
    if (button.textContent.includes(correctAnswer)) {
      button.classList.add("correct-answer");
    }
  });
}

function hideAnimation() {
  animationBox.innerHTML = "";
  animationBox.classList.remove("show-feedback");
}

function toggleRewardLadder() {
  const rewardSection = rewardList.closest(".reward-section");
  const isCollapsed = rewardSection.classList.toggle("is-collapsed");

  toggleRewardsButton.textContent = isCollapsed ? "Show" : "Hide";
}

restartButton.addEventListener("click", restartGame);
toggleRewardsButton.addEventListener("click", toggleRewardLadder);
startGame();
