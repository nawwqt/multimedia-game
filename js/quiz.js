// ============================================================
// Quiz Engine - Timer, Scoring, Answer Validation, Results
// ============================================================

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 30;
let answered = false;
const QUESTIONS_PER_QUIZ = 10;
const TIME_PER_QUESTION = 30;

// Shuffle array (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Start quiz
function startQuiz() {
  currentQuestions = shuffle(quizQuestions).slice(0, QUESTIONS_PER_QUIZ);
  currentIndex = 0;
  score = 0;
  answered = false;

  document.getElementById('quizStart').style.display = 'none';
  document.getElementById('quizResults').classList.remove('visible');
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizActive').style.display = 'block';

  updateScoreDisplay();
  loadQuestion();
}

// Load current question
function loadQuestion() {
  answered = false;
  const q = currentQuestions[currentIndex];

  document.getElementById('questionNumber').textContent =
    `Soal ${currentIndex + 1} dari ${QUESTIONS_PER_QUIZ}`;
  document.getElementById('questionText').textContent = q.question;
  document.getElementById('progressFill').style.width =
    `${((currentIndex) / QUESTIONS_PER_QUIZ) * 100}%`;

  // Render options
  const letters = ['A', 'B', 'C', 'D'];
  const container = document.getElementById('optionsContainer');
  container.innerHTML = q.options.map((opt, i) => `
    <div class="quiz-option" id="option-${i}" onclick="selectAnswer(${i})">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </div>
  `).join('');

  // Hide explanation
  const explanation = document.getElementById('explanationBox');
  explanation.classList.remove('visible');
  explanation.textContent = '';

  // Reset next button
  document.getElementById('btnNext').disabled = true;
  document.getElementById('quizInfo').textContent = 'Pilih jawaban untuk melanjutkan';

  // Update button text
  const btnNext = document.getElementById('btnNext');
  if (currentIndex === QUESTIONS_PER_QUIZ - 1) {
    btnNext.innerHTML = 'Lihat Hasil <i class="fas fa-trophy"></i>';
  } else {
    btnNext.innerHTML = 'Selanjutnya <i class="fas fa-arrow-right"></i>';
  }

  // Start timer
  startTimer();
}

// Timer
function startTimer() {
  clearInterval(timer);
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  document.getElementById('timerText').textContent = timeLeft;

  if (timeLeft <= 10) {
    display.classList.add('warning');
  } else {
    display.classList.remove('warning');
  }
}

function timeUp() {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentIndex];

  // Highlight correct answer
  document.getElementById(`option-${q.correct}`).classList.add('correct');

  // Disable all options
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.style.pointerEvents = 'none';
  });

  // Show explanation
  const explanation = document.getElementById('explanationBox');
  explanation.innerHTML = `<strong>⏰ Waktu habis!</strong> ${q.explanation}`;
  explanation.classList.add('visible');

  document.getElementById('btnNext').disabled = false;
  document.getElementById('quizInfo').innerHTML =
    '<span style="color: var(--danger);"><i class="fas fa-times-circle"></i> Waktu habis!</span>';
}

// Select answer
function selectAnswer(index) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const q = currentQuestions[currentIndex];
  const isCorrect = index === q.correct;

  // Mark selected
  const selectedEl = document.getElementById(`option-${index}`);

  if (isCorrect) {
    selectedEl.classList.add('correct');
    score++;
    document.getElementById('quizInfo').innerHTML =
      '<span style="color: var(--success);"><i class="fas fa-check-circle"></i> Benar!</span>';
  } else {
    selectedEl.classList.add('wrong');
    document.getElementById(`option-${q.correct}`).classList.add('correct');
    document.getElementById('quizInfo').innerHTML =
      '<span style="color: var(--danger);"><i class="fas fa-times-circle"></i> Salah!</span>';
  }

  // Disable all options
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.style.pointerEvents = 'none';
  });

  // Show explanation
  const explanation = document.getElementById('explanationBox');
  explanation.innerHTML = `<strong>${isCorrect ? '✅ Benar!' : '❌ Salah!'}</strong> ${q.explanation}`;
  explanation.classList.add('visible');

  // Enable next button
  document.getElementById('btnNext').disabled = false;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  document.getElementById('scoreDisplay').textContent = `Skor: ${score}`;
}

// Next question
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= QUESTIONS_PER_QUIZ) {
    showResults();
  } else {
    loadQuestion();
  }
}

// Show results
function showResults() {
  clearInterval(timer);

  document.getElementById('quizActive').style.display = 'none';
  const results = document.getElementById('quizResults');
  results.style.display = 'block';
  results.classList.add('visible');

  document.getElementById('resultScore').textContent = score;
  document.getElementById('resultTotal').textContent = `/ ${QUESTIONS_PER_QUIZ}`;

  const percentage = (score / QUESTIONS_PER_QUIZ) * 100;
  let grade, message;

  if (percentage >= 90) {
    grade = '🏆 Luar Biasa!';
    message = 'Anda memiliki pemahaman yang sangat baik tentang hardware komputer!';
  } else if (percentage >= 70) {
    grade = '🌟 Hebat!';
    message = 'Pemahaman Anda tentang hardware komputer sudah cukup baik. Terus belajar!';
  } else if (percentage >= 50) {
    grade = '📚 Cukup Baik';
    message = 'Anda sudah cukup paham, tapi masih bisa ditingkatkan. Coba pelajari materi lagi!';
  } else {
    grade = '💪 Semangat!';
    message = 'Jangan menyerah! Pelajari kembali materi hardware dan coba quiz lagi.';
  }

  document.getElementById('resultGrade').textContent = grade;
  document.getElementById('resultMessage').textContent = message;

  // Update progress bar to full
  document.getElementById('progressFill').style.width = '100%';
}

// Restart quiz
function restartQuiz() {
  startQuiz();
}
