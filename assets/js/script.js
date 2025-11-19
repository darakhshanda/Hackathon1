// Quiz data and logic for a Kahoot-style 5-question layout.
// No color styles added; only structure, behavior and minimal visual cues.

const questions = [
 
  {
    "text": "What does Ambitious mean",
    "options": [
      "To be very old",
      "Having a strong desire to achieve success",
      "To leave quickly",
      "Hopeful and confident about the future"
    ],
    "answer": 1
  },
  {
    "text": "What does Benevolent mean",
    "options": [
      "Kind and generous",
      "Very cheerful",
      "Expressed clearly, easy to understand",
      "Strong and healthy"
    ],
    "answer": 0
  },
  {
    "text": "What does Candid mean",
    "options": [
      "Honest and open",
      "Hopeful",
      "Cheerful and friendly",
      "Old-fashioned"
    ],
    "answer": 0
  },
  {
    "text": "What does Diligent mean",
    "options": [
      "New or unusual",
      "Very small",
      "Showing careful and persistent effort",
      "Eager or enthusiastic"
    ],
    "answer": 2
  },
  {
    "text": "What does Efficient mean",
    "options": [
      "Careful with money",
      "Working in a well-organized and productive way",
      "Kind and generous",
      "Expressed clearly"
    ],
    "answer": 1
  },
  {
    "text": "What does Frugal mean",
    "options": [
      "Careful with money, avoiding waste",
      "Very confused or puzzled",
      "To abandon something",
      "Cheerful and friendly"
    ],
    "answer": 0
  },
  {
    "text": "What does Genuine mean",
    "options": [
      "Real and sincere, not fake",
      "Strong and healthy",
      "Showing attention to detail",
      "Acting with care"
    ],
    "answer": 0
  },
  {
    "text": "What does Hospitable mean",
    "options": [
      "Friendly and welcoming to guests",
      "Next to something",
      "Eager or enthusiastic",
      "Honest and open"
    ],
    "answer": 0
  },
  {
    "text": "What does Impartial mean",
    "options": [
      "Treating all rivals or disputants equally",
      "Kind and generous",
      "Cheerful and friendly",
      "Difficult and tiring"
    ],
    "answer": 0
  },
  {
    "text": "What does Jovial mean",
    "options": [
      "Showing careful effort",
      "Cheerful and friendly",
      "Careful with money",
      "Calm and peaceful"
    ],
    "answer": 1
  },
  {
    "text": "What does Keen mean",
    "options": [
      "Eager or enthusiastic",
      "Strong and healthy",
      "New or unusual",
      "Expressed clearly"
    ],
    "answer": 0
  },
  {
    "text": "What does Lucid mean",
    "options": [
      "Expressed clearly, easy to understand",
      "Kind and generous",
      "Very confused",
      "Acting with care"
    ],
    "answer": 0
  },
  {
    "text": "What does Meticulous mean",
    "options": [
      "Showing attention to detail",
      "Friendly and welcoming",
      "Strong and healthy",
      "Cheerful and friendly"
    ],
    "answer": 0
  },
  {
    "text": "What does Novel mean",
    "options": [
      "New or unusual in an interesting way",
      "Strong and healthy",
      "Careful with money",
      "Expressed clearly"
    ],
    "answer": 0
  },
  {
    "text": "What does Optimistic mean",
    "options": [
      "Hopeful and confident about the future",
      "Kind and generous",
      "Honest and open",
      "Friendly and welcoming"
    ],
    "answer": 0
  },
  {
    "text": "What does Prudent mean",
    "options": [
      "Acting with care and thought for the future",
      "Cheerful and friendly",
      "Very confused",
      "Strong and healthy"
    ],
    "answer": 0
  },
  {
    "text": "What does Quaint mean",
    "options": [
      "Attractively unusual or old-fashioned",
      "Very small",
      "Acting with care",
      "Kind and generous"
    ],
    "answer": 0
  },
  {
    "text": "What does Robust mean",
    "options": [
      "Strong and healthy",
      "New or unusual",
      "Eager or enthusiastic",
      "Very confused"
    ],
    "answer": 0
  },
  {
    "text": "What does Serene mean",
    "options": [
      "Calm, peaceful, and untroubled",
      "Expressed clearly",
      "Kind and generous",
      "Strong and healthy"
    ],
    "answer": 0
  },
  {
    "text": "What does Tenacious mean",
    "options": [
      "Tending to keep a firm hold of something",
      "Friendly and welcoming",
      "Cheerful and friendly",
      "Working in a productive way"
    ],
    "answer": 0
  },
   {
    text: "What does abandon mean?",
    options: [
      "To finish something quickly",
      "To leave something or someone behind permanently",
      "To repair something old",
      "To make new friends"
    ],
    answer: 1
  },
  {
    text: "What does abbreviate mean?",
    options: [
      "To make bigger",
      "To shorten a word or phrase",
      "To explain in detail",
      "To argue with someone"
    ],
    answer: 1
  },
  {
    text: "What does abduct mean?",
    options: [
      "To take someone away illegally",
      "To clean something gently",
      "To give someone a gift",
      "To try something new"
    ],
    answer: 0
  },
  {
    text: "What does abrasive mean?",
    options: [
      "Soft and smooth in manner",
      "Rough or harsh in manner or texture",
      "Full of color",
      "Calm and relaxed"
    ],
    answer: 1
  },
  {
    text: "What does abundant mean?",
    options: [
      "Not enough of something",
      "Present in great quantity, more than enough",
      "Very old and broken",
      "Full of mystery"
    ],
    answer: 1
  },
  {
    text: "What does accessible mean?",
    options: [
      "Able to be reached or entered easily",
      "Difficult to find",
      "Very large",
      "Not useful"
    ],
    answer: 0
  },
  {
    text: "What does accommodate mean?",
    options: [
      "To provide space or meet needs",
      "To forget about something",
      "To draw a picture",
      "To read a book"
    ],
    answer: 0
  },
  {
    text: "What does accompany mean?",
    options: [
      "To run rapidly",
      "To go somewhere with another person",
      "To sleep deeply",
      "To eat a lot"
    ],
    answer: 1
  },
  {
    text: "What does accomplish mean?",
    options: [
      "To lose something important",
      "To succeed in doing something",
      "To buy a new car",
      "To teach a class"
    ],
    answer: 1
  },
  {
    text: "What does accurate mean?",
    options: [
      "Full of mistakes",
      "Very slow",
      "Free from error, correct",
      "Easy to break"
    ],
    answer: 2
  },
];

