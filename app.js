document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const urgencyLevel = document.getElementById('urgency-level');
    
    // Referências para as listas de cada urgência
    const todoListLow = document.getElementById('todo-list-low');
    const todoListMedium = document.getElementById('todo-list-medium');
    const todoListHigh = document.getElementById('todo-list-high');

    // Adicionar tarefa
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = todoInput.value;
        const urgency = urgencyLevel.value;

        if (taskText) {
            addTask(taskText, urgency);
            todoInput.value = '';  // Limpar o campo de entrada após adicionar
        }
    });

    // Função para adicionar a tarefa à coluna correspondente
    function addTask(taskText, urgency) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function () {
            li.classList.add('removing');
            setTimeout(function () {
                li.remove();
            }, 400);  // Tempo da animação de remoção
        });

        // Toggle de completado
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);  // Adicionar o botão de excluir à tarefa

        // Colocar a tarefa na coluna correta
        if (urgency === 'Baixa') {
            todoListLow.appendChild(li);
        } else if (urgency === 'Média') {
            todoListMedium.appendChild(li);
        } else if (urgency === 'Alta') {
            todoListHigh.appendChild(li);
        }
    }
});
