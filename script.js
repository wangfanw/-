
const questions = [
    {
        question: "公民、法人或者其他组织对行政机关实施行政强制，享有（    ）。",
        answers: ["陈述权、申辩权", "有权依法申请行政复议或者提起行政诉讼", "因行政机关违法实施行政强制受到损害的，有权依法要求赔偿", "其他选项都对"],
        correct: 3
    },
    {
        question: "国家赔偿的主要方式是什么？（    ）",
        answers: ["赔礼道歉", "返还财产", "恢复原状", "支付赔偿金"],
        correct: 3
    },
    // 更多题目可添加
];

let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

window.onload = function() {
    document.getElementById("total-questions").textContent = totalQuestions;
    loadQuestion();
};

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const form = document.getElementById("answer-form");
    form.innerHTML = "";  // 清空之前的选项

    const questionData = questions[currentQuestion];
    questionElement.textContent = questionData.question;

    questionData.answers.forEach((answer, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;

        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    });
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedbackElement = document.getElementById("feedback");

    if (!selected) {
        feedbackElement.textContent = "请选择一个答案！";
        return;
    }

    const answerIndex = parseInt(selected.value);
    if (answerIndex === questions[currentQuestion].correct) {
        score++;
        feedbackElement.textContent = "回答正确！";
    } else {
        feedbackElement.textContent = "回答错误！";
    }

    document.getElementById("answered-count").textContent = currentQuestion + 1;
    document.getElementById("score-count").textContent = score;

    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        loadQuestion();
    } else {
        feedbackElement.textContent += " 恭喜你完成了所有题目！";
        document.getElementById("submit-button").disabled = true;
    }
}
