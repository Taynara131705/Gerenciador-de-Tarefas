const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    // Criando item da lista
    const li = document.createElement('li');

    // Texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;

    // Marcar como concluída
    span.onclick = function () {
        li.classList.toggle('completed');
    };

    // Botão excluir
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Excluir';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Limpa input
    taskInput.value = '';
}