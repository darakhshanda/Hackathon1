
// `questions` is the full bank. `quizQuestions` is the current randomized subset for a run.

let questions = []; // placeholder for hard difficulty questions
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
let username = localStorage.getItem("username");
const usernameButton = document.getElementById("usernameButton");

// import question data from JSON file based on selected difficulty

async function getData() {
  try {
    const questionsBank = await fetch("./assets/json/questions.json");
    const data = await questionsBank.json();

    console.log(data);
    // safely read the difficulty control value (supports either id or querySelector)
    const diffEl = document.getElementById("difficultySelect") || document.querySelector("#difficultySelect");
    let difficulty = diffEl && diffEl.value ? diffEl.value.toString().toLowerCase() : "easy";

    // map to available banks (fall back to easy if unknown)
    if (difficulty === "easy") {
      questions = data["easy"] || [];
    } else if (difficulty === "medium") {
      questions = data["medium"] || [];
    } else if (difficulty === "hard") {
      questions = data["hard"] || [];
    } else {
      questions = data["easy"] || [];
    }

    console.log("Loaded questions for difficulty:", difficulty, "count:", questions.length);
  } catch (e) {
    console.log(e.message);
    
  }
}


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
  //change question bank based on difficulty selection
  let difficulty = document.getElementById("difficultySelect")?.value;
  // assume `questions` already populated by getData(); do not fetch here
  quizQuestions = pickRandomQuestions(questions, desired);
  total = quizQuestions.length;
  current = 0;
  selected = Array(total).fill(null);
}
// render current question to DOM
function renderQuestion() {
  const q = quizQuestions[current]; // current question object
  if (!q) {
    if (questionEl) questionEl.textContent = "No questions loaded";
    if (progressEl) progressEl.textContent = "";
    if (optionsContainer) optionsContainer.innerHTML = "";
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  if (questionEl) questionEl.textContent = q.text; // set question text
  if (progressEl) progressEl.textContent = `Question ${current + 1} / ${total}`; // update progress

  // Accessibility: provide a descriptive label for the quiz container
  if (quizMain) quizMain.setAttribute("aria-label", `Question ${current + 1}: ${q.text}`); // + question text

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
  if (metaEl) metaEl.textContent = selected[current] === null ? "No answer selected" : `Selected: ${q.options[selected[current]]}`;
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
(async function init() {
  await getData();
  setupQuiz();
  renderQuestion();
})();

// --- UI wiring for showing/hiding quiz and showing results (JS-managed, no Bootstrap modal) ---
const quizWindow = document.getElementById("quizWindow");
const startBtn = document.getElementById("startBtn");
const submitBtn = document.getElementById("submitQuizBtn");
const retryBtn = document.getElementById("retryBtn");
const reviewBtn = document.getElementById("reviewBtn");
const resultsSection = document.getElementById("resultsSection");
const scoreEl = document.getElementById("score");
const correctEl = document.getElementById("correctAnswers");
const wrongEl = document.getElementById("wrongAnswers");

// Show quiz window and hide results
async function showQuiz() {
  if (resultsSection) resultsSection.classList.add("hidden");
  if (quizWindow) {
    quizWindow.classList.remove("hidden");
    quizWindow.setAttribute("aria-hidden", "false");
  }
  if (localStorage.getItem("username") === null || localStorage.getItem("username") === "") {
    alert("Please enter a username before starting the quiz.");
    return;
  }
  // ensure we have the right bank for the selected difficulty
  await getData();
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
  if (scoreEl) scoreEl.textContent = `${localStorage.getItem("username")}'s score: ${score}/${total}`;
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

if (startBtn) startBtn.addEventListener("click", startWithUsername);
// Start the quiz once a valid username has been entered (button or Enter)
async function startWithUsername() {
  const usernameInputEl = document.getElementById("usernameInput");
  if (!usernameInputEl) return;
  const usernameInput = usernameInputEl.value.trim();
  if (!usernameInput) {
    alert("Please enter a username to start the game.");
    usernameInputEl.focus();
    return;
  }

  localStorage.setItem("username", usernameInput);
  usernameInputEl.value = "";

  // Begin quiz flow
  await showQuiz();
}

if (usernameButton) usernameButton.addEventListener("click", startWithUsername);
const usernameInputEl = document.getElementById("usernameInput");
if (usernameInputEl) {
  usernameInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      startWithUsername();
    }
  });
}
 
// If difficulty select exists, reload bank when user changes difficulty
const diffSelect = document.getElementById("difficultySelect");
if (diffSelect) {
  diffSelect.addEventListener("change", async () => {
    await getData();
    setupQuiz();
    renderQuestion();
  });
}


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
   reviewBtn.disabled = true;
   document.getElementById("detailedResults").innerHTML = "";
    computeResults();
    hideQuiz();
    showResults();
  
  }
});



// Word of the Day feature
const WOTD_API_KEY = 'YOUR_WORDNIK_KEY'; // replace safely
const WOTD_URL = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${WOTD_API_KEY}`;
const WOTD_STORAGE = 'wordOfTheDay_v1';

function todayIso() {
  const d = new Date();
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function renderWotd(item) {
  const wordEl = document.getElementById('wotd-word');
  const defEl = document.getElementById('wotd-def');
  const srcEl = document.getElementById('wotd-source');

  if (!wordEl || !defEl || !srcEl) return;

  if (!item) {
    wordEl.textContent = '—';
    defEl.textContent = 'Word not available right now.';
    srcEl.textContent = '';
    return;
  }

  wordEl.textContent = item.word || '—';
  defEl.textContent = item.definition || '';
  srcEl.textContent = item.source ? `Source: ${item.source}` : '';
}

async function fetchWotd() {
  // check cache
  try {
    const cached = JSON.parse(localStorage.getItem(WOTD_STORAGE) || 'null');
    const today = todayIso();
    if (cached && cached.date === today) {
      renderWotd(cached);
      return;
    }
  } catch (e) {
    // ignore parse errors
  }

  // fetch fresh
  try {
    const res = await fetch(WOTD_URL);
    if (!res.ok) throw new Error('Network response not OK');
    const data = await res.json();

    // Wordnik returns .word and .definitions (array)
    const definition = (data.definitions && data.definitions[0] && data.definitions[0].text) || data.note || '';
    const item = {
      date: todayIso(),
      word: data.word || '',
      definition: definition,
      source: 'Wordnik'
    };

    try {
      localStorage.setItem(WOTD_STORAGE, JSON.stringify(item));
    } catch (e) {
      // localStorage may fail in private mode; ignore
    }

    renderWotd(item);
  } catch (err) {
    // on error, try to show cached value (if any) else show friendly message
    try {
      const cached = JSON.parse(localStorage.getItem(WOTD_STORAGE) || 'null');
      if (cached) {
        renderWotd(cached);
        return;
      }
    } catch (e) {}
    renderWotd(null);
    console.error('WOTD fetch failed:', err);
  }
}

// call on load
document.addEventListener('DOMContentLoaded', () => {
  
  fetchWotd();
});

