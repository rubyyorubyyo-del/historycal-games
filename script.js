const quizData = [
    { question: "고조선의 건국 이념으로 '널리 인간을 이롭게 한다'는 뜻을 가진 말은?", options: ["홍익인간", "이도여치", "왕도정치", "경천애인"], answer: 0 },
    { question: "고구려가 수나라의 30만 대군을 물리친 전투는?", options: ["안시성 전투", "살수대첩", "황산벌 전투", "귀주대첩"], answer: 1 },
    { question: "신라의 삼국 통일에 큰 기여를 한 청소년 심신 수련 단체는?", options: ["서당", "화랑도", "국학", "경당"], answer: 1 },
    { question: "고구려 유민 대조영이 동모산에 도읍을 정하고 세운 나라는?", options: ["부여", "발해", "가야", "백제"], answer: 1 },
    { question: "후삼국을 통일하고 고려를 건국한 인물은?", options: ["궁예", "견훤", "왕건", "이성계"], answer: 2 },
    { question: "고려 시대, 부처의 힘으로 몽골의 침입을 물리치고자 만든 거대한 목판 인쇄물은?", options: ["직지심체요절", "팔만대장경", "왕오천축국전", "삼국유사"], answer: 1 },
    { question: "조선 시대, 훈민정음을 창제하여 백성들이 글을 쉽게 읽고 쓰게 한 왕은?", options: ["태조", "세종", "영조", "정조"], answer: 1 },
    { question: "임진왜란 중 이순신 장군이 학익진 전술로 일본 수군을 크게 무찌른 해전은?", options: ["명량 해전", "노량 해전", "한산도 대첩", "옥포 해전"], answer: 2 },
    { question: "조선 후기 실학자 정약용이 거중기를 이용하여 백성들의 수고를 덜며 쌓은 성은?", options: ["남한산성", "북한산성", "수원 화성", "한양 도성"], answer: 2 },
    { question: "조선 후기, 흥선대원군이 왕실의 위엄을 세우기 위해 무리하게 중건한 궁궐은?", options: ["창덕궁", "경복궁", "창경궁", "덕수궁"], answer: 1 },
    { question: "1894년, 전봉준을 중심으로 농민들이 부패한 관리와 외세에 맞서 일으킨 운동은?", options: ["갑신정변", "임술 농민 봉기", "동학 농민 운동", "3·1 운동"], answer: 2 },
    { question: "1919년 3월 1일, 일제의 식민 통치에 맞서 전국적으로 일어난 민족 해방 운동은?", options: ["6·10 만세 운동", "광주 학생 항일 운동", "3·1 운동", "물산 장려 운동"], answer: 2 },
    { question: "1920년 김좌진 장군이 이끄는 북로 군정서군 등이 일제 토벌대를 크게 물리친 전투는?", options: ["봉오동 전투", "청산리 대첩", "쌍성보 전투", "대전자령 전투"], answer: 1 },
    { question: "대한민국 임시 정부가 일제와 맞서 싸우기 위해 1940년 충칭에서 창설한 정규 군대는?", options: ["독립군", "조선 의용대", "한국광복군", "동북 항일 연군"], answer: 2 },
    { question: "우리나라가 일본의 식민 지배에서 벗어나 빛을 되찾은 '광복'을 맞이한 연도는?", options: ["1919년", "1932년", "1945년", "1948년"], answer: 2 },
    { question: "1950년 6월 25일 북한의 남침으로 시작되어 민족에게 큰 상처를 남긴 전쟁은?", options: ["청일 전쟁", "러일 전쟁", "6·25 전쟁", "베트남 전쟁"], answer: 2 },
    { question: "1960년 이승만 정부의 3·15 부정 선거에 항거하여 학생들이 중심이 되어 일어난 민주주의 혁명은?", options: ["4·19 혁명", "5·18 민주화 운동", "6월 민주 항쟁", "제주 4·3 사건"], answer: 0 },
    { question: "1980년 신군부의 비상계엄 확대에 반대하며 광주 시민들이 민주화를 요구한 운동은?", options: ["부·마 민주 항쟁", "5·18 민주화 운동", "6월 민주 항쟁", "4·19 혁명"], answer: 1 },
    { question: "1987년 박종철 고문치사 사건을 계기로 국민들이 대통령 직선제 개헌을 이끌어낸 민주화 운동은?", options: ["4·19 혁명", "5·18 민주화 운동", "6월 민주 항쟁", "동학 농민 운동"], answer: 2 },
    { question: "2000년 평양에서 남북 정상이 만나 분단 이후 최초로 합의한 선언은?", options: ["7·4 남북 공동 성명", "남북 기본 합의서", "6·15 남북 공동 선언", "판문점 선언"], answer: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionNumberEl = document.getElementById("question-number");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");
const feedbackText = document.getElementById("feedback-text");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestionIndex];
    
    questionNumberEl.textContent = `문제 ${currentQuestionIndex + 1} / ${quizData.length}`;
    questionTextEl.textContent = currentQuiz.question;
    
    // 프로그레스 바 업데이트
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsContainer.innerHTML = ""; // 기존 보기 초기화

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        score += 5; // 문제당 5점
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    
    progressBar.style.width = "100%"; // 마지막에 꽉 채우기
    scoreText.textContent = `${score}점!`;

    let feedback = "";
    if (score === 100) {
        feedback = "완벽해요! 한국사 마스터입니다! 🏆";
    } else if (score >= 80) {
        feedback = "참 잘했어요! 수업 내용을 아주 잘 기억하고 있네요. 😊";
    } else if (score >= 50) {
        feedback = "수고했어요! 조금만 더 복습하면 완벽할 거예요. 👍";
    } else {
        feedback = "괜찮아요! 지금부터 다시 차근차근 복습해 봅시다. 💪";
    }
    feedbackText.textContent = feedback;
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");
    loadQuestion();
});

// 초기 실행
loadQuestion();
