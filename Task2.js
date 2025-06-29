function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");

      li.innerHTML = `
        <input type="radio" onclick="toggleComplete(this)">
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
      `;

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    function toggleComplete(radio) {
      const textSpan = radio.nextElementSibling;
      textSpan.classList.toggle("completed");
      radio.checked = false; 
    }