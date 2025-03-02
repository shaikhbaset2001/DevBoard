const dateElement = document.getElementById("currentDate");
const currentDate = new Date().toDateString();
dateElement.textContent = currentDate;

const taskButtons = document.querySelectorAll(".task-button");
const taskAssignedCount = document.getElementById("taskAssignedCount");
const taskCompletedCount = document.getElementById("taskCompletedCount");
const activityLog = document.getElementById("activityLog");
const clearButton = document.getElementById("clear");
const bgButton = document.getElementById("bg-btn");
const colors = ["bg-blue-50", "bg-gray-200", "bg-green-200", "bg-purple-100", "bg-red-100", "bg-gray-800"];


let tasksAssigned = 6;
let taskCompleted = 24;
let currentColorIndex = 0;


taskButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!button.disabled) {
            button.disabled = true;
            button.textContent = "Completed";
            button.classList.remove("bg-indigo-600", "hover:bg-indigo-700");
            button.classList.add("bg-gray-400", "cursor-not-allowed");

            tasksAssigned -= 1;
            taskCompleted += 1;
            taskAssignedCount.textContent = tasksAssigned;
            taskCompletedCount.textContent = taskCompleted;

            const taskName = button
                .closest(".task-card")
                .querySelector("h4").textContent;
            const currentTime = new Date().toLocaleTimeString();

            const logEntry = document.createElement("p");
            logEntry.className = "title";
            logEntry.textContent = `✅ ${taskName} completed at ${currentTime}.`;
            activityLog.prepend(logEntry);
        }
    });
});

clearButton.addEventListener("click", () => {
    activityLog.innerHTML = "";
});

bgButton.addEventListener("click", () => {
    document.body.classList.remove(colors[currentColorIndex]);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.classList.add(colors[currentColorIndex]);
});