document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const urgencySelect = document.getElementById('urgencySelect');
    const addTaskButton = document.getElementById('addTaskButton');
  
    // Recupera as tarefas do localStorage e garante que seja um array
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (!Array.isArray(tasks)) {
      tasks = [];
    }
  
    const renderTasks = () => {
      document.getElementById('lowUrgencyTasks').innerHTML = '';
      document.getElementById('mediumUrgencyTasks').innerHTML = '';
      document.getElementById('highUrgencyTasks').innerHTML = '';
  
      tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.name;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => {
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
        };
  
        taskElement.appendChild(deleteButton);
  
        if (task.urgency === 'low') {
          document.getElementById('lowUrgencyTasks').appendChild(taskElement);
        } else if (task.urgency === 'medium') {
          document.getElementById('mediumUrgencyTasks').appendChild(taskElement);
        } else if (task.urgency === 'high') {
          document.getElementById('highUrgencyTasks').appendChild(taskElement);
        }
      });
    };
  
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    addTaskButton.addEventListener('click', () => {
      const taskName = taskInput.value.trim();
      const taskUrgency = urgencySelect.value;
  
      if (taskName) {
        tasks.push({ name: taskName, urgency: taskUrgency });
        saveTasks();
        renderTasks();
        taskInput.value = '';
        urgencySelect.value = 'low';
      }
    });
  
    renderTasks();
  });
  