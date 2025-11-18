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
