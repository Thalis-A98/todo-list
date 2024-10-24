document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do DOM
    const form = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const urgencySelect = document.getElementById("urgency-select");
    const lowUrgencyList = document.getElementById("low-urgency-list");
    const mediumUrgencyList = document.getElementById("medium-urgency-list");
    const highUrgencyList = document.getElementById("high-urgency-list");
  
    // Função para adicionar uma nova tarefa
    const addTask = (task, urgency) => {
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Excluir";
      deleteBtn.classList.add("delete-btn");
  
      // Adiciona o botão de deletar na tarefa
      li.appendChild(deleteBtn);
  
      // Coloca a tarefa na coluna de urgência correta
      if (urgency === "low") {
        lowUrgencyList.appendChild(li);
      } else if (urgency === "medium") {
        mediumUrgencyList.appendChild(li);
      } else if (urgency === "high") {
        highUrgencyList.appendChild(li);
      }
  
      // Função de excluir a tarefa
      deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks(); // Atualiza o armazenamento local após excluir uma tarefa
      });
    };
  
    // Função para salvar as tarefas no LocalStorage
    const saveTasks = () => {
      const tasks = {
        low: [],
        medium: [],
        high: [],
      };
  
      // Pega todas as tarefas de cada coluna
      lowUrgencyList.querySelectorAll("li").forEach((task) => {
        tasks.low.push(task.firstChild.textContent);
      });
      mediumUrgencyList.querySelectorAll("li").forEach((task) => {
        tasks.medium.push(task.firstChild.textContent);
      });
      highUrgencyList.querySelectorAll("li").forEach((task) => {
        tasks.high.push(task.firstChild.textContent);
      });
  
      // Armazena as tarefas no LocalStorage
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    // Função para carregar as tarefas do LocalStorage
    const loadTasks = () => {
      const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  
      if (savedTasks) {
        savedTasks.low.forEach((task) => addTask(task, "low"));
        savedTasks.medium.forEach((task) => addTask(task, "medium"));
        savedTasks.high.forEach((task) => addTask(task, "high"));
      }
    };
  
    // Evento de submissão do formulário para adicionar nova tarefa
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const task = taskInput.value.trim();
      const urgency = urgencySelect.value;
  
      if (task) {
        addTask(task, urgency);
        saveTasks(); // Salva as tarefas após adicionar uma nova
        taskInput.value = ""; // Limpa o campo de texto
      }
    });
  
    // Carrega as tarefas ao carregar a página
    loadTasks();
  });
  