// `questions` is the full bank. `quizQuestions` is the current randomized subset for a run.
let quizQuestions = [];
let total = 0;
let current = 0;
// store selected option index for each question, null if none
let selected = [];
// DOM elements
const questionEl = document.getElementById("question");
// progress display
const progressEl = document.getElementById("progress");
// container for option buttons
const optionsContainer = document.querySelector(".options");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const metaEl = document.getElementById("meta");
// quiz main container for accessibility
const quizMain = document.getElementById("quiz");


// --- Helpers for picking and shuffling questions/options ---
// Fisher-Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle options for a question while preserving which option is correct
function shuffleQuestionOptions(question) {
  const opts = question.options.map((text, idx) => ({ text, originalIndex: idx }));
  shuffleArray(opts);
  const newOptions = opts.map((o) => o.text);
  const newAnswer = opts.findIndex((o) => o.originalIndex === question.answer);
  return { text: question.text, options: newOptions, answer: newAnswer };
}

// Pick `n` random questions from the bank and shuffle their options
function pickRandomQuestions(bank, n) {
  const cap = Math.min(n, bank.length);
  const copy = bank.slice();
  shuffleArray(copy);
  return copy.slice(0, cap).map((q) => shuffleQuestionOptions(q));
}

// Setup quiz state (without changing visibility) using the value from #questionsSelect or `count`
function setupQuiz(count) {
  const sel = document.getElementById("questionsSelect");
  const desired = Number(sel?.value) || count || 5;
  quizQuestions = pickRandomQuestions(questions, desired);
  total = quizQuestions.length;
  current = 0;
  selected = Array(total).fill(null);
}
// render current question to DOM
function renderQuestion() {
  const q = quizQuestions[current]; // current question object
  questionEl.textContent = q.text; // set question text
  progressEl.textContent = `Question ${current + 1} / ${total}`; // update progress

  // Accessibility: provide a descriptive label for the quiz container
  quizMain.setAttribute("aria-label", `Question ${current + 1}: ${q.text}`); // + question text

  // clear options
  optionsContainer.innerHTML = "";

  // create option buttons
  q.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "optionBtn";
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-pressed", String(selected[current] === idx));
    btn.dataset.index = idx;
    btn.tabIndex = 0;
    btn.textContent = optText;
    if (selected[current] === idx) btn.classList.add("selected");

    btn.addEventListener("click", () => {
      selectOption(idx);
    });

    btn.addEventListener("keydown", (e) => {
      // Enter or Space selects
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOption(idx);
      }
    });

    optionsContainer.appendChild(btn);
  });

  // update nav buttons
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
  metaEl.textContent =
    selected[current] === null ? "No answer selected" : `Selected: ${q.options[selected[current]]}`;
}

function selectOption(idx) {
  selected[current] = idx;

  // update option buttons' classes and aria-pressed
  const btns = optionsContainer.querySelectorAll(".optionBtn");
  btns.forEach((btn) => {
    const bi = Number(btn.dataset.index);
    if (bi === idx) {
      btn.classList.add("selected");
      btn.setAttribute("aria-pressed", "true");
    } else {
      btn.classList.remove("selected");
      btn.setAttribute("aria-pressed", "false");
    }
  });

  metaEl.textContent = `Selected: ${quizQuestions[current].options[idx]}`;
}

// Navigation handlers
prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});
//next button event listener for moving to the next question
nextBtn.addEventListener("click", () => {
  if (current < total - 1) {
    current++;
    renderQuestion();
  }
});

