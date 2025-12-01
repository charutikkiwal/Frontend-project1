const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const timerDisplay = document.getElementById("timer");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const detailedResults = document.getElementById("detailed-results");
const restartBtn = document.getElementById("restart-btn");


const questionBank = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks Text Module Language", "Home Tool Markup Language", "Hyperlinking Text Management Language"], correct: 0 },
  { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
  { question: "Which attribute is used to add an image in HTML?", options: ["href", "src", "link", "ref"], correct: 1 },
  { question: "Which tag is used for the largest heading?", options: ["<h1>", "<h6>", "<heading>", "<hl>"], correct: 0 },
  { question: "CSS stands for?", options: ["Color Style Sheet", "Cascading Style Sheets", "Creative Style System", "Coded Style Sheet"], correct: 1 },
  { question: "Which CSS property changes text color?", options: ["color", "text-color", "font-color", "background"], correct: 0 },
  { question: "Which CSS property is used to change font size?", options: ["text-size", "font-size", "size", "font-style"], correct: 1 },
  { question: "Which CSS property controls space inside an element?", options: ["padding", "margin", "spacing", "gap"], correct: 0 },
  { question: "Which CSS property controls space outside an element?", options: ["padding", "gap", "border", "margin"], correct: 3 },
  { question: "JavaScript is a ____ language.", options: ["Scripting", "Markup", "Design", "Styling"], correct: 0 },
  { question: "Which symbol starts a single-line comment in JavaScript?", options: ["#", "//", "/* */", "--"], correct: 1 },
  { question: "Which method prints output in the console?", options: ["write()", "console.log()", "print()", "show()"], correct: 1 },
  { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of these"], correct: 3 },
  { question: "Which operator checks strict equality?", options: ["==", "===", "=", "!"], correct: 1 },
  { question: "Which data type is NOT in JavaScript?", options: ["Boolean", "Undefined", "Float", "String"], correct: 2 },
  { question: "Arrays in JavaScript are written using:", options: ["{ }", "( )", "[ ]", "< >"], correct: 2 },
  { question: "Which method adds an element at the end of an array?", options: ["push()", "append()", "add()", "insert()"], correct: 0 },
  { question: "Which method removes the last element of an array?", options: ["pop()", "delete()", "remove()", "shift()"], correct: 0 },
  { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Manager", "Display Order Method", "Document Original Manipulation"], correct: 0 },
  { question: "Which HTML element is used to write JavaScript code?", options: ["<js>", "<javascript>", "<script>", "<code>"], correct: 2 },
  { question: "Which tag is used to create a table?", options: ["<table>", "<tab>", "<tbl>", "<sheet>"], correct: 0 },
  { question: "Which attribute opens a link in a new tab?", options: ["target='_blank'", "open='_new'", "newTab", "href='_new'"], correct: 0 },
  { question: "Which function converts a string to an integer?", options: ["toInt()", "parseInt()", "convert()", "stringToInt()"], correct: 1 },
  { question: "Which loop runs at least once?", options: ["for", "while", "do...while", "foreach"], correct: 2 },
  { question: "Which keyword stops a loop?", options: ["stop", "exit", "break", "quit"], correct: 2 },
  { question: "Which language is used to style webpages?", options: ["HTML", "CSS", "JavaScript", "Python"], correct: 1 },
  { question: "HTML comments are written as:", options: ["// comment //", "<!-- comment -->", "/* comment */", "# comment"], correct: 1 },
  { question: "JavaScript comments are written using:", options: ["<!-- -->", "//", "##", "::"], correct: 1 },
  { question: "Which method joins two arrays?", options: ["merge()", "concat()", "combine()", "append()"], correct: 1 },
  { question: "Which function rounds a number?", options: ["round()", "Math.round()", "Math.decimal()", "Math.num()"], correct: 1 },
  { question: "Which operator is used for assignment?", options: ["==", "=", "===", ":"], correct: 1 },
  { question: "Which HTML tag is used for an ordered list?", options: ["<ul>", "<ol>", "<list>", "<num>"], correct: 1 },
  { question: "Which tag is used to insert a line break?", options: ["<lb>", "<br>", "<break>", "<enter>"], correct: 1 },
  { question: "Which CSS property sets background color?", options: ["color", "bgcolor", "background-color", "background-style"], correct: 2 },
  { question: "Which of the following is a JavaScript framework?", options: ["React", "Django", "Laravel", "Flask"], correct: 0 },
  { question: "HTML is a ____ language.", options: ["Programming", "Markup", "Scripting", "Compiled"], correct: 1 },
  { question: "Which function returns the length of a string?", options: ["size()", "count()", "len()", "length"], correct: 3 },
  { question: "CSS width is given in:", options: ["px", "em", "rem", "All of these"], correct: 3 },
  { question: "JavaScript arrays start indexing from:", options: ["0", "1", "-1", "Any number"], correct: 0 },
  { question: "Which attribute is used to set an HTML element's identifier?", options: ["class", "style", "id", "ref"], correct: 2 },
  { question: "Which tag is used to embed a video?", options: ["<vid>", "<movie>", "<video>", "<media>"], correct: 2 },
  { question: "Which event fires when a button is clicked?", options: ["onpress", "onclick", "onhover", "onenter"], correct: 1 },
  { question: "Which protocol is used for websites?", options: ["FTP", "SMTP", "HTTP", "SSH"], correct: 2 },
  { question: "Which keyword declares a constant variable?", options: ["static", "fixed", "const", "define"], correct: 2 },
  { question: "Which CSS property makes text bold?", options: ["font-bold", "text-weight", "font-weight", "bold"], correct: 2 },
  { question: "Which HTML tag is used for forms?", options: ["<form>", "<input>", "<submit>", "<field>"], correct: 0 },
  { question: "Which method converts an object to JSON string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "toJSON()"], correct: 0 },
  { question: "JavaScript is used for:", options: ["Structure", "Styling", "Interactivity", "Database"], correct: 2 },
  { question: "Which attribute is used to apply CSS inline?", options: ["css", "style", "design", "font"], correct: 1 },
  { question: "Which tag displays a numbered list?", options: ["<ul>", "<ol>", "<li>", "<num>"], correct: 1 }
];


let quiz = {
  questions: [],
  current: 0,
  answers: [],
  timeLeft: 20*60,
  timer: null
};

startBtn.addEventListener("click", () => {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  initQuiz();
});

function initQuiz() {
  quiz.questions = [...questionBank].sort(()=>0.5-Math.random()).slice(0,15);
  quiz.current = 0;
  quiz.answers = new Array(15).fill(null);
  quiz.timeLeft = 20*60;
  totalQuestionsSpan.textContent = quiz.questions.length;
  maxScoreSpan.textContent = quiz.questions.length;
  showQuestion();
  startTimer();
  updateNavigation();
}

function showQuestion() {
  const q = quiz.questions[quiz.current];
  currentQuestionSpan.textContent = quiz.current+1;
  questionText.textContent = q.question;

  answersContainer.innerHTML = '';
  q.options.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className='answer-btn';
    if(quiz.answers[quiz.current]===i) btn.classList.add('selected');
    btn.addEventListener('click',()=>selectAnswer(i,btn));
    answersContainer.appendChild(btn);
  });
  updateNavigation();
}

function selectAnswer(index,btn){
  quiz.answers[quiz.current]=index;
  Array.from(answersContainer.children).forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

nextBtn.addEventListener('click',()=>{
  if(quiz.current<quiz.questions.length-1){
    quiz.current++;
    showQuestion();
  }
});

prevBtn.addEventListener('click',()=>{
  if(quiz.current>0){
    quiz.current--;
    showQuestion();
  }
});

function updateNavigation(){
  prevBtn.disabled = quiz.current===0;
  nextBtn.classList.toggle('d-none',quiz.current===quiz.questions.length-1);
  submitBtn.classList.toggle('d-none',quiz.current!==quiz.questions.length-1);
}

function startTimer(){
  updateTimerDisplay();
  quiz.timer = setInterval(()=>{
    quiz.timeLeft--;
    updateTimerDisplay();
    if(quiz.timeLeft<=0){
      clearInterval(quiz.timer);
      showResults();
    }
  },1000);
}

function updateTimerDisplay(){
  const min = Math.floor(quiz.timeLeft/60);
  const sec = quiz.timeLeft%60;
  timerDisplay.textContent = `${min}:${sec.toString().padStart(2,'0')}`;
}

submitBtn.addEventListener('click',showResults);

function showResults(){
  clearInterval(quiz.timer);
  quizScreen.classList.remove('active');
  resultScreen.classList.add('active');

  let score = 0;
  detailedResults.innerHTML = '';

  quiz.questions.forEach((q,i)=>{
    const user = quiz.answers[i];
    const correct = q.correct;
    if(user===correct) score++;

    const qDiv = document.createElement('div');
    qDiv.className='question-item';
    qDiv.innerHTML=`<h4>${i+1}. ${q.question}</h4>`;
    q.options.forEach((opt,j)=>{
      const span = document.createElement('span');
      span.className='option';
      if(j===correct) span.classList.add('correct');
      if(j===user && user!==correct) span.classList.add('incorrect');
      span.textContent = `${String.fromCharCode(65+j)}. ${opt}`;
      qDiv.appendChild(span);
    });
    detailedResults.appendChild(qDiv);
  });

  finalScoreSpan.textContent = score;
}

restartBtn.addEventListener('click',()=>{
  resultScreen.classList.remove('active');
  startScreen.classList.add('active');
});