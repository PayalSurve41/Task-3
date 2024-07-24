function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    if (title === "" || description === "") {
        alert("Please fill out both fields.");
        return;
    }

    const taskTableBody = document.getElementById('task-table-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>Pending</td>
        <td>
            <button class="complete-btn" onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </td>
    `;
    taskTableBody.appendChild(row);

    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
}

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function completeTask(button) {
    const row = button.parentElement.parentElement;
    row.cells[2].textContent = "Completed";
    button.remove();
}