// Keyboard shortcuts:
// 1-4 to select options, ArrowLeft/ArrowRight to navigate, Enter to move next (when not focused on an option)
window.addEventListener("keydown", (e) => {
  // If focus is inside an input-like element, allow normal behavior
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  if (e.key >= "1" && e.key <= "4") { // Number keys 1-4 to select option
    const index = Number(e.key) - 1;
    // only select if option exists
    if (quizQuestions[current].options[index] !== undefined) {
      selectOption(index);
    }
  } else if (e.key === "ArrowLeft") {// Move left to select option 
    if (current > 0) {
      current--;
      renderQuestion();
      // move focus to the first option for convenience
      focusFirstOption();
    }
  } else if (e.key === "ArrowRight") {// Move right to select option
    if (current < total - 1) {
      current++;
      renderQuestion();
      focusFirstOption();
    }
  } else if (e.key === "Enter") {//
    const active = document.activeElement;
    if (!active || !active.classList.contains("optionBtn")) { // if not focused on an option
      // move to next question if possible
      if (current < total - 1) { // only if not last question
        current++;
        renderQuestion(); // render next question
        focusFirstOption(); // focus first option
      }
    }
  }
});
// focus the first option button
function focusFirstOption() {
  const first = optionsContainer.querySelector(".optionBtn");
  if (first) first.focus();
}

// Initial setup and render (prepare a preview of the first question without opening the quiz)
setupQuiz();
renderQuestion();

// --- UI wiring for showing/hiding quiz and showing results (JS-managed, no Bootstrap modal) ---
const quizWindow = document.getElementById("quizWindow");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitQuizBtn");
const retryBtn = document.getElementById("retryBtn");
const resultsSection = document.getElementById("resultsSection");
const scoreEl = document.getElementById("score");
const correctEl = document.getElementById("correctAnswers");
const wrongEl = document.getElementById("wrongAnswers");

// Show quiz window and hide results
function showQuiz() {
  if (resultsSection) resultsSection.classList.add("hidden");
  if (quizWindow) {
    quizWindow.classList.remove("hidden");
    quizWindow.setAttribute("aria-hidden", "false");
  }
  // reset state for a fresh attempt (pick new random subset and clear selections)
  setupQuiz();
  renderQuestion();
  focusFirstOption();
}

function hideQuiz() {
  if (quizWindow) {
    quizWindow.classList.add("hidden");
    quizWindow.setAttribute("aria-hidden", "true");
  }
}

function showResults() {
  if (resultsSection) {
    resultsSection.classList.remove("hidden");
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function computeResults() {
  let correct = 0;
  let wrong = 0;
  

  for (let i = 0; i < total; i++) {
    if (selected[i] === null) continue;
    if (quizQuestions[i].answer !== undefined && selected[i] === quizQuestions[i].answer) correct++;
    else wrong++;
  }
  const score = correct; // 1 point per correct answer
  if (scoreEl) scoreEl.textContent = `${score}/${total}`;
  if (correctEl) correctEl.textContent = ` ${correct}`;
  if (wrongEl) wrongEl.textContent = `${wrong}`;
  let unanswered = total - correct - wrong;
  
 
}
function showReview() {
  // Build a per-question detailed results view
  const detailed = document.getElementById("detailedResults");
  if (detailed) {
    detailed.innerHTML = "";
    quizQuestions.forEach((q, i) => {
      const item = document.createElement("div");
      item.className = "resultItem card p-2 mb-2";

      const qTitle = document.createElement("div");
      qTitle.className = "resultQuestion fw-semibold";
      qTitle.textContent = `${i + 1}. ${q.text}`;
      item.appendChild(qTitle);

      const optsWrap = document.createElement("div");
      optsWrap.className = "resultOptions d-grid";
      q.options.forEach((optText, oi) => {
        const opt = document.createElement("div");
        opt.className = "resultOption p-2";
        opt.textContent = optText;
        if (oi === q.answer) opt.classList.add("correct");
        if (selected[i] !== null && oi === selected[i] && selected[i] !== q.answer) opt.classList.add("wrongSelected");
        // label the user's choice
        if (selected[i] !== null && oi === selected[i]) {
          const badge = document.createElement("span");
          badge.className = "ms-2 small text-muted";
          badge.textContent = " (your choice)";
          opt.appendChild(badge);
        }
        optsWrap.appendChild(opt);
      });
      item.appendChild(optsWrap);
      detailed.appendChild(item);
    });
  }
}
function noReview(){
  const detailed = document.getElementById("detailedResults");
  detailed.innerHTML="";
}

if (startBtn) startBtn.addEventListener("click", showQuiz);
if (submitBtn)
  submitBtn.addEventListener("click", () => {
    computeResults();
    hideQuiz();
    showResults();
  });
 
if (reviewBtn) reviewBtn.addEventListener("click", showReview);
if (retryBtn) retryBtn.addEventListener("click", showQuiz);

// keep small keyboard nicety: Escape when quiz open closes it and shows results
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && quizWindow && !quizWindow.classList.contains("hidden")) {
    window.alert("Quiz not Submitted!");
    computeResults();
    hideQuiz();
    showResults();
   if (reviewBtn) reviewBtn.addEventListener("click", noReview);
   }
});