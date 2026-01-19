let timer, timeLeft = 1500, isRunning = false;

const display = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');

function updateDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    display.textContent = `${m}:${s}`;
}

startBtn.onclick = () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = "إيقاف";
        startBtn.classList.replace('btn-info', 'btn-warning');
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("انتهت جلسة التركيز!");
            }
        }, 1000);
    } else {
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = "استئناف";
        startBtn.classList.replace('btn-warning', 'btn-info');
    }
};

function setTime(mins) {
    clearInterval(timer);
    isRunning = false;
    timeLeft = mins * 60;
    updateDisplay();
    startBtn.textContent = "ابدأ";
}

document.getElementById('resetBtn').onclick = () => setTime(25);

document.getElementById('addTaskBtn').onclick = () => {
    const input = document.getElementById('taskInput');
    if (input.value.trim() !== "") {
        const taskList = document.getElementById('taskList');
        const div = document.createElement('div');
        div.className = "task-item anim-fade-in";
        div.textContent = `• ${input.value}`;
        taskList.appendChild(div);
        input.value = "";
    }
